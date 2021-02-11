import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root-reducer';
import { authMiddleware } from './middlewares/auth';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(authMiddleware));

export const persistor = persistStore(store);