import thunk from '../thunks';
import STATUS from '../../../../constant/status';
import _ from 'lodash';

const giveawayPaymentExtraReducers = {
	[thunk.giveawayPayment.pending]: state => {
		state.status = STATUS.LOADING;
		state.error = null;
	},
	[thunk.giveawayPayment.fulfilled]: (state, action) => {
		state.status = STATUS.SUCCESS;
		state.error = null;
	},
	[thunk.giveawayPayment.rejected]: (state, action) => {
		state.status = STATUS.ERROR;
		state.error = action.error;
	},
};

export default giveawayPaymentExtraReducers;
