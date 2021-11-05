import STATUS from '../../../../constant/status';

function resetGiveawayState (state) {
	state.status = STATUS.IDLE;

	state.giveaways = [];
	state.giveaway = {};
	state.skip = 0;
	state.totalPages = 0;

	state.error = null;
}

export default resetGiveawayState;
