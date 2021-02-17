import { takeEvery, call, put } from 'redux-saga/effects';
import { logIn, saveAuthToken, ActionType } from '../../reducers/auth/actions';
import { serverLogin } from '../../../api';

export function* authenticateSaga(action) {
  const { email, password } = action.payload;
  const data = yield call(serverLogin, email, password);

  if (data && data.success) {
    yield put(saveAuthToken(data.token));
    yield put(logIn());
  }
};

export function* authSaga() {
  yield takeEvery(ActionType.AUTH, authenticateSaga);
};