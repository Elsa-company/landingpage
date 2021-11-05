import rootApi from '../root';

class GetPartner {
	all = async ({ skip = 0, token }) => {
		const limit = 6;
		return await rootApi.get('/partners', {
			params  : { skip: skip * limit, limit, fields: '_id title thumbUrl' },
			headers : { 'x-auth-token': token },
		});
	};

	one = async ({ _id, token }) => {
		return await rootApi.get(`/partners/${_id}`, {
			headers : { 'x-auth-token': token },
		});
	};
}

export default new GetPartner();
