export const ActionType = {
  GET_CARD: 'GET_CARD',
  REGIST_CARD: 'REGIST_CARD',
  SAVE_CARD: 'SAVE_CARD',
};

export const getCard = () => ({
  type: ActionType.GET_CARD,
});

export const registCard = (data) => ({
  type: ActionType.REGIST_CARD,
  payload: {
    cvc: data.cvc,
    cardName: data.cardName,
    cardNumber: data.cardNumber,
    expiryDate: data.expiryDate,
  },
});

export const saveCard = (data) => ({
  type: ActionType.SAVE_CARD,
  payload: {
    cvc: data.cvc,
    cardName: data.cardName,
    cardNumber: data.cardNumber,
    expiryDate: data.expiryDate,
  },
});