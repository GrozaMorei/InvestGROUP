import '../styles/global.scss';
import Footer from './components/Footer/Footer';

function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Next JS</title>
      </head>

      <body className="body">
        <main className="main"> {children} </main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;