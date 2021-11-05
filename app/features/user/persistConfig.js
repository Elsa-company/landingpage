import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'user',
  storage: storage,
  blacklist: ['status', ],
};

export default authPersistConfig;
