import { createSlice } from '@reduxjs/toolkit';
import INITIAL_STATE from './initialState';

import extraReducers from './extraReducers';
import reducers from './reducers';

export const paymentSlice = createSlice({
	name          : 'payment',
	initialState  : INITIAL_STATE,
	reducers,
	extraReducers,
});

export const {
	addPackage
} = paymentSlice.actions
export default paymentSlice.reducer;
