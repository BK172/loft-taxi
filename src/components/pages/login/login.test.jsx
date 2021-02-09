import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Login from './login';

const mockContext = jest.fn();
jest.mock('../../auth-context/auth-context', () => ({
  Consumer: ({ children }) => children(mockContext()),
}));

describe('Login component test', () => {
  beforeAll(() => {
    mockContext.mockClear();
  });

  it('Should render Login correctly', () => {
    const tree = renderer.create(
      <Login
        onPageChange={jest.fn()}
<<<<<<< HEAD
        isLoggedIn={false}
        logIn={jest.fn()}
=======
>>>>>>> Правки тестов
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Form submit', () => {
    const onSubmitAction = jest.fn();
    const wrapper = shallow(
        <Login
          onPageChange={jest.fn()}
<<<<<<< HEAD
          isLoggedIn={false}
          logIn={jest.fn()}
=======
>>>>>>> Правки тестов
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
<<<<<<< HEAD
          isLoggedIn={false}
          logIn={jest.fn()}
=======
>>>>>>> Правки тестов
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
<<<<<<< HEAD
          isLoggedIn={false}
          logIn={jest.fn()}
=======
>>>>>>> Правки тестов
        />
    );

    wrapper.find('.form__btn-footer').simulate('click', {
      preventDefault: jest.fn(),
    });

    expect(onRegisterButtonClick).toHaveBeenCalledTimes(0);
  });
});