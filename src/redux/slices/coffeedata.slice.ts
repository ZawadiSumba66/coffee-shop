import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../helpers/api';

export type CoffeeData = {
  name: string,
  image: string
};

type StateData = {
  latte: CoffeeData[],
  espresso: CoffeeData[],
  popular: CoffeeData[],
  post: CoffeeData,
  status: 'idle' | 'pending' | 'succeeded' | 'failed',
  error: null | unknown
};

const initialState: StateData = {
  latte: [],
  espresso: [],
  popular: [],
  post: { name: '', image: '' },
  status: 'idle',
  error: null,
};

export const getCoffeePosts = createAsyncThunk(
  'data/getCoffeePosts',
  async () => {
    const response = await api.get('/posts');
    return response.data;
  },
);

export const getCoffeePost = createAsyncThunk(
  'data/getCoffeePost',
  async (id: number) => {
    const response = await api.get(`/posts/${id}`);
    return response.data;
  },
);

/* eslint-disable no-param-reassign */
const coffeeDataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get coffees
    builder.addCase(getCoffeePosts.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.popular = action.payload.popular;
      state.espresso = action.payload.espresso;
      state.latte = action.payload.latte;
    });

    builder.addCase(getCoffeePost.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.post = action.payload;
    });
  },
});

export default coffeeDataSlice.reducer;
