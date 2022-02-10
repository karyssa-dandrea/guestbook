import React from 'react';
import { useState } from 'react';
import { useEntry } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';
import './Guestbook.css';

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
      <label>
        Name:
        <input
          id="name"
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </div>
  );
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {user ? null : guestInput}
        <div>
          <label>
            Guest Entry:
            <input
              type="text"
              id="guestEntry"
              placeholder="Enter Entry"
              value={guestEntry}
              onChange={(e) => setGuestEntry(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
        {user && (
          <button
            type="button"
            onClick={() => {
              setGuestEntry('');
              setName('');
              setUser('');
            }}
          >
            SignOut ?
          </button>
        )}
      </form>
    </div>
  );
}
