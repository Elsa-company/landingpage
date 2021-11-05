import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'payment',
  storage: storage,
  blacklist: ['status', ],
};

export default authPersistConfig;