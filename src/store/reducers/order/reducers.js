import { ActionType } from './actions';
import { extend } from '../../../utils';

const initialState = {
  route: [],
  addressList: [],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SAVE_ROUTE:
      return extend(state, {
        route: action.payload.route,
      });
    case ActionType.SAVE_ADRESSES:
      return extend(state, {
        addressList: action.payload.addressList,
      });
    default:
      return state;
  }
};

export default orderReducer;