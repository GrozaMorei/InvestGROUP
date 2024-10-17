'use client';

// Импорт стилей
import '../styles/index.css';

// Импорт данных товаров
import categories from '../data/categories';
import products from '../data/products';

// Импорт компонентов
import ProductCard from './components/ProductCard';
import CategoryCard from './components/CategoryCard';
import Contacts from './components/Contacts';

export default function Page() {
  return (
    <>
      {/* Секция с контактами */}
      <Contacts />
    </>
  );
}
