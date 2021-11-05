import STATUS from '../../../../constant/status';

function setProfile (state, action) {
	state.status = STATUS.SUCCESS;
	state.data.isVipMember = action.payload;
}

export default setProfile;
