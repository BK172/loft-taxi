import { NameSpace } from "./store/reducers/root-reducer";

export const extend = (a, b) => Object.assign({}, a, b);

export const makeInitialStateMock = () => ({
  [NameSpace.AUTH]: {
    isLoggedIn: false,
  },
});