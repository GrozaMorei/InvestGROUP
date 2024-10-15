// Импорт компонентов
import Header from './components/Header'
// Импорт глобальных стилей
import './global.css'


export default function RootLayout({ children }) {
  return (
    <html lang='ru'>

      <body>
        <Header />
        <main> { children } </main>
      </body>

    </html>
  );
}
