import { createAsyncThunk } from '@reduxjs/toolkit';
import paymentApi from '../../../../api/payment';

const giveawayPayment = createAsyncThunk('payment/giveawayPayment', async ({paymentdata, token }, thunkApi) => {
	try {
		const response = await paymentApi.giveawayPayment(paymentdata, token);
		return response.data;
	} catch (err) {
		if (!err.response) {
			throw err;
		}
		return thunkApi.rejectWithValue(err.response.data);
	}
});

export default giveawayPayment
