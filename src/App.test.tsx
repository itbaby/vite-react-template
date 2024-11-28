import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from '@jest/globals';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    const heading = screen.getByText(/vite \+ react/i);
    expect(heading).toBeInTheDocument();
  });

  it('increments counter on button click', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent(/count is 0/i);
    
    await user.click(button);
    // Wait for the state update
    await screen.findByText(/count is 1/i);
    expect(button).toHaveTextContent(/count is 1/i);
  });
});
