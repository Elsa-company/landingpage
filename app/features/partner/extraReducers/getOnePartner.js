import getPartnerThunk from '../thunks/get';
import STATUS from '../../../../constant/status';
import _ from 'lodash';

const getPartnerExtraReducers = {
	[getPartnerThunk.one.pending]: state => {
		state.status = STATUS.LOADING;
		state.error = null;
	},
	[getPartnerThunk.one.fulfilled]: (state, action) => {
		state.status = STATUS.SUCCESS;
		state.partnerModal = action.payload.data;
		state.error = null;
	},
	[getPartnerThunk.one.rejected]: (state, action) => {
		state.status = STATUS.ERROR;
		state.partnerModal = {};
		state.error = action.error;
	},
};

export default getPartnerExtraReducers;
