import STATUS from '../../../constant/status';

const INITIAL_STATE = {
	status     : STATUS.IDLE,

	giveaways  : [],
	skip       : 0, // current page - skip = 0 currentPage = 1 on UI;
	totalPages : 0,

	error      : null,

	giveaway   : {},
};

export default INITIAL_STATE;
