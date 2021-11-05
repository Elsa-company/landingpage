import putThunk from '../thunks/put';
import STATUS from '../../../../constant/status';
const changeEmailExtraReducers = {
	[putThunk.verifyChangeEmail.pending]: state => {
		state.status = STATUS.LOADING;
		state.error = null;
	},
	[putThunk.verifyChangeEmail.fulfilled]: (state, action) => {
		state.status = STATUS.SUCCESS;
		console.log(action);
		state.data = action.payload.data;
		state.error = null;
	},
	[putThunk.verifyChangeEmail.rejected]: (state, action) => {
		state.status = STATUS.ERROR;
		state.error = action.error;
	},
};

export default changeEmailExtraReducers;
