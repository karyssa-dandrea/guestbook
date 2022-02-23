import { render, screen } from '@testing-library/react';
import Auth from './Auth';
import { MemoryRouter as Router } from 'react-router-dom';
import { UserProvider } from '../../context/UserContext';
import { ThemeProvider } from '../../context/ThemeContext';
import userEvent from '@testing-library/user-event';

test('should render a sign in form', () => {
  const container = render(
    <ThemeProvider>
      <UserProvider>
        <Router>
          <Auth />
        </Router>
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

  expect(container).toMatchSnapshot();
});
