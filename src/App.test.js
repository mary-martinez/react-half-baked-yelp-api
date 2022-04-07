import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Restaurant finder heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/Restaurant/i);
  expect(linkElement).toBeInTheDocument();
});
