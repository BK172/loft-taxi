import { combineReducers } from 'redux';
import { auth } from './auth/auth';

export const NameSpace = {
  AUTH: `AUTH`,
};

export default combineReducers({
  [NameSpace.AUTH]: auth,
});
