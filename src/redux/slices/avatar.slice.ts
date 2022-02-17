import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api, config } from "../helpers/api";
import fileChecksum from "../helpers/file_reader";

export const createPresignedUrl = async (
  currentFile: any,
  byte_size: any,
  checksum: any
) => {
  const file = {
    filename: currentFile.name,
    byte_size,
    checksum,
    content_type: "application/jpg",
    metadata: {
      message: "image for parsing",
    },
  };
  const result = await api
    .post(`/presigned_url`, { file })
    .then((res) => res.data);
    return result;
};

type stateAvatar = {
  avatar: any,
  status: "idle" | "pending" | "succeeded" | "failed",
  error: null | unknown
}

const initialState: stateAvatar= {
  avatar: '',
  status: 'idle',
  error: null
}

export const createAvatar = createAsyncThunk(
  "avatar/createAvatar", 
  async (image:any) => {
  const checksum = await fileChecksum(image);
  const presignedFileParams = await createPresignedUrl(
    image,
    image.size,
    checksum
  );
  const s3PutOptions = {
    method: "PUT",
    headers: presignedFileParams.direct_upload.headers,
    body: image,
  };

  const awsRes = await fetch(
    presignedFileParams.direct_upload.url,
    s3PutOptions
  );

  if (awsRes.status !== 200) return awsRes;
  const photo = {
    image: presignedFileParams.blob_signed_id,
  };
  const response = await api.post("/avatars", photo);
  return response.data;
});

export const fetchAvatar = createAsyncThunk(
  "avatar/fetchAvatar",
  async (avatarId) => {
  const response = await api.get(`/avatars/${avatarId}`, config);
  return avatarId;
 }
)

export const deleteAvatar = createAsyncThunk(
  "avatar/deleteAvatar",
 async (avatarId) => {
  const response = await api.delete(`/avatars/${avatarId}`, config, avatarId);
  return response.data.avatar;
 }
)

const avatarSlice = createSlice({
  name: "avatar",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    //post avatar
    builder.addCase(createAvatar.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(createAvatar.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.avatar = action.payload;
    });
    builder.addCase(createAvatar.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });

    //fetch avatar
    builder.addCase(fetchAvatar.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(fetchAvatar.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.avatar = action.payload;
    });
    builder.addCase(fetchAvatar.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
  }
})

export default avatarSlice.reducer;
