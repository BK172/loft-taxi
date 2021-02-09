import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Header from './header';

const mockContext = jest.fn();
jest.mock('../auth-context/auth-context', () => ({
  Consumer: ({ children }) => children(mockContext()),
}));

describe('Header component test', () => {
  beforeAll(() => {
    mockContext.mockClear();
  });

  it('Should render Header correctly', () => {
    const tree = renderer.create(
      <Header
        onPageChange={jest.fn()}
        logOut={jest.fn()}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Click on navigation button', () => {
    const onPageChange = jest.fn();
    const wrapper = shallow(
        <Header
          onPageChange={jest.fn()}
          logOut={jest.fn()}
        />
    );

    const buttons = wrapper.find('button');

    buttons.forEach((button) => button.simulate('click', {
      preventDefault: jest.fn(),
    }));

    expect(onPageChange).toHaveBeenCalledTimes(buttons.length);
  });
});