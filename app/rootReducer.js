import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// reducers
import authReducer from './features/auth/slice';
import appReducer from './features/app/slice';
import giveawayReducer from './features/giveaway/slice';
import partnerReducer from './features/partner/slice';
import purchaseHistoryReducer from './features/purchaseHistory/slice';
import userReducer from './features/user/slice';
import paymentReducer from './features/payment/slice'

// persist configs
import authPersistConfig from './features/auth/persistConfig';
import userPersistConfig from './features/user/persistConfig';
import paymentPersistConfig from './features/payment/persistConfig'

const rootReducer = combineReducers({
	auth            : persistReducer(authPersistConfig, authReducer),
	app             : appReducer,
	giveaway        : giveawayReducer,
	partner         : partnerReducer,
	purchaseHistory : purchaseHistoryReducer,
	payment         : persistReducer(paymentPersistConfig, paymentReducer),
	user            : persistReducer(userPersistConfig, userReducer),
});

export default rootReducer;
