export const ActionType = {
  GET_ROUTE: 'GET_ROUTE',
  GET_ADDRESSES: 'GET_ADDRESSES',
  SAVE_ROUTE: 'SAVE_ROUTE',
  SAVE_ADDRESSES: 'SAVE_ADDRESSES',
  CHANGE_ROUTE_CONTAINER: 'CHANGE_ROUTE_CONTAINER',
};

export const getRoute = (address1, address2) => ({
  type: ActionType.GET_ROUTE,
  payload: { address1, address2 },
});

export const getAddresses = () => ({
  type: ActionType.GET_ADDRESSES,
});

export const saveRoute = (route) => ({
  type: ActionType.SAVE_ROUTE,
  payload: { route },
});

export const saveAdresses = (adresses) => ({
  type: ActionType.SAVE_ADDRESSES,
  payload: { adressList: adresses },
});

export const changeRouteContainer = (routeContainer) => ({
  type: ActionType.CHANGE_ROUTE_CONTAINER,
  payload: { routeContainer },
});