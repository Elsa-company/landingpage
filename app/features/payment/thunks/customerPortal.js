import { createAsyncThunk } from '@reduxjs/toolkit';
import paymentApi from '../../../../api/payment';

const loyaltyMember = createAsyncThunk('payment/customerPortal', async ({token }, thunkApi) => {
	try {
		const response = await paymentApi.customerPortal(token);
		return response.data;
	} catch (err) {
		if (!err.response) {
			throw err;
		}
		return thunkApi.rejectWithValue(err.response.data);
	}
});

export default loyaltyMember
