import profileThunk from '../thunks/profile';
import STATUS from '../../../../constant/status';
import _ from 'lodash';

const profileExtraReducers = {
	[profileThunk.pending]: state => {
		state.status = STATUS.LOADING;
		state.error = null;
	},
	[profileThunk.fulfilled]: (state, action) => {
		state.status = STATUS.SUCCESS;
		state.data = action.payload.data;
		state.error = null;
	},
	[profileThunk.rejected]: (state, action) => {
		state.status = STATUS.ERROR;
		state.error = action.error;
	},
};

export default profileExtraReducers;
