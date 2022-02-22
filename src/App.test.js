import { render, screen } from '@testing-library/react';
import App from './App';
import { EntryProvider } from './context/EntryContext';
import { UserProvider } from './context/UserContext';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from './context/ThemeContext';

test('test for behavioral and component', () => {
  render(
    <ThemeProvider>
      <UserProvider>
        <EntryProvider>
          <App />
        </EntryProvider>
      </UserProvider>
    </ThemeProvider>
  );
  const email = screen.getByRole('textbox', { name: /email/i });
  const password = screen.getByLabelText(/password/i);
  const signIn = screen.getByRole('button', {
    name: /sign in!/i,
  });

  userEvent.type(email, 'k@example.com');
  userEvent.type(password, '123456');

  expect(email).toHaveValue('k@example.com');
  expect(password).toHaveValue('123456');
  expect(signIn).toBeEnabled();
  userEvent.click(signIn);

  const messageInput = screen.getByLabelText(/Guest Entry:/i);
  expect(messageInput).toBeInTheDocument();
  userEvent.type(messageInput, 'hi');
  expect(messageInput.value).toBe('hi');

  const button = screen.getByRole('button', { name: /submit/i });
  expect(button).toBeInTheDocument();

  userEvent.click(button);
  const name = screen.getByRole('heading', { name: /ryssa/i });
  const input = screen.getByText('hi');
  expect(name).toBeInTheDocument();
  expect(input).toBeInTheDocument();
});
