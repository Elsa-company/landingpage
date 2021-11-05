import { createSlice } from '@reduxjs/toolkit';
import INITIAL_STATE from './initialState';

import extraReducers from './extraReducers';
import reducers from './reducers';

export const authSlice = createSlice({
	name          : 'auth',
	initialState  : INITIAL_STATE,
	reducers,
	extraReducers,
});

export const { logout, refreshToken } = authSlice.actions;
export default authSlice.reducer;
