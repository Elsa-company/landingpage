// extra reducers
import forgetPasswordExtraReducer from './forgetPassword';
import loginExtraReducers from './login';
import registerExtraReducer from './register';
import resetPasswordExtraReducer from './resetPassword';
import verifyEmailExtraReducer from './verifyEmail';

const extraReducers = {
	...forgetPasswordExtraReducer,
	...loginExtraReducers,
	...registerExtraReducer,
	...resetPasswordExtraReducer,
	...verifyEmailExtraReducer,
};

export default extraReducers;
