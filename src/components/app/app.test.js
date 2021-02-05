import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

jest.mock(`../pages/map/map`);

beforeAll(() => {
  jest.fn().mockImplementation(() => {
    return {
      remove: jest.fn()
    };
  });
});

jest.mock('mapbox-gl', () => ({
  map: jest.fn().mockReturnValue({
    remove: jest.fn(),
  }),
}));

describe('App component test', () => {
  it('Should render App correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});