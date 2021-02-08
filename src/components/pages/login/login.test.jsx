import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Login from './login';

const mockUseContext = jest.fn().mockImplementation(() => ({
  isLoggedIn: false,
  logIn: jest.fn(),
}));

React.useContext = mockUseContext;

describe('Login component test', () => {
  it('Should render Login correctly', () => {
    const tree = renderer.create(
      <Login
        onPageChange={jest.fn()}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Form submit', () => {
    const onSubmitAction = jest.fn();
    const wrapper = shallow(
        <Login
          onPageChange={jest.fn()}
        />
    );

    wrapper.find('.form__container').simulate('submit', {
      preventDefault: jest.fn(),
    });

    expect(onSubmitAction).toHaveBeenCalledTimes(0);
  });

  test('Click on submit button', () => {
    const onSubmitButtonClick = jest.fn();
    const wrapper = shallow(
        <Login
          onPageChange={jest.fn()}
        />
    );

    wrapper.find('.form__submit-btn').simulate('click', {
      preventDefault: jest.fn(),
    });

    expect(onSubmitButtonClick).toHaveBeenCalledTimes(0);
  });

  test('Click on form footer button', () => {
    const onRegisterButtonClick = jest.fn();
    const wrapper = shallow(
        <Login
          onPageChange={jest.fn()}
        />
    );

    wrapper.find('.form__btn-footer').simulate('click', {
      preventDefault: jest.fn(),
    });

    expect(onRegisterButtonClick).toHaveBeenCalledTimes(0);
  });
});