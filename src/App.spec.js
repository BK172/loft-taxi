import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

jest.mock('./components/pages/login/login', () => ({ Login: () => <div>Login component</div> }));
jest.mock('./components/pages/map/map', () => ({ Map: () => <div>Map component</div> }));
jest.mock('./components/pages/profile/profile', () => ({ Profile: () => <div>Profile component</div> }));
jest.mock('./components/pages/registration/registration', () => ({ Registration: () => <div>Registration component</div> }));

describe('App component test', () => {
  it('Should render Login correctly', () => {
    const { container } = render(<App />);
    expect(container.innerHTML).toMatch('Login component');
  });
  
  describe('Click on navigation buttons test', () => {
    it('Should open the corresponding page', () => {
      const { getByText, container } = render(<App />);

      fireEvent.click(getByText('Map'));
      expect(container.innerHTML).toMatch('Map component');
      fireEvent.click(getByText('Profile'));
      expect(container.innerHTML).toMatch('Profile component');
      fireEvent.click(getByText('Registration'));
      expect(container.innerHTML).toMatch('Registration component');
    });
  });
});