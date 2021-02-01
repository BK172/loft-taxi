import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map';

jest.mock('mapbox-gl', () => ({}));

describe('Map component test', () => {
  it('Should render Map correctly', () => {
    const tree = renderer.create(<Map />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});