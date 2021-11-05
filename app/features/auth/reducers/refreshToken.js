import STATUS from '../../../../constant/status';

function logout (state, action) {
	state.status = STATUS.SUCCESS;
	state.token = action.payload;
	state.error = null;
}

export default logout;
