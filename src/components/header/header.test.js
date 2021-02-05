import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import App from '../app/app';
import Header from './header';

// jest.mock('../pages/map/map', () => ({ Map: () => <div>Map component</div> }));
// jest.mock('../pages/profile/profile', () => ({ Profile: () => <div>Profile component</div> }));
// jest.mock('../pages/login/login', () => ({ Login: () => <div>Login component</div> }));

describe('Header component test', () => {
  it('Should render Header correctly', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // describe('Click on navigation buttons test', () => {
  //   it('Should open the corresponding page', () => {
  //     const { container } = render(<App isLoggedIn />);

  //     fireEvent.click(getByText('Карта'));
  //     expect(container.innerHTML).toMatch('Map component');
  //     fireEvent.click(getByText('Профиль'));
  //     expect(container.innerHTML).toMatch('Profile component');
  //     fireEvent.click(getByText('Войти'));
  //     expect(container.innerHTML).toMatch('Login component');
  //     fireEvent.click(getByText('Выйти'));
  //     expect(container.innerHTML).toMatch('Login component');
  //   });
  // });
});