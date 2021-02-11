import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { makeInitialStateMock } from '../../utils';
import App from './app';

describe('App component test', () => {
  const store = configureStore()(makeInitialStateMock());

  it('Should render App correctly', () => {
    const tree = renderer.create(
        <Provider store={store}>
          <MemoryRouter>
            <App />
          </MemoryRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});