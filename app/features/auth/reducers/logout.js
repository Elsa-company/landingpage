import STATUS from '../../../../constant/status';

function logout (state, action) {
	state.status = STATUS.SUCCESS;
	state.data = {};
	state.token = '';
	state.error = null;
}

export default logout;
