import { getRouteDataSaga, getAddressListSaga } from './card';
import { ActionType, getRoute, getAddresses } from '../../reducers/card/actions';
import { recordSaga } from '../../recordSaga';

jest.mock('../../../api', () => ({ serverGetRoute: jest.fn(() => true) }));
jest.mock('../../../api', () => ({ serverGetAddresses: jest.fn(() => true) }));

describe('Order saga test', () => {
  it('gets info info through api', async () => {
    const dispatched = await recordSaga(
      getRouteDataSaga,
      getRoute('Шаверма на Невском', 'Пулково (LED)'),
    );

    expect(dispatched).toEqual([
      {
        type: ActionType.GET_ROUTE,
      },
    ]);
  });

  it('gets adresses list info through api', async () => {
    const dispatched = await recordSaga(
      getAddressListSaga,
      getAddresses(),
    );

    expect(dispatched).toEqual([
      {
        type: ActionType.GET_ADDRESSES,
      },
    ]);
  });
});
