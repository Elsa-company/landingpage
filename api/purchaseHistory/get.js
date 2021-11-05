import rootApi from '../root';

class GetPurchaseHistory {
	all = async ({ skip = 0, token }) => {
		const limit = 8;
		return await rootApi.get('/purchase-history', {
			params  : { skip: skip * limit, limit },
			headers : {
				'x-auth-token' : token,
			},
		});
	};
}

export default new GetPurchaseHistory();
