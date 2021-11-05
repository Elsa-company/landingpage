import getGiveawayThunk from '../thunks/get';
import STATUS from '../../../../constant/status';
import _ from 'lodash';

const getGiveawayExtraReducers = {
	[getGiveawayThunk.all.pending]: state => {
		state.status = STATUS.LOADING;
		state.error = null;
	},
	[getGiveawayThunk.all.fulfilled]: (state, action) => {
		state.status = STATUS.SUCCESS;
		state.giveaways = action.payload.data.giveaways;
		state.totalPages = action.payload.data.totalPages;
		state.error = null;
	},
	[getGiveawayThunk.all.rejected]: (state, action) => {
		state.status = STATUS.ERROR;
		state.giveaways = [];
		state.totalPages = 0;
		state.error = action.error;
	},
};

export default getGiveawayExtraReducers;
