import React from 'react';
import { render } from '@testing-library/react';
import Login from './login';

describe('Login component test', () => {
  it('Should render Login correctly', () => {
	const { getByLabelText } = render(<Login />);

	expect(getByLabelText('Имя пользователя')).toHaveAttribute('name', 'email');
	expect(getByLabelText('Пароль')).toHaveAttribute('name', 'password');
  });
});