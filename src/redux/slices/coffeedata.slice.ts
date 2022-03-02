import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../helpers/api';

type CoffeeData = {
  name: string,
  image: string
};

type StateData = {
  latte: CoffeeData[],
  espresso: CoffeeData[],
  popular: CoffeeData[],
  status: 'idle' | 'pending' | 'succeeded' | 'failed',
  error: null | unknown
};

const initialState: StateData = {
  latte: [],
  espresso: [],
  popular: [],
  status: 'idle',
  error: null,
};

export const getPopularCoffee = createAsyncThunk(
  'data/getPopularCoffee',
  async () => {
    const response = await api.get('/populars');
    return response.data;
  },
);

export const getLatteCoffee = createAsyncThunk(
  'data/getLatteCoffee',
  async () => {
    const response = await api.get('/lattes');
    return response.data;
  },
);

export const getEspressoCoffee = createAsyncThunk(
  'data/getEspressoCoffee',
  async () => {
    const response = await api.get('/espressos');
    return response.data;
  },
);

/* eslint-disable no-param-reassign */
const coffeeDataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get popular coffee
    builder.addCase(getPopularCoffee.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(getPopularCoffee.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.popular = action.payload;
    });
    builder.addCase(getPopularCoffee.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });
    // get espresso coffee
    builder.addCase(getEspressoCoffee.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(getEspressoCoffee.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.espresso = action.payload;
    });
    builder.addCase(getEspressoCoffee.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });
    // get latte coffee
    builder.addCase(getLatteCoffee.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(getLatteCoffee.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.latte = action.payload;
    });
    builder.addCase(getLatteCoffee.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });
  },
});

export default coffeeDataSlice.reducer;
