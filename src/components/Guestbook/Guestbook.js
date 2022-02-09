import React from 'react';
import { useState } from 'react';
import { useEntry } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';

export default function Guestbook() {
  const [name, setName] = useState('');
  const [guestEntry, setGuestEntry] = useState('');
  const { user, setUser } = useUser();
  const { entry, setEntry } = useEntry();

  function updateEntry() {
    if (!guestEntry) return;
    setUser(name);
    setEntry([...entry, { name, message: guestEntry }]);
    setGuestEntry('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEntry();
  };

  const guestInput = (
    <div>
      <label>Name:</label>
      <input
        id="name"
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {user ? null : guestInput}
        <div>
          <label>Guest Entry:</label>
          <input
            type="text"
            id="guestEntry"
            placeholder="Enter Entry"
            value={guestEntry}
            onChange={(e) => setGuestEntry(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
        <button
          type="button"
          onClick={() => {
            setGuestEntry('');
            setName('');
            setUser('');
          }}
        >
          Not {user} ?
        </button>
      </form>
    </div>
  );
}
