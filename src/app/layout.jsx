'use client';

import '../styles/global.scss';
import { useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function RootLayout({ children }) {
  const [isOpenHeader, setIsOpenHeader] = useState(false);

  const toggleMenuHeader = () => {
    setIsOpenHeader(!isOpenHeader);
  }

  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Next JS</title>
      </head>

      <body className={`body ${isOpenHeader ? "body__no-scroll" : ""}`}>
        <Header toggleMenu={ toggleMenuHeader } isOpen={ isOpenHeader } />
        <main className="main">
          {children} 
        </main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
