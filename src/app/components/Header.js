import Link from 'next/link';
import '../../styles/components/Header.css'; // Подключаем стили

// Разметка хедера
export default function Header() {
  return (
    <header className="header">
      <div className="header-top"></div>
      <div className="header-bottom"></div>
    </header>
  );
}
