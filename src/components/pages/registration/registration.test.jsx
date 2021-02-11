import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { makeInitialStateMock } from '../../../utils';
import Registration from './registration';

describe('Registration component test', () => {
  const store = configureStore()(makeInitialStateMock());

  it('Should render Registration correctly', () => {
    const tree = renderer.create(
        <Provider store={store}>
          <MemoryRouter>
            <Registration
              onSubmitAction={jest.fn()}
            />
          </MemoryRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});