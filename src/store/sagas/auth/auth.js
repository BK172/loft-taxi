import { takeEvery, call, put } from 'redux-saga/effects';
import { ActionType, logIn, saveAuthToken } from '../../reducers/auth/actions';
import { serverLogin, serverRegister } from '../../../api';

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

export function* registrationSaga(action) {
  const { email, firstName, surname, password } = action.payload;
  const { success, token } = yield call(serverRegister, email, firstName, surname, password);

  if (success) {
    yield put(saveAuthToken(token));
  }
};

export function* registSaga() {
  yield takeEvery(ActionType.REGISTER, registrationSaga);
};