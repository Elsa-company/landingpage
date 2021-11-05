import { createAsyncThunk } from '@reduxjs/toolkit';
import giveawayApi from '../../../../api/giveaway/index';

class GetThunk {
	all = createAsyncThunk('giveaway/getAll', async ({ skip = 0 }, thunkApi) => {
		try {
			const response = await giveawayApi.get.all({ skip });

			return response.data;
		} catch (err) {
			if (!err.response) {
				throw err;
			}
			return thunkApi.rejectWithValue(err.response.data);
		}
	});

	one = createAsyncThunk('giveaway/getOne', async ({ _id }, thunkApi) => {
		try {
			const response = await giveawayApi.get.one({ _id });
			
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
