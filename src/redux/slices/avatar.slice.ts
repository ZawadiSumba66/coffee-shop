import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api, config } from '../helpers/api';
import fileChecksum from '../helpers/file_reader';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const createPresignedUrl = async (
  currentFile: any,
  byte_size: string,
  checksum: string,
) => {
  const file = {
    filename: currentFile.name,
    byte_size,
    checksum,
    content_type: 'application/jpg',
    metadata: {
      message: 'image for parsing',
    },
  };
  const result = await api
    .post('/presigned_url', { file })
    .then((res) => res.data);
  return result;
};

type StateAvatar = {
  avatar: string,
  status: 'idle' | 'pending' | 'succeeded' | 'failed',
  error: null | unknown
};

const initialState: StateAvatar = {
  avatar: '',
  status: 'idle',
  error: null,
};

export const createAvatar = createAsyncThunk(
  'avatar/createAvatar',
  async (image: any, { rejectWithValue }) => {
    const checksum = await fileChecksum(image);
    const presignedFileParams = await createPresignedUrl(
      image,
      image.size,
      checksum,
    );
    const s3PutOptions = {
      method: 'PUT',
      headers: presignedFileParams.direct_upload.headers,
      body: image,
    };

    const awsRes = await fetch(
      presignedFileParams.direct_upload.url,
      s3PutOptions,
    );

    if (awsRes.status !== 200) return awsRes;
    const file = {
      image: presignedFileParams.blob_signed_id,
    };
    try {
      const response = await api.post('/avatars', file, {
        headers: {
          Authorization: `token ${localStorage.getItem('token')}`,
        },
      });
      return response.data.avatar_url;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const fetchAvatar = createAsyncThunk(
  'avatar/fetchAvatar',
  async (id) => {
    const response = await api.get(`/avatars/${id}`, config);
    return response.data.avatar_url;
  },
);

export const deleteAvatar = createAsyncThunk(
  'avatar/deleteAvatar',
  async (avatarId: undefined) => {
    const response = await api.delete(`/avatars/${avatarId}`, avatarId);
    return response.data.avatar;
  },
);
/* eslint-disable no-param-reassign */
const avatarSlice = createSlice({
  name: 'avatar',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // post avatar
    builder.addCase(createAvatar.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(createAvatar.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.avatar = action.payload;
    });
    builder.addCase(createAvatar.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });

    // fetch avatar
    builder.addCase(fetchAvatar.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(fetchAvatar.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.avatar = action.payload;
    });
    builder.addCase(fetchAvatar.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });
  },
});

export default avatarSlice.reducer;
