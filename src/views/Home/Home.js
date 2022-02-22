import React from 'react';
import Entry from '../../components/Entry/Entry';
import Guestbook from '../../components/Guestbook/Guestbook';
import Auth from '../Auth/Auth';

export default function Home() {
  return (
    <div>
      <Guestbook />
      <Entry />
      <Auth />
    </div>
  );
}
