import changeProfileThunk from '../thunks/changeProfile';
import STATUS from '../../../../constant/status';
import _ from 'lodash';

const changeProfileExtraReducers = {
	[changeProfileThunk.pending]: state => {
		state.status = STATUS.LOADING;
		state.error = null;
	},
	[changeProfileThunk.fulfilled]: (state, action) => {
		state.status = STATUS.SUCCESS;
		state.data = action.payload.data;
		state.error = null;
	},
	[changeProfileThunk.rejected]: (state, action) => {
		state.status = STATUS.ERROR;
		state.error = action.error;
	},
};

export default changeProfileExtraReducers;
