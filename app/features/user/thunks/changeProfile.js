import { createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '../../../../api/user';

const changeProfile = createAsyncThunk(
	'user/changeProfile',
	async ({ userdata, token }, thunkApi) => {
		try {
			const response = await userApi.changeProfile({ userdata, token });

			return response.data;
		} catch (err) {
			if (!err.response) {
				throw err;
			}
			return thunkApi.rejectWithValue(err.response.data);
		}
	},
);

export default changeProfile;
