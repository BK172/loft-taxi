import { ActionType } from './actions';
import { extend } from '../../../utils';

const initialState = {
  isLoggedIn: false,
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
    default:
      return state;
  }
};

export default authReducer;