import { ActionType, saveCard } from '../../reducers/card/actions';
import { getAuthToken } from '../../reducers/auth/selectors';
import { serverGetCard, serverSaveCard } from '../../../api';

export const getCardDataMiddleware = ({ dispatch, getState }) => (next) => async (action) => {
  if (action.type === ActionType.GET_CARD) {
    const token = getAuthToken(getState());
    const data = await serverGetCard(token);

    if (data.cardNumber) {
      dispatch(saveCard(data));
    }
  }

  return next(action);
};

export const saveCardDataMiddleware = ({ dispatch, getState }) => (next) => async (action) => {
  if (action.type === ActionType.SAVE_CARD) {
    const token = getAuthToken(getState());
    const { cvc, cardName, cardNumber, expiryDate } = action.payload;

    const success = await serverSaveCard({
      cvc,
      cardName,
      cardNumber,
      expiryDate,
      token,
    });

    // if (success) {
    //   dispatch();
    // }
  }

  return next(action);
};