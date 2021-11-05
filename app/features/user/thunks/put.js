import { createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '../../../../api/user';

class Put {
	email = createAsyncThunk('user/email', async ({ token, userData }, thunkApi) => {
		try {
			const response = await userApi.put.email({ userData, token });
			return response.data;
		} catch (err) {
			if (!err.response) {
				throw err;
			}
			return thunkApi.rejectWithValue(err.response.data);
		}
	});

	verifyChangeEmail = createAsyncThunk('user/verifyChangeEmail', async ({ token }, thunkApi) => {
		try {
			const response = await userApi.put.verifyChangeEmail({ token });
			return response.data;
		} catch (err) {
			if (!err.response) {
				throw err;
			}
			return thunkApi.rejectWithValue(err.response.data);
		}
	});

	password = createAsyncThunk(
		'user/changePassword',
		async ({ token, newPassword, currentPassword }, thunkApi) => {
			try {
				const response = await userApi.put.password({
					token,
					newPassword,
					currentPassword,
				});
				return response.data;
			} catch (err) {
				if (!err.response) {
					throw err;
				}
				return thunkApi.rejectWithValue(err.response.data);
			}
		},
	);
}
export default new Put();
