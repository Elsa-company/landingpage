import resetPasswordThunk from '../thunks/resetPassword';
import STATUS from '../../../../constant/status';

const resetPasswordExtraReducers = {
	[resetPasswordThunk.pending]: state => {
		state.status = STATUS.LOADING;
	},
	[resetPasswordThunk.fulfilled]: (state, action) => {
		state.status = STATUS.SUCCESS;
		state.error = null;
	},
	[resetPasswordThunk.rejected]: (state, action) => {
		state.status = STATUS.ERROR;
		state.error = action.error;
	},
};

export default resetPasswordExtraReducers;
