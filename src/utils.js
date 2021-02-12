import { NameSpace } from "./store/reducers/root-reducer";

export const extend = (a, b) => Object.assign({}, a, b);

export const makeInitialStateMock = () => ({
  [NameSpace.AUTH]: {
    isLoggedIn: false,
    authToken: 'AUTH_TOKEN',
  },
  [NameSpace.CARD]: {
    cvc: '123',
    cardName: 'CardName',
    cardNumber: '111111111111',
    expiryDate: '01/11',
  },
});