import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root-reducer';
import { authMiddleware } from './middlewares/auth/auth';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer,
  composeWithDevTools(
    applyMiddleware(authMiddleware),
  )
);

export const persistor = persistStore(store);