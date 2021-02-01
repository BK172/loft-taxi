import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

jest.mock('mapbox-gl', () => ({}));

describe('App component test', () => {
  it('Should render App correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});