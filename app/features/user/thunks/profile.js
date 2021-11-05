import { createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '../../../../api/user';

const profile = createAsyncThunk('user/profile', async ({ token }, thunkApi) => {
	try {
		const response = await userApi.profile(token);
		return response.data;
	} catch (err) {
		if (!err.response) {
			throw err;
		}
		return thunkApi.rejectWithValue(err.response.data);
	}
});

export default profile;
