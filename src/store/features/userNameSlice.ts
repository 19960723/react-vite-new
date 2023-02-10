import { createSlice } from '@reduxjs/toolkit';

export interface UserSlice {
  value: number;
}

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: 'lxl',
    password: '123456',
  },
  reducers: {},
});

export default userSlice.reducer;
