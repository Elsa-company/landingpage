import STATUS from '../../../../constant/status';

function resetPurchaseHistoryState (state) {
	state.status = STATUS.IDLE;

	state.purchaseHistory = [];
	state.skip = 0;
	state.totalPages = 0;

	state.error = null;
}

export default resetPurchaseHistoryState;
