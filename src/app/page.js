'use client';

import '../styles/index.css';

// Import components
import Contacts from './components/Contacts';
import Brands from './components/Brands';
import Offers from './components/Offers';

export default function Page() {
  return (
    <>
      <Offers />
      <Brands />
      <Contacts />
    </>
  );
}
