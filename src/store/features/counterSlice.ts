import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterSlice {
  value: number;
}

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state: CounterSlice) => {
      state.value += 1;
    },
    decrement: (state: CounterSlice) => {
      state.value -= 1;
    },
    incrementByAmount: (state: CounterSlice, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
