import STATUS from '../../../../constant/status';

function comfirmPasswordModal (state, payload) {
	state.status = STATUS.SUCCESS;
	state.modalComfirmPassword = payload;
}

export default comfirmPasswordModal;
