import { all } from 'redux-saga/effects';
import { authSaga, registSaga } from './auth/auth';
import { getCardSaga, saveCardSaga } from './card/card';
import { routeSaga, addressListSaga } from './order/order';

export default function* rootSaga() {
  yield all([
    authSaga(),
    registSaga(),
    getCardSaga(),
    saveCardSaga(),
    routeSaga(),
    addressListSaga(),
  ]);
};