import loginThunk from '../thunks/login';
import STATUS from '../../../../constant/status';

const loginExtraReducers = {
	[loginThunk.pending]: state => {
		state.status = STATUS.LOADING;
	},
	[loginThunk.fulfilled]: (state, action) => {
		state.status = STATUS.SUCCESS;
		state.data = {
			userId     : action.payload.data.userId,
			isActive   : action.payload.data.isActive,
			isVerified : action.payload.data.isVerified,
		};
		state.token = action.payload.data.token;
		state.error = null;
	},
	[loginThunk.rejected]: (state, action) => {
		state.status = STATUS.ERROR;
		state.error = action.error;
	},
};

export default loginExtraReducers;
