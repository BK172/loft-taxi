import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { makeInitialStateMock } from '../../utils';
import Header from './header';

describe('Header component test', () => {
  const store = configureStore()(makeInitialStateMock());

  it('Should render Header correctly', () => {
    const tree = renderer.create(
        <Provider store={store}>
          <MemoryRouter>
            <Header
              logOut={jest.fn()}
            />
          </MemoryRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Click on navigation button', () => {
    const onPageChange = jest.fn();
    const wrapper = shallow(
        <Provider store={store}>
          <MemoryRouter>
            <Header
              logOut={jest.fn()}
            />
          </MemoryRouter>
        </Provider>
    );

    const buttons = wrapper.find('.header__button');

    buttons.forEach((button) => button.simulate('click', {
      preventDefault: jest.fn(),
    }));

    expect(onPageChange).toHaveBeenCalledTimes(buttons.length);
  });
});