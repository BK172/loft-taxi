import { ActionType, getRoute, getAddresses } from './actions';

describe(`Action creators for reducer order work correctly`, () => {
  test(`getRoute works correctly`, () => {
    expect(getRoute('Шаверма на Невском', 'Пулково (LED)')).toEqual({
      type: ActionType.GET_ROUTE,
      payload: {
        address1: 'Шаверма на Невском',
        address2: 'Пулково (LED)',
      },
    });
  });

  test(`getAddresses works correctly`, () => {
    expect(getAddresses()).toEqual({
      type: ActionType.GET_ADDRESSES,
    });
  });
});