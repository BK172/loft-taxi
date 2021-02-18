import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { makeInitialStateMock } from '../../utils';
import PrivateRoute from './private-route';

describe(`PrivateRoute component test`, () => {
  const store = configureStore()(makeInitialStateMock());

  it(`Should render PrivateRoute correctly if isLoggedIn true`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <PrivateRoute
                component={() => <div>Component content</div>}
                isLoggedIn={true}
                exact={true}
                path={``}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Should render PrivateRoute correctly if isLoggedIn false`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <PrivateRoute
                component={() => <div>Component content</div>}
                isLoggedIn={false}
                exact={true}
                path={``}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});