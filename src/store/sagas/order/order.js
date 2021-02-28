import { takeEvery, call, put } from 'redux-saga/effects';
import { ActionType, saveRoute, saveAdresses } from '../../reducers/card/actions';
import { serverGetRoute, serverGetAddresses } from '../../../api';

export function* getRouteDataSaga(action) {
  const { address1, address2 } = action.payload;
  const { data } = yield call(serverGetRoute, address1, address2);

  if (data) {
    yield put(saveRoute(data));
  }
};

export function* getRouteSaga() {
  yield takeEvery(ActionType.GET_ROUTE, getRouteDataSaga);
};

export function* getAddressListSaga() {
  const data = yield call(serverGetAddresses);

  if (data && data.adresses) {
    yield put(saveAdresses(data.adresses));
  }
};

export function* getAddressesSaga() {
  yield takeEvery(ActionType.GET_ADDRESSES, getAddressListSaga);
};