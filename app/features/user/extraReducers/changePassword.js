import putThunk from '../thunks/put';
import STATUS from '../../../../constant/status';
import _ from 'lodash';

const changePasswordExtraReducers = {
	[putThunk.password.pending]: state => {
		state.status = STATUS.LOADING;
		state.error = null;
	},
	[putThunk.password.fulfilled]: (state, action) => {
		state.status = STATUS.SUCCESS;
		state.error = null;
	},
	[putThunk.password.rejected]: (state, action) => {
		state.status = STATUS.ERROR;
		state.error = action.error;
	},
};

export default changePasswordExtraReducers;
