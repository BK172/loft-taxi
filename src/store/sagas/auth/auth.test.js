import { authenticateSaga, registrationSaga } from './auth';
import { ActionType, auth, register } from '../../reducers/auth/actions';
import { recordSaga } from '../../recordSaga';

jest.mock('../../../api', () => ({ serverLogin: jest.fn(() => true) }));
jest.mock('../../../api', () => ({ serverRegister: jest.fn(() => true) }));

describe('Auth saga test', () => {
  it('authenticates through api', async () => {
    const dispatched = await recordSaga(
      authenticateSaga,
      auth('test@test.com', '123123'),
    );

    expect(dispatched).toEqual([
      {
        type: ActionType.LOG_IN,
      },
      {
        type: ActionType.SAVE_AUTH_TOKEN,
        payload: {
          email: 'test@test.com',
          password: '123123',
        },
      },
    ]);
  });

  it('registrates through api', async () => {
    const dispatched = await recordSaga(
      registrationSaga,
      register('test@test.com', 'Fname', 'Sname', '123123'),
    );

    expect(dispatched).toEqual([
      {
        type: ActionType.SAVE_AUTH_TOKEN,
        payload: {
          email: 'test@test.com',
          firstName: 'Fname',
          surname: 'Sname',
          password: '123123',
        },
      },
    ]);
  });
});
