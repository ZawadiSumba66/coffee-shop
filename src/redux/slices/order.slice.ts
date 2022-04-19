import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api, config } from '../helpers/api';

export type CoffeeOrders = {
  id: number,
  description: string,
  receipt_url: string,
  amount: number,
};

type OrderState = {
  orders: CoffeeOrders[],
  status: 'idle' | 'pending' | 'succeeded' | 'failed',
};

const initialState: OrderState = {
  status: 'idle',
  orders: [],
};

export const getCoffeeOrders = createAsyncThunk(
  'order/getCoffeeOrders',
  async () => {
    const response = await api.get('/payment_intents', config);
    return response.data.data;
  },
);

/* eslint-disable no-param-reassign */
const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCoffeeOrders.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.orders = action.payload;
    });
  },
});

export default orderSlice.reducer;
