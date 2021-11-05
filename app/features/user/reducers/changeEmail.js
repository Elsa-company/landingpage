import STATUS from '../../../../constant/status';

function changeProfile (state, action) {
	state.status = STATUS.SUCCESS;
	state.newEmail = action.payload;
}

export default changeProfile;
