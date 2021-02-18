import { getCardDataSaga, saveCardDataSaga } from './card';
import { ActionType, getCard, registCard } from '../../reducers/card/actions';
import { recordSaga } from '../../recordSaga';

jest.mock('../../../api', () => ({ serverGetCard: jest.fn(() => true) }));
jest.mock('../../../api', () => ({ serverSaveCard: jest.fn(() => true) }));
jest.mock('../../reducers/auth/selectors', () => ({ getAuthToken: jest.fn(() => 'AUTH_TOKEN') }));

describe('Card saga test', () => {
  it('gets card info through api', async () => {
    const dispatched = await recordSaga(
      getCardDataSaga,
      getCard(),
    );

    expect(dispatched).toEqual([
      {
        type: ActionType.SAVE_CARD,
        payload: {
          cvc: '123',
          cardName: 'CardName',
          cardNumber: '111111111111',
          expiryDate: '01/11',
        },
      },
    ]);
  });

  it('saves card info through api', async () => {
    const dispatched = await recordSaga(
      saveCardDataSaga,
      registCard('123', 'CardName', '111111111111', '01/11'),
    );

    expect(dispatched).toEqual([
      {
        type: ActionType.SAVE_CARD,
        payload: {
          cvc: '123',
          cardName: 'CardName',
          cardNumber: '111111111111',
          expiryDate: '01/11',
        },
      },
    ]);
  });
});
