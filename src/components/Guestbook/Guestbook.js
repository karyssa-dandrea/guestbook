import React from 'react';
import { useState } from 'react';
import { useEntry } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';
import './Guestbook.css';
import { useTheme } from '../../context/ThemeContext';

export default function Guestbook() {
  const [name, setName] = useState('');
  const [guestEntry, setGuestEntry] = useState('');
  const { user, setUser } = useUser();
  const { entry, setEntry } = useEntry();

  const { theme } = useTheme();

  function updateEntry() {
    if (!guestEntry) return;
    setEntry([...entry, { name, message: guestEntry }]);
    setGuestEntry('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEntry();
  };

  const guestInput = (
    <div data-theme={theme}>
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
    <div className="form-container" data-theme={theme}>
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
              setUser(null);
            }}
          >
            SignOut ?
          </button>
        )}
      </form>
    </div>
  );
}
