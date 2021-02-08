import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

const mockUseContext = jest.fn().mockImplementation(() => ({
  isLoggedIn: false,
  logIn: jest.fn(),
}));

React.useContext = mockUseContext;

describe('App component test', () => {
  it('Should render App correctly', () => {
    const tree = renderer.create(
      <App
        isLoggedIn={false}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});