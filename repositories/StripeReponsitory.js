import axiosClient from './Repository';

class StripeReponsitory {
	createSession = async data => {
		const url = `/payments/stripe/createSession`;
		return await axiosClient.post(url, data);
	};
}

export default new StripeReponsitory();
