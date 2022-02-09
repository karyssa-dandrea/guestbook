import React from 'react';
import { useUser } from '../../context/UserContext';
import './Header.css';

export default function Header() {
  const { user } = useUser();
  return <div className="headers">Hello {user ? <p>user</p> : <p>{user}</p>}</div>;
}
