import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api, config } from "../helpers/api";

type UserData = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  password_confirmation: string;
};

type stateUser = {
  user: UserData;
  error: null | unknown;
  status: "idle" | "pending" | "succeeded" | "failed";
};

const initialState: stateUser = {
  user: {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password_confirmation: "",
  },
  error: null,
  status: "idle",
};

export const createUser = createAsyncThunk(
  "user/createuser",
  async (payload) => {
    const response = await api.post(`/users`, payload);
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      return response.data;
    }
  }
);

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (payload) => {
  const response = await api.get(`/users/${payload}`, config);
  return response.data.user;
});

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (payload) => {
  const response = await api.post(`/auth`, payload);
  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
    return response.data;
  }
});

export const updateUser = createAsyncThunk(
  "user/updateUser",
 async (payload) => {
  const response = await api.put(`/users/${payload}`, config, payload);
  return response.data;
 }
)
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // user signup
    builder.addCase(createUser.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.user = action.payload;
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });

    // user login
    builder.addCase(loginUser.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.user = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });

    // fetch user
    builder.addCase(fetchUser.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.user = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });

    //update user
    builder.addCase(updateUser.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.user = action.payload;
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
  },
});

export default userSlice.reducer;
