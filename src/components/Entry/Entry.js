import React from 'react';
import { useEntry } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';
import './Entry.css';

export default function Entry() {
  const { entry } = useEntry();
  const { user } = useUser();
  return (
    <div className="entries">
      {entry.map(({ message }) => (
        <div className="entry" key={message}>
          <h1>{user}</h1>
          <p>{message}</p>
        </div>
      ))}
    </div>
  );
}
