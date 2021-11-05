import STATUS from '../../../../constant/status';

function setProfile (state) {
	state.status = STATUS.IDLE;
	state.data = {};
	state.newProfile = {};
	state.newEmail = '';
	state.modalComfirmPassword = false;
	state.error = null;
}

export default setProfile;
