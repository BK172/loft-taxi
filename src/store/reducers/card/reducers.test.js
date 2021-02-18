import cardReducer from './reducers';
import { ActionType } from './actions';

jest.mock(`../root-reducer`);

describe(`Reducer cardReducer works correctly`, () => {
  it(`Should return initial state`, () => {
    expect(cardReducer(undefined, {})).toEqual({
      cvc: '',
      cardName: '',
      cardNumber: '',
      expiryDate: '',
    });
  });

  it(`Should update card data`, () => {
    expect(cardReducer({
      cvc: '',
      cardName: '',
      cardNumber: '',
      expiryDate: '',
    }, {
      type: ActionType.SAVE_CARD,
      payload: {
        cvc: '123',
        cardName: 'CardName',
        cardNumber: '111111111111',
        expiryDate: '01/11',
      }
    })).toEqual({
      cvc: '123',
      cardName: 'CardName',
      cardNumber: '111111111111',
      expiryDate: '01/11',
    });
  });
});
