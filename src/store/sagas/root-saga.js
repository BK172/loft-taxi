import { all } from 'redux-saga/effects';
import { authSaga, registSaga } from './auth/auth';
import { getCardSaga, saveCardSaga } from './card/card';

export default function* rootSaga() {
  yield all([
    authSaga(),
    registSaga(),
    getCardSaga(),
    saveCardSaga(),
  ]);
};