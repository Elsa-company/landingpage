import STATUS from '../../../../constant/status';

function comfirmPasswordModal (state, action) {
	state.status = STATUS.SUCCESS;
	state.modalComfirmPassword = action.payload;
}

export default comfirmPasswordModal;
