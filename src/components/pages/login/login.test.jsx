import React from 'react';
import renderer from 'react-test-renderer';
import Login from './login';

describe(`Login component test`, () => {
  it(`Should render Login correctly`, () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});