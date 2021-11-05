import STATUS from '../../../constant/status';

const INITIAL_STATE = {
	status               : STATUS.IDLE,

	data                 : {},
	newProfile           : {},
	newEmail             : '',
	modalComfirmPassword : false,

	error                : null,
};

export default INITIAL_STATE;
