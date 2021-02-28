import { ActionType } from './actions';
import { extend } from '../../../utils';

const initialState = {
  route: [],
  addressList: [],
  routeContainer: 'NO_CARD',
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
    case ActionType.CHANGE_ROUTE_CONTAINER:
      return extend(state, {
        routeContainer: action.payload.routeContainer,
      });
    default:
      return state;
  }
};

export default orderReducer;