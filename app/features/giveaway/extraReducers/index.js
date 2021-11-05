import getAllGiveawayExtraReducers from './getAllGiveaway';
import getOneGiveawayExtraReducers from './getOneGiveaway';

const extraReducers = {
	...getAllGiveawayExtraReducers,
	...getOneGiveawayExtraReducers,
};

export default extraReducers;
