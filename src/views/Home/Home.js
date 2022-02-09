import React from 'react';
import Entry from '../../components/Entry/Entry';
import Guestbook from '../../components/Guestbook/Guestbook';

export default function Home() {
  return (
    <div>
      <Guestbook />
      <Entry />
    </div>
  );
}
