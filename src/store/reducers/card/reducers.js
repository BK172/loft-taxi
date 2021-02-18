import { ActionType } from './actions';
import { extend } from '../../../utils';

const initialState = {
  cvc: '',
  cardName: '',
  cardNumber: '',
  expiryDate: '',
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REGIST_CARD:
      return extend(state, {
        cvc: action.payload.cvc,
        cardName: action.payload.cardName,
        cardNumber: action.payload.cardNumber,
        expiryDate: action.payload.expiryDate,
      });
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