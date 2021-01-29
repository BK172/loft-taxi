import React from 'react';
import renderer from 'react-test-renderer';
import Profile from './profile';

describe('Profile component test', () => {
  it('Should render Profile correctly', () => {
    const tree = renderer.create(<Profile />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});