export const ActionType = {
  LOG_IN: 'LOG_IN',
  LOG_OUT: 'LOG_OUT',
  AUTH: 'AUTH',
  REGISTER: 'REGISTER',
  SAVE_AUTH_TOKEN: 'SAVE_AUTH_TOKEN',
};

export const logIn = () => ({
  type: ActionType.LOG_IN,
});

export const logOut = () => ({
  type: ActionType.LOG_OUT,
});

export const auth = (email, password) => ({
  type: ActionType.AUTH,
  payload: { email, password },
});

export const register = (email, firstName, surname, password) => ({
  type: ActionType.REGISTER,
  payload: { email, firstName, surname, password },
});

export const saveAuthToken = (token) => ({
  type: ActionType.SAVE_AUTH_TOKEN,
  payload: { token },
});