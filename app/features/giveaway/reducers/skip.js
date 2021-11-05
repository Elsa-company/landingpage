import STATUS from '../../../../constant/status';

function skip (state, action) {
	state.status = STATUS.SUCCESS;
	state.skip = action.payload;
}

export default skip;
