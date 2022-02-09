import { render, screen } from '@testing-library/react';
import App from './App';
import { EntryProvider } from './context/EntryContext';
import { UserProvider } from './context/UserContext';

test('test for behavioral and component', () => {
  render(
    <UserProvider>
      <EntryProvider>
        <App />
      </EntryProvider>
    </UserProvider>
  );
});
