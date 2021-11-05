import rootApi from '../root';

class GetGiveaway {
	all = async ({ skip = 0 }) => {
		const limit = 4;
		return await rootApi.get('/giveaways', { params: { skip: skip * limit, limit } });
	};

	one = async ({ _id }) => {
		return await rootApi.get(`/giveaways/${_id}`);
	};
}

export default new GetGiveaway();
