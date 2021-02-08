import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Header from './header';

const mockUseContext = jest.fn().mockImplementation(() => ({
  logOut: jest.fn(),
}));

React.useContext = mockUseContext;

describe('Header component test', () => {
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