import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

jest.mock('./components/header/header', () => ({ Header: () => <div>Header component</div> }));
jest.mock('./components/pages/login/login', () => ({ Login: () => <div>Login component</div> }));
jest.mock('./components/pages/map/map', () => ({ Map: () => <div>Map component</div> }));
jest.mock('./components/pages/profile/profile', () => ({ Profile: () => <div>Profile component</div> }));

describe('App component test', () => {
  it('Should render Login correctly', () => {
    const { container } = render(<App />);
    expect(container.innerHTML).toMatchInlineSnapshot(`
      <div>Header component</div>
      <main>
        <section><div>Login component</div></section>
      </main>
    `);
  });

  describe('Click on navigation buttons test', () => {
    it('Should open the corresponding page', () => {
      const { getByText, container } = render(<App />);

      fireEvent.click(getByText('Map'));
      expect(container.innerHTML).toMatchInlineSnapshot(`
        <div>Header component</div>
        <main>
          <section><div>Map component</div></section>
        </main>
      `);
      fireEvent.click(getByText('Profile'));
      expect(container.innerHTML).toMatchInlineSnapshot(`
        <div>Header component</div>
        <main>
          <section><div>Profile component</div></section>
        </main>
      `);
    });
  });
});