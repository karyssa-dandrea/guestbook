import React from 'react';
import { useEntry } from '../../context/EntryContext';

export default function Entry() {
  const { entry } = useEntry();
  return (
    <div>
      {entry.map(({ name, message, id }) => (
        <div key={id}>
          <p>{name}</p>
          <p>{message}</p>
        </div>
      ))}
    </div>
  );
}
