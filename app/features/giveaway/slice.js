import { createSlice } from '@reduxjs/toolkit';
import INITIAL_STATE from './initialState';

import extraReducers from './extraReducers';
import reducers from './reducers';

export const giveawaySlice = createSlice({
	name          : 'giveaway',
	initialState  : INITIAL_STATE,
	reducers,
	extraReducers,
});

export const { setSkip, resetGiveawayState } = giveawaySlice.actions;
export default giveawaySlice.reducer;
