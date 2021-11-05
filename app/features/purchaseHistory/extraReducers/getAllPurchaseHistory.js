import getPurchaseHistoryThunk from '../thunks/get';
import STATUS from '../../../../constant/status';
import _ from 'lodash';

const getGiveawayExtraReducers = {
	[getPurchaseHistoryThunk.all.pending]: state => {
		state.status = STATUS.LOADING;
		state.totalPages = 0;
		state.error = null;
	},
	[getPurchaseHistoryThunk.all.fulfilled]: (state, action) => {
		state.status = STATUS.SUCCESS;
		state.purchaseHistory = action.payload.data;
		state.error = null;
	},
	[getPurchaseHistoryThunk.all.rejected]: (state, action) => {
		state.status = STATUS.ERROR;
		state.purchaseHistory = [];
		state.error = action.error;
	},
};

export default getGiveawayExtraReducers;
