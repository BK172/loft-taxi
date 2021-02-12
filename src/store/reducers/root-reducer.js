import { combineReducers } from 'redux';
import auth from './auth/reducers';
import card from './card/reducers';

export const NameSpace = {
  AUTH: `AUTH`,
  CARD: `CARD`,
};

export default combineReducers({
  [NameSpace.AUTH]: auth,
  [NameSpace.CARD]: card,
});
