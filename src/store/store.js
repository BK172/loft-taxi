import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root-reducer';
import { authMiddleware, registerMiddleware } from './middlewares/auth/auth';
import { getCardDataMiddleware, saveCardDataMiddleware } from './middlewares/card/card';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'card'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer,
  composeWithDevTools(
    applyMiddleware(authMiddleware),
    applyMiddleware(registerMiddleware),
    applyMiddleware(getCardDataMiddleware),
    applyMiddleware(saveCardDataMiddleware),
  )
);

export const persistor = persistStore(store);