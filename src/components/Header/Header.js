import React from 'react';
import { useUser } from '../../context/UserContext';

export default function Header() {
  const { user } = useUser();
  return <div>Hello {user ? <p>user</p> : <p>{user}</p>}</div>;
}
