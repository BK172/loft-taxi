import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('./components/header/header', () => ({ Header: () => <div>Header component</div> }));
jest.mock('./components/pages/login/login', () => ({ Login: () => <div>Login component</div> }));

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
});