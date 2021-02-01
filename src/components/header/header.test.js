import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import App from '../app/app';
import Header from './header';

jest.mock('mapbox-gl', () => ({}));

// jest.mock('../pages/login/login', () => ({ Login: () => <div>Login component</div> }));
// jest.mock('../pages/map/map', () => ({ Map: () => <div>Map component</div> }));
// jest.mock('../pages/profile/profile', () => ({ Profile: () => <div>Profile component</div> }));

describe('Header component test', () => {
  it('Should render Header correctly', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // describe('Click on navigation buttons test', () => {
  //   it('Should open the corresponding page', () => {
  //     const { container } = render(<App />);
  //     const { header } = render(<Header />);

  //     fireEvent.click(getByText(header, 'Карта'));
  //     expect(container.innerHTML).toMatch('Map component');
  //     fireEvent.click(getByText(header, 'Профиль'));
  //     expect(container.innerHTML).toMatch('Profile component');
  //     fireEvent.click(getByText(header, 'Войти'));
  //     expect(container.innerHTML).toMatch('Login component');
  //   });
  // });
});