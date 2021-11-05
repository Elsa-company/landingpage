import putThunk from '../thunks/put';
import STATUS from '../../../../constant/status';
import _ from 'lodash';

const changeEmailExtraReducers = {
	[putThunk.email.pending]: state => {
		state.status = STATUS.LOADING;
		state.error = null;
	},
	[putThunk.email.fulfilled]: (state, action) => {
		const data = _.pick(action.payload.data, [
			'displayname',
			'email',
			'phone',
			'address',
			'zip',
			'state',
			'city',
			'country',
			'firstname',
			'lastname',
		]);

		state.status = STATUS.SUCCESS;
		state.data = data;
		state.error = null;
	},
	[putThunk.email.rejected]: (state, action) => {
		state.status = STATUS.ERROR;
		state.data = {};
		state.error = action.error;
	},
};

export default changeEmailExtraReducers;
