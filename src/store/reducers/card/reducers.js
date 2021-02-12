import { ActionType } from './actions';
import { extend } from '../../../utils';

const initialState = {
  cvc: undefined,
  cardName: undefined,
  cardNumber: undefined,
  expiryDate: undefined,
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SAVE_CARD:
      return extend(state, {
        cvc: action.payload.cvc,
        cardName: action.payload.cardName,
        cardNumber: action.payload.cardNumber,
        expiryDate: action.payload.expiryDate,
      });
    default:
      return state;
  }
};

export default cardReducer;