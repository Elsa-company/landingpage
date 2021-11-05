import getAllPartnerExtraReducers from './getAllPartner';
import getOnePartnerExtraReducers from './getOnePartner';

const extraReducers = {
	...getAllPartnerExtraReducers,
	...getOnePartnerExtraReducers,
};

export default extraReducers;
