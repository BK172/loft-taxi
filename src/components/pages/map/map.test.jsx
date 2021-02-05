import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map';

jest.mock(`./map`);

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

describe('Map component test', () => {
  it('Should render Map correctly', () => {
    const tree = renderer.create(<Map />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});