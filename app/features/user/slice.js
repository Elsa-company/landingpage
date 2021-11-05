import { createSlice } from '@reduxjs/toolkit';
import INITIAL_STATE from './initialState';

import extraReducers from './extraReducers';
import reducers from './reducers';

export const userSlice = createSlice({
	name          : 'user',
	initialState  : INITIAL_STATE,
	reducers,
	extraReducers,
});

export const {
	changeEmail,
	changeProfile,
	setComfirmPassword,
	resetUserState,
	setProfile,
	setVipMember,
} = userSlice.actions;
export default userSlice.reducer;
