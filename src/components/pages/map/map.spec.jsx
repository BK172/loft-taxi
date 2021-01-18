import React from 'react';
import { render } from '@testing-library/react';
import Map from './map';

describe('Map component test', () => {
  it('Should render Map correctly', () => {
	const { container } = render(<Map />);
	expect(container.innerHTML).toMatch('Map');
  });
});