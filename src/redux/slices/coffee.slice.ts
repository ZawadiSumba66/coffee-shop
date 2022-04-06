import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../helpers/api';

export type CoffeeParameters = {
  name: string,
  price: number,
  size: string | undefined
  milk: 'Normal' | 'Soya Milk' | 'Oat Milk' | undefined
  topping: 'Almond' | 'Caramel' | 'Chocolate' | 'Mint' | 'Vodka' | undefined,
};

type ParametarsState = {
  coffee: CoffeeParameters,
  status: 'idle' | 'pending' | 'succeeded' | 'failed',
  error: null | unknown
};

const initialState: ParametarsState = {
  coffee: {
    name: '', price: 0, size: '', milk: undefined, topping: undefined,
  },
  status: 'idle',
  error: null,
};

export const createCoffeeParameters = createAsyncThunk(
  'coffee/createcoffee',
  async (parameters: CoffeeParameters, { rejectWithValue }) => {
    try {
      const response = await api.post('/coffees', { parameters }, {
        headers: {
          Authorization: `token ${localStorage.getItem('token')}`,
        },
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

/* eslint-disable no-param-reassign */
const coffeeSlice = createSlice({
  name: 'coffee',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createCoffeeParameters.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(createCoffeeParameters.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.coffee = action.payload;
    });
    builder.addCase(createCoffeeParameters.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });
  },
});

export default coffeeSlice.reducer;
