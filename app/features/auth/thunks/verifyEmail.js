import { createAsyncThunk } from '@reduxjs/toolkit';
import authApi from '../../../../api/auth';

const forgetPassword = createAsyncThunk('auth/verifyEmail', async ({ token }, thunkApi) => {
	try {
		const response = await authApi.verifyEmail({ token });
		return response.data;
	} catch (err) {
		if (!err.response) {
			throw err;
		}
		return thunkApi.rejectWithValue(err.response.data);
	}
});

export default forgetPassword;
