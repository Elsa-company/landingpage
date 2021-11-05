import { createAsyncThunk } from '@reduxjs/toolkit';
import partnerApi from '../../../../api/partner/index';

class GetThunk {
	all = createAsyncThunk('partner/getAll', async ({ skip = 0, token }, thunkApi) => {
		try {
			const response = await partnerApi.get.all({ skip, token });

			return response.data;
		} catch (err) {
			if (!err.response) {
				throw err;
			}
			return thunkApi.rejectWithValue(err.response.data);
		}
	});

	one = createAsyncThunk('partner/getOne', async ({ _id, token }, thunkApi) => {
		try {
			const response = await partnerApi.get.one({ _id, token });
			return response.data;
		} catch (err) {
			if (!err.response) {
				throw err;
			}
			return thunkApi.rejectWithValue(err.response.data);
		}
	});
}

export default new GetThunk();
