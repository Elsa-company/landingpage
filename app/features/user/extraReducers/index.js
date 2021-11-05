import profileExtraReducers from './profile';
import changeProfileExtraReducers from './changeProfile';
import vefifyChangeEmail from './vefifyChangeEmail';

const extraReducers = {
	...profileExtraReducers,
	...changeProfileExtraReducers,
	...vefifyChangeEmail,
};

export default extraReducers;
