import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

it('renders App component correctly', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  expect(asFragment()).toMatchSnapshot();
});
