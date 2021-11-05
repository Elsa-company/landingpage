// reducers

import logoutReducer from './logout';
import refreshToken from './refreshToken';

const reducers = {
	logout       : logoutReducer,
	refreshToken,
};

export default reducers;
