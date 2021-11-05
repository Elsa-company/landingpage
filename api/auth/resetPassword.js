import rootApi from '../root';

const resetPassword = ({ token, password }) =>
	rootApi.put('/users/reset-password', {
		token,
		password,
	});

export default resetPassword;
