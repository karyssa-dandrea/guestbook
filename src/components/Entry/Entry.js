import React from 'react';
import { useEntry } from '../../context/EntryContext';
import './Entry.css';

export default function Entry() {
  const { entry } = useEntry();
  return (
    <div className="entries">
      {entry.map(({ name, message }) => (
        <div className="entry" key={message}>
          <h1>{name}</h1>
          <p>{message}</p>
        </div>
      ))}
    </div>
  );
}
