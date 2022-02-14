import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../api";

type UserData = {
  firstname: string,
  lastname: string,
  email: string,
  password: string,
  password_confirmation: string
}

type stateUser = {
    user: UserData,
    error: null | unknown,
    status: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: stateUser = {
  user: {firstname: '', lastname: '', email: '', password: '', password_confirmation: ''},
  error: null,
  status: 'idle'
};

let config = { 
    headers: { 
        Authorization: `token ${localStorage.getItem('token')}`,
     }}
export const createUser = createAsyncThunk(
  "user/createuser",
  async (payload) => {
    const response = await api.createuser(`/users`, payload);
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      return response.data;
    }
  }
);

export const fetchUser = createAsyncThunk(
   "user/fetachUser",
   async (payload) =>{
       const response = await api.getuser(`/users/${payload}`, config.headers)
       return response.data.user;
   }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder.addCase(createUser.pending, (state, action) => {
      state.status = 'pending'
    })
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.user = action.payload
    })
    builder.addCase(createUser.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.payload
    })
  }
});
