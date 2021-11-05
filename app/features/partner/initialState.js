import STATUS from '../../../constant/status';

const INITIAL_STATE = {
	status       : STATUS.IDLE,

	partners     : [],
	partnerModal : {},
	skip         : 0,
	totalPages   : 0,

	error        : null,
};

export default INITIAL_STATE;
