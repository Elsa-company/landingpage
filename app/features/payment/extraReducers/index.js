import loyaltyMemberExtraReducers from './loyaltyMember';
import giveawayPaymentExtraReducers from './giveawayPayment';

const extraReducers = {
	...loyaltyMemberExtraReducers,
	...giveawayPaymentExtraReducers
};

export default extraReducers;
