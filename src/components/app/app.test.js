import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

describe('App component test', () => {
  it('Should render App correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});