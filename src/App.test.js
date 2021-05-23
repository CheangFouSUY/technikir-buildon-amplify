import { render, screen } from '@testing-library/react';
import App from './App';
import MainSidebar from './components/layouts/MainSidebar/MainSidebar';

test('renders learn react link', () => {
  // render(<App />);
  render(<MainSidebar />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
