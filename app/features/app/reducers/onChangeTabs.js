import STATUS from '../../../../constant/status';

function onChangeTabs (state, action) {
	state.status = STATUS.SUCCESS;
	state.customizeIndex = action.payload
}

export default onChangeTabs;
