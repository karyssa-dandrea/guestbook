import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { useUser } from '../../context/UserContext';

export default function Auth() {
  const { setUser } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === process.env.AUTH_EMAIL && password === process.env.AUTH_PASSWORD) {
      setUser(email);
      const { from } = location.state || { from: { pathname: '/' } };
      history.replace(from.pathname);
    }
  };

  return (
    <form>
      <label>Email:</label>
      <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Sign In!</button>
    </form>
  );
}
