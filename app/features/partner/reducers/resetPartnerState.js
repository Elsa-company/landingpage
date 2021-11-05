import STATUS from '../../../../constant/status';

function resetPartnerState (state) {
	state.status = STATUS.IDLE;

	state.partners = [];
	state.partnerModal = {};
	state.skip = 0;
	state.totalPages = 0;

	state.error = null;
}

export default resetPartnerState;
