import verifyEmailThunk from '../thunks/verifyEmail';
import STATUS from '../../../../constant/status';

const verifyEmailExtraReducers = {
	[verifyEmailThunk.pending]: state => {
		state.status = STATUS.LOADING;
	},
	[verifyEmailThunk.fulfilled]: (state, action) => {
		state.status = STATUS.SUCCESS;
		state.token = action.payload.data.token;
		state.error = null;
	},
	[verifyEmailThunk.rejected]: (state, action) => {
		state.status = STATUS.ERROR;
		state.error = action.error;
	},
};

export default verifyEmailExtraReducers;
