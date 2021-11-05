import thunk from '../thunks';
import STATUS from '../../../../constant/status';
import _ from 'lodash';

const loyaltyMemberExtraReducers = {
	[thunk.loyaltyMember.pending]: state => {
		state.status = STATUS.LOADING;
		state.error = null;
	},
	[thunk.loyaltyMember.fulfilled]: (state, action) => {
		state.status = STATUS.SUCCESS;
		state.error = null;
	},
	[thunk.loyaltyMember.rejected]: (state, action) => {
		state.status = STATUS.ERROR;
		state.error = action.error;
	},
};

export default loyaltyMemberExtraReducers;
