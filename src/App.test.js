import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Oh my! The lizard chomped down on the alien!/i);
  expect(linkElement).toBeInTheDocument();
});
