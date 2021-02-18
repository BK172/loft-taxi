import { takeEvery, call, put, select } from 'redux-saga/effects';
import { ActionType, saveCard } from '../../reducers/card/actions';
import { getAuthToken } from '../../reducers/auth/selectors';
import { serverGetCard, serverSaveCard } from '../../../api';

export function* getCardDataSaga() {
  const token = yield select(getAuthToken);
  const data = yield call(serverGetCard, token);

  console.log('token get', token);
  console.log('data get', data);

  if (data && data.cardNumber) {
    yield put(saveCard(data));
  }
};

export function* getCardSaga() {
  yield takeEvery(ActionType.GET_CARD, getCardDataSaga);
};

export function* saveCardDataSaga(action) {
  const { cvc, cardName, cardNumber, expiryDate } = action.payload;
  const token = yield select(getAuthToken);

  const data = yield call(
    serverSaveCard,
    cvc,
    cardName,
    cardNumber,
    expiryDate,
    token,
  );

  console.log('token save', token);
  console.log('data save', data);

  if (data && data.success) {
    yield put(saveCard(data));
  }
};

export function* saveCardSaga() {
  yield takeEvery(ActionType.REGIST_CARD, saveCardDataSaga);
};