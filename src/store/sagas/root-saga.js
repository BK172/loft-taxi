import { all } from 'redux-saga/effects';
import { authSaga, registSaga } from './auth/auth';
import { getCardSaga, saveCardSaga } from './card/card';
import { getRouteSaga, getAddressesSaga } from './order/order';

export default function* rootSaga() {
  yield all([
    authSaga(),
    registSaga(),
    getCardSaga(),
    saveCardSaga(),
    getRouteSaga(),
    getAddressesSaga(),
  ]);
};