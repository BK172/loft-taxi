import { ActionType, auth, register, saveAuthToken } from './actions';

describe(`Action creators for reducer auth work correctly`, () => {
  test(`auth works correctly`, () => {
    expect(auth('test@test.com', '123123')).toEqual({
      type: ActionType.AUTH,
      payload: { email: 'test@test.com', password: '123123' },
    });
  });

  test(`register works correctly`, () => {
    expect(register('test@test.com', 'Fname', 'Sname', '123123',)).toEqual({
      type: ActionType.REGISTER,
      payload: {
        email: 'test@test.com',
        firstName: 'Fname',
        surname: 'Sname',
        password: '123123',
      },
    });
  });

  test(`saveAuthToken works correctly`, () => {
    expect(saveAuthToken('AUTH_TOKEN')).toEqual({
      type: ActionType.SAVE_AUTH_TOKEN,
      payload: { token: 'AUTH_TOKEN' },
    });
  });
});