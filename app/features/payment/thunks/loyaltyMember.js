import { createAsyncThunk } from '@reduxjs/toolkit';
import paymentApi from '../../../../api/payment';

const loyaltyMember = createAsyncThunk('payment/loyaltyMember', async ({paymentdata, token }, thunkApi) => {
	try {
		const response = await paymentApi.loyaltyMember(paymentdata, token);
		return response.data;
	} catch (err) {
		if (!err.response) {
			throw err;
		}
		return thunkApi.rejectWithValue(err.response.data);
	}
});

export default loyaltyMember
