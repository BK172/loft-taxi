export const ActionType = {
  GET_ROUTE: 'GET_ROUTE',
  GET_ADDRESSES: 'GET_ADDRESSES',
  SAVE_ROUTE: 'SAVE_ROUTE',
  SAVE_ADDRESSES: 'SAVE_ADDRESSES',
};

export const getRoute = (address1, address2) => ({
  type: ActionType.GET_ROUTE,
  payload: {
    address1,
    address2,
  },
});

export const getAddresses = () => ({
  type: ActionType.GET_ADDRESSES,
});

export const saveRoute = (data) => ({
  type: ActionType.SAVE_ROUTE,
  payload: {
    route: data.route,
  },
});

export const saveAdresses = (data) => ({
  type: ActionType.SAVE_ADDRESSES,
  payload: {
    adressList: data.adressList,
  },
});