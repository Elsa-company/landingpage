import authForgetPasswordThunk from './forgetPassword';
import authLoginThunk from './login';
import authRegisterThunk from './register';
import authResetPasswordThunk from './resetPassword';
import authVerifyEmailThunk from './verifyEmail';
export default {
	forgetPassword : authForgetPasswordThunk,
	login          : authLoginThunk,
	register       : authRegisterThunk,
	resetPassword  : authResetPasswordThunk,
	verifyEmail    : authVerifyEmailThunk,
};
