import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

const mockContext = jest.fn();
jest.mock('../auth-context/auth-context', () => ({
  Consumer: ({ children }) => children(mockContext()),
}));

describe('App component test', () => {
  beforeAll(() => {
    mockContext.mockClear();
  });

  it('Should render App correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});