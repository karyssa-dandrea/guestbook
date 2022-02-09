import React from 'react';
import { useEntry } from '../../context/EntryContext';
import './Entry.css';

export default function Entry() {
  const { entry } = useEntry();
  return (
    <div className="entries">
      {entry.map(({ name, message, id }) => (
        <div className="entry" key={id}>
          <p>{name}</p>
          <p>{message}</p>
        </div>
      ))}
    </div>
  );
}
