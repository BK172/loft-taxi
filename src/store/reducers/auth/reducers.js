import { ActionType } from './actions';
import { extend } from '../../../utils';

const initialState = {
  isLoggedIn: false,
  authToken: 'AUTH_TOKEN',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOG_IN:
      return extend(state, {
        isLoggedIn: true
      });
    case ActionType.LOG_OUT:
      return extend(state, {
        isLoggedIn: false
      });
    case ActionType.SAVE_AUTH_TOKEN:
      return extend(state, {
        authToken: action.payload,
      });
    default:
      return state;
  }
};

export default authReducer;