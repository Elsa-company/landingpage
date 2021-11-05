import { createAsyncThunk } from '@reduxjs/toolkit';
import purchaseHistoryApi from '../../../../api/purchaseHistory/index';

class GetThunk {
	all = createAsyncThunk('purchaseHistory/all', async ({ skip = 0, token }, thunkApi) => {
		try {
			const response = await purchaseHistoryApi.get.all({ skip, token });

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
