import STATUS from '../../../constant/status';

const INITIAL_STATE = {
	status : STATUS.IDLE,
	data   : {},
	token  : '',
	error  : null,
};

export default INITIAL_STATE;
