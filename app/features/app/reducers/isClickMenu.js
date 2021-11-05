import STATUS from '../../../../constant/status';

function joinNowModal (state, action) {
	state.status = STATUS.SUCCESS;
	state.isClickMenu = action.payload;
}

export default joinNowModal;
