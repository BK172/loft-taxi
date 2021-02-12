import authReducer from "./reducers";
import { ActionType } from "./actions";

jest.mock(`../root-reducer`);

describe(`Reducer authReducer works correctly`, () => {
  it(`Should return initial state`, () => {
    expect(authReducer(undefined, {})).toEqual({
      isLoggedIn: false,
      authToken: 'AUTH_TOKEN',
    });
  });

  it(`Should update isLoggedIn to true`, () => {
    expect(authReducer({
      isLoggedIn: false,
    }, {
      type: ActionType.LOG_IN
    })).toEqual({
      isLoggedIn: true
    });
  });

  it(`Should update authToken`, () => {
    expect(authReducer({
      authToken: `AUTH_TOKEN`,
    }, {
      type: ActionType.SAVE_AUTH_TOKEN,
      payload: `AUTH_TOKEN`
    })).toEqual({
      authToken: `AUTH_TOKEN`
    });
  });
});
