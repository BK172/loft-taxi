import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root-reducer';
import { authMiddleware } from './middlewares/auth';

export const store = createStore(rootReducer, applyMiddleware(authMiddleware));