import { ActionType, saveCard } from './actions';

describe(`Action creators for reducer card work correctly`, () => {
  test(`saveCard works correctly`, () => {
    expect(saveCard({
      cvc: '123',
      cardName: 'CardName',
      cardNumber: '111111111111',
      expiryDate: '01/11',
    })).toEqual({
      type: ActionType.SAVE_CARD,
      payload: {
        cvc: '123',
        cardName: 'CardName',
        cardNumber: '111111111111',
        expiryDate: '01/11',
      },
    });
  });
});