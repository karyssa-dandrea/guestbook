import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useUser } from '../../context/UserContext';
import ThemeControls from '../controls/ThemeControls';
import './Header.css';

export default function Header() {
  const { user } = useUser();
  const { theme } = useTheme();
  const welcome = user ? `Hi, ${user}!` : 'Sign the guestbook';
  return (
    <div className="headers" data-theme={theme}>
      <span className="spaceholder"></span>
      <p>{welcome} </p>
      <ThemeControls />
    </div>
  );
}
