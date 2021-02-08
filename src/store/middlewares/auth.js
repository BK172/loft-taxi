import { logIn, ActionType } from '../reducers/actions';
import { serverLogin } from '../../api';

export const authMiddleware = (store) => (next) => (action) => {
  if (action.type === ActionType.AUTH) {
    const { email, password } = action.payload;
    const success = await serverLogin(email, password);

    if (success) {
      store.dispatch(logIn());
    }
  }

  return next(action);
};