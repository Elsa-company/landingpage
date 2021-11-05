import rootApi from '../root';

const forgetPassword = ({ email }) =>
	rootApi.post('/users/forget-password', {
		email,
	});

export default forgetPassword;
