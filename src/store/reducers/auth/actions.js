export const ActionType = {
  LOG_IN: 'LOG_IN',
  LOG_OUT: 'LOG_OUT',
};

export const logIn = () => ({
  type: ActionType.LOG_IN,
});

export const logOut = () => ({
  type: ActionType.LOG_OUT,
});