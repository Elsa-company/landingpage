import { createSlice } from '@reduxjs/toolkit';
import INITIAL_STATE from './initialState';

// import extraReducers from './extraReducers';
import reducers from './reducers';

export const authSlice = createSlice({
	name         : 'app',
	initialState : INITIAL_STATE,
	reducers,
	// extraReducers,
});

export const {
	setModalVisibleLogin,
	setModalVisibleJoinNow,
	isClickMenu,
	onChangeTabs,
} = authSlice.actions;

export default authSlice.reducer;
