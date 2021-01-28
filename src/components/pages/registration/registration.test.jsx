import React from 'react';
import renderer from 'react-test-renderer';
import Registration from './registration';

describe('Registration component test', () => {
  it('Should render Registration correctly', () => {
    const tree = renderer.create(<Registration />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});