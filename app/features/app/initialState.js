import STATUS from '../../../constant/status';

// import Infomation from '~/components/partials/account/modules/infomation/index';
// import MyGiveaway from '~/components/partials/account/modules/myGiveaway';
// import OurParttern from '~/components/partials/account/modules/ourParttern';
// import PurchaseHistory from '~/components/partials/account/modules/purchaseHistory';
// import LoyaltyMember from '~/components/partials/account/modules/loyaltyMember';
// import MyEntries from '~/components/partials/account/modules/MyEntries';

const INITIAL_STATE = {
	status               : STATUS.IDLE,
	modalVisibleLogin    : false,
	modalVisibleJoinNow  : false,
	modalComfirmPassword : false,

	isclickMenu          : false,

};

export default INITIAL_STATE;
