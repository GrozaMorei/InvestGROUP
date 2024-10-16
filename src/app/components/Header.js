import Link from 'next/link';
import '../../styles/components/Header.css'; // Подключаем стили

// Разметка хедера
export default function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Welcome to NEXT Js</h1>
      <nav className="nav-list">
        <li className="list-item">
          <Link href="/">Главная</Link>
        </li>
        <li className="list-item">
          <Link href="/catalog">Каталог</Link>
        </li>
        <li className="list-item">
          <Link href="/basket">Корзина</Link>
        </li>
        <li className="list-item">
          <Link href="/order">Заказ</Link>
        </li>
      </nav>
    </header>
  );
}
