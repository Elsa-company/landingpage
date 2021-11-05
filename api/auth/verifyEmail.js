import rootApi from '../root';

const resetPassword = ({ token }) => {
	return rootApi.post('/users/comfirm-email', {
		token,
	});
};

export default resetPassword;
