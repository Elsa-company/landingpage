import STATUS from '../../../../constant/status';

function addPackage (state, action) {

	state.level = action.payload.level;
	state.giveaway = action.payload.giveaway;
}

export default addPackage;
