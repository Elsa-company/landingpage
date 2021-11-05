import { createAsyncThunk } from '@reduxjs/toolkit';
import authApi from '../../../../api/auth';

const forgetPassword = createAsyncThunk(
	'auth/resetPassword',
	async ({ password, token }, thunkApi) => {
		try {
			const response = await authApi.resetPassword({ password, token });
			return response.data;
		} catch (err) {
			if (!err.response) {
				throw err;
			}
			return thunkApi.rejectWithValue(err.response.data);
		}
	},
);

export default forgetPassword;
