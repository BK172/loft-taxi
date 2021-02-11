import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { makeInitialStateMock } from '../../../utils';
import Profile from './profile';

describe('Profile component test', () => {
  const store = configureStore()(makeInitialStateMock());

  it('Should render Profile correctly', () => {
    const tree = renderer.create(
        <Provider store={store}>
          <MemoryRouter>
            <Profile />
          </MemoryRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});