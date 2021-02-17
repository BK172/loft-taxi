import { authenticateSaga } from './auth';
import { auth, ActionType } from '../../reducers/auth/actions';
import { recordSaga } from '../../recordSaga';

jest.mock('../../../api', () => ({ serverLogin: jest.fn(() => true) }));

describe('AuthSaga test', () => {
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
});
