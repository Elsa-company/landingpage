import STATUS from '../../../../constant/status';

function loginModal (state, payload) {
	state.status = STATUS.SUCCESS;
	state.modalVisibleLogin = payload;
}

export default loginModal;
