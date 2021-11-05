import forgetPasswordThunk from '../thunks/forgetPassword';
import STATUS from '../../../../constant/status';

const forgetPasswordExtraReducers = {
	[forgetPasswordThunk.pending]: state => {
		state.status = STATUS.LOADING;
	},
	[forgetPasswordThunk.fulfilled]: (state, action) => {
		state.status = STATUS.SUCCESS;
		state.error = null;
	},
	[forgetPasswordThunk.rejected]: (state, action) => {
		state.status = STATUS.ERROR;
		state.error = action.error;
	},
};

export default forgetPasswordExtraReducers;
