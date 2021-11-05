import getGiveawayThunk from '../thunks/get';
import STATUS from '../../../../constant/status';
import _ from 'lodash';

const getGiveawayExtraReducers = {
	[getGiveawayThunk.one.pending]: state => {
		state.status = STATUS.LOADING;
		state.error = null;
	},
	[getGiveawayThunk.one.fulfilled]: (state, action) => {
		state.status = STATUS.SUCCESS;
		state.giveaway = action.payload.data;
		state.error = null;
	},
	[getGiveawayThunk.one.rejected]: (state, action) => {
		state.status = STATUS.ERROR;
		state.giveaway = {}
		state.error = action.error;
	},
};

export default getGiveawayExtraReducers;
