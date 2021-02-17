import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root-reducer';
import createSagaMiddleware from 'redux-saga';
import { authSaga } from './sagas/auth/auth';
import { registerSaga } from './sagas/register/register';
import { getCardDataSaga, saveCardDataSaga } from './sagas/card/card';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['auth', 'card'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(persistedReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware),
  )
);

export const persistor = persistStore(store);

sagaMiddleware.run(authSaga);
sagaMiddleware.run(registerSaga);
sagaMiddleware.run(getCardDataSaga);
sagaMiddleware.run(saveCardDataSaga);