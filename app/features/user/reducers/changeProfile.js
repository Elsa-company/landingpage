import STATUS from '../../../../constant/status';

function changeProfile (state, action) {
	state.status = STATUS.SUCCESS;
	state.newProfile = action.payload;
}

export default changeProfile;
