import { ActionType, registCard, saveCard } from './actions';

describe(`Action creators for reducer card work correctly`, () => {
  test(`registCard works correctly`, () => {
    expect(registCard({
      cvc: '123',
      cardName: 'CardName',
      cardNumber: '111111111111',
      expiryDate: '01/11',
    })).toEqual({
      type: ActionType.REGIST_CARD,
      payload: {
        cvc: '123',
        cardName: 'CardName',
        cardNumber: '111111111111',
        expiryDate: '01/11',
      },
    });
  });

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