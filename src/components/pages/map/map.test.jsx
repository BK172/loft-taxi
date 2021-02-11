import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { makeInitialStateMock } from '../../../utils';
import Map from './map';

jest.mock(`./map`);

beforeAll(() => {
  jest.fn().mockImplementation(() => {
    return {
      remove: jest.fn()
    };
  });
});

describe('Map component test', () => {
  const store = configureStore()(makeInitialStateMock());

  it('Should render Map correctly', () => {
    const tree = renderer.create(
        <Provider store={store}>
          <MemoryRouter>
            <Map />
          </MemoryRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});