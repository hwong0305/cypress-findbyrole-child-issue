import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('loads the function', async () => {
  // ARRANGE
  render(<App />);

  // ACT

  // ASSERT
  expect(screen.getByRole('button', { name: 'Log' })).toBeInTheDocument();
});
