import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { makeInitialStateMock } from '../../../utils';
import Login from './login';

describe('Login component test', () => {
  const store = configureStore()(makeInitialStateMock());

  it('Should render Login correctly', () => {
    const tree = renderer.create(
        <Provider store={store}>
          <MemoryRouter>
            <Login
              isLoggedIn={false}
              auth={jest.fn()}
            />
          </MemoryRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});