export const ActionType = {
  LOG_IN: 'LOG_IN',
  LOG_OUT: 'LOG_OUT',
  AUTH: 'AUTH',
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