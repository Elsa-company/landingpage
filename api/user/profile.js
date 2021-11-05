import rootApi from '../root';

const profile = (token) => {
	return rootApi.get('/users/profile', {
		headers: {
			'x-auth-token': token
		}
	});
};

export default profile;
