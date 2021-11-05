import STATUS from '../../../../constant/status';

function joinNowModal (state, payload) {
	state.status = STATUS.SUCCESS;
	state.modalVisibleJoinNow = payload;
}

export default joinNowModal;
