import React from 'react';
import { render } from '@testing-library/react';
import Registration from './registration';

describe('Registration component test', () => {
  it('Should render Registration correctly', () => {
	const { getByLabelText } = render(<Registration />);

	expect(getByLabelText('Адрес электронной почты')).toHaveAttribute('name', 'email');
	expect(getByLabelText('Имя')).toHaveAttribute('name', 'user-name');
	expect(getByLabelText('Фамилия')).toHaveAttribute('name', 'user-surname');
	expect(getByLabelText('Пароль')).toHaveAttribute('name', 'password');
  });
});