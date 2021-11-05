import { createSlice } from '@reduxjs/toolkit';
import INITIAL_STATE from './initialState';

import extraReducers from './extraReducers';
import reducers from './reducers';

export const partnerSlice = createSlice({
	name          : 'partner',
	initialState  : INITIAL_STATE,
	reducers,
	extraReducers,
});

export const { setSkip, resetPartnerState } = partnerSlice.actions;
export default partnerSlice.reducer;
