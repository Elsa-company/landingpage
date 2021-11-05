import { createSlice } from '@reduxjs/toolkit';
import INITIAL_STATE from './initialState';

import extraReducers from './extraReducers';
import reducers from './reducers';

export const purchaseHistoeySlice = createSlice({
	name          : 'purchaseHistory',
	initialState  : INITIAL_STATE,
	reducers,
	extraReducers,
});

export const { setSkip, resetPurchaseHistoryState } = purchaseHistoeySlice.actions;
export default purchaseHistoeySlice.reducer;
