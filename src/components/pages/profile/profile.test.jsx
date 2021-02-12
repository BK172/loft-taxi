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
            <Profile
              cvc={'123'}
              cardName={'CardName'}
              cardNumber={'111111111111'}
              expiryDate={'01/11'}
              getCard={jest.fn()}
              saveCard={jest.fn()}
            />
          </MemoryRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});