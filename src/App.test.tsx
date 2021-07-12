import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header title', () => {
  render(<App />);
  const target = screen.getByText(/Point to Pointless/);
  expect(target).toBeInTheDocument();
  expect(target).toBeInstanceOf(HTMLHeadingElement)
});
