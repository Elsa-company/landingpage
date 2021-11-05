import getPartnerThunk from '../thunks/get';
import STATUS from '../../../../constant/status';
import _ from 'lodash';

const getGiveawayExtraReducers = {
	[getPartnerThunk.all.pending]: state => {
		state.status = STATUS.LOADING;
		state.error = null;
	},
	[getPartnerThunk.all.fulfilled]: (state, action) => {
		state.status = STATUS.SUCCESS;
		state.partners = action.payload.data.partners;
		state.totalPages = action.payload.data.totalPages;
		state.error = null;
	},
	[getPartnerThunk.all.rejected]: (state, action) => {
		state.status = STATUS.ERROR;
		state.partners = [];
		state.totalPages = 0;
		state.error = action.error;
	},
};

export default getGiveawayExtraReducers;
