import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root-reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/root-saga';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(persistedReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware),
  )
);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);