import { combineReducers } from 'redux';
import auth from './auth/reducers';
import card from './card/reducers';
import order from './order/reducers';

export const NameSpace = {
  AUTH: `AUTH`,
  CARD: `CARD`,
  ORDER: `ORDER`,
};

export default combineReducers({
  [NameSpace.AUTH]: auth,
  [NameSpace.CARD]: card,
  [NameSpace.ORDER]: order,
});
