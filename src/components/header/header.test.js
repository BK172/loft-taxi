import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Header from './header';

describe('Header component test', () => {
  it('Should render Header correctly', () => {
    const tree = renderer.create(
      <Header
        onPageChange={jest.fn()}
        logIn={jest.fn()}
        logOut={jest.fn()}
        isLoggedIn={true}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Click on navigation button', () => {
    const onPageChange = jest.fn();
    const wrapper = shallow(
        <Header
          onPageChange={jest.fn()}
          logIn={jest.fn()}
          logOut={jest.fn()}
          isLoggedIn={true}
        />
    );

    const buttons = wrapper.find('button');

    buttons.forEach((button) => button.simulate('click', {
      preventDefault: jest.fn(),
    }));

    expect(onPageChange).toHaveBeenCalledTimes(buttons.length);
  });
});