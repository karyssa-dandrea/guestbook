import { render, screen } from '@testing-library/react';
import App from './App';
import { EntryProvider } from './context/EntryContext';
import { UserProvider } from './context/UserContext';
import userEvent from '@testing-library/user-event';

test('test for behavioral and component', () => {
  render(
    <UserProvider>
      <EntryProvider>
        <App />
      </EntryProvider>
    </UserProvider>
  );
  const nameInput = screen.getByLabelText(/Name:/i);
  const messageInput = screen.getByLabelText(/Guest Entry:/i);
  expect(nameInput).toBeInTheDocument();
  expect(messageInput).toBeInTheDocument();

  userEvent.type(nameInput, 'ryssa');
  expect(nameInput.value).toBe('ryssa');
  userEvent.type(messageInput, 'hi');
  expect(messageInput.value).toBe('hi');

  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();

  userEvent.click(button);
  const name = screen.getByRole('heading', { name: /ryssa/i });
  const input = screen.getByText('hi');
  expect(name).toBeInTheDocument();
  expect(input).toBeInTheDocument();
});
