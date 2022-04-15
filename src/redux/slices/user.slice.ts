import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';
import history from '../../routes/history';
import { api, config } from '../helpers/api';

export type UserData = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export type StateUser = {
  user: UserData;
  login_error: any;
  signup_error: any;
  update_error: any;
  get_error: any;
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
};

export type UserLogin = Pick<UserData, 'email' | 'password'>;
type UserSettings = Omit<UserData, 'password_confirmation'>;

const initialState: StateUser = {
  user: {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    password_confirmation: '',
  },
  login_error: null,
  signup_error: null,
  update_error: null,
  get_error: null,
  status: 'idle',
};

const token = localStorage.getItem('token');
let userId: number;
if (token) {
  const decoded: any = jwtDecode(token);
  userId = decoded.sub;
}

export const createUser = createAsyncThunk(
  'user/createuser',
  async (user: UserData, { rejectWithValue }) => {
    try {
      const response = await api.post('/users', { user });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        setTimeout(() => {
          history.push('/dashboard');
        }, 1000);
        return response.data;
      }
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async () => {
    const response = await api.get(`/users/${userId}`, config);
    return response.data;
  },
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user: UserLogin, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth', { user });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        setTimeout(() => {
          history.replace('/dashboard');
        }, 1000);
        return response.data;
      }
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.errors);
    }
  },
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (user: UserSettings) => {
    const response = await api.put(`/users/${userId}`, config, user);
    return response.data;
  },
);

/* eslint-disable no-param-reassign */
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // user signup
    builder.addCase(createUser.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.user = action.payload;
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.status = 'failed';
      state.signup_error = action.payload;
    });

    // user login
    builder.addCase(loginUser.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.user = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.status = 'failed';
      state.login_error = action.payload;
    });

    // fetch user
    builder.addCase(fetchUser.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.user = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.status = 'failed';
      state.get_error = action.payload;
    });

    // update user
    builder.addCase(updateUser.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.user = action.payload;
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.status = 'failed';
      state.update_error = action.payload;
    });
  },
});

export default userSlice.reducer;
