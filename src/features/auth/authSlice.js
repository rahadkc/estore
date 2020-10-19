import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAdmin: false
  },
  reducers: {
    userAuthenticate: (state) => {
      state.isAdmin = !state.isAdmin
    }
  }
});

export const isAuthenticated = state => state.auth.isAdmin

export const { userAuthenticate } = authSlice.actions;

export default authSlice.reducer;
