import { logIn, saveAuthToken, ActionType } from '../../reducers/auth/actions';
import { serverLogin, serverRegister } from '../../../api';

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === ActionType.AUTH) {
    const { email, password } = action.payload;
    const success = await serverLogin(email, password);

    if (success) {
      store.dispatch(logIn());
    }
  }

  return next(action);
};

export const registerMiddleware = (store) => (next) => async (action) => {
  if (action.type === ActionType.REGISTER) {
    const { email, firstName, surname, password } = action.payload;
    const { success, token } = await serverRegister(email, firstName, surname, password);

    if (success) {
      store.dispatch(saveAuthToken(token));
    }
  }

  return next(action);
};