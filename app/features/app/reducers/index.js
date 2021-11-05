// reducers
import isClickMenuReducer from './isClickMenu';
import joinNowModalReducer from './joinNowModal';
import loginModalReducer from './loginModal';
import onChangeTabsReducer from './onChangeTabs';

const reducers = {
	isClickMenu            : isClickMenuReducer,
	setModalVisibleLogin   : loginModalReducer,
	setModalVisibleJoinNow : joinNowModalReducer,
	onChangeTabs           : onChangeTabsReducer,
};

export default reducers;
