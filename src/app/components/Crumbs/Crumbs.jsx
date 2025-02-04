'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import translationsURL from '@/data/translationsURL';
import './Crumbs.scss';

function translateToRussian(element) {
  return translationsURL[element] || element;
}

export default function BreadCrumps({ currentProduct, margin }) {
  const pathName = usePathname();
  const pathSegments = pathName.split('/').filter(Boolean);
  let basePath = '';

  // Если передается текущий продукт, меняем артикул на название
  if (currentProduct) {
    pathSegments[pathSegments.length - 1] = `${currentProduct.name}, ${currentProduct.weight}`;
  }

  // Логика кнопки "Назад"
  const goBack = () => {
    if (pathSegments.length > 1) {
      const newPath = '/' + pathSegments.slice(0, -1).join('/');
      window.location.href = newPath;
    } else {
      window.location.href = '/';
    }
  };

  // Генерация списка хлебных крошек
  const breadCrumbItems = pathSegments.map((segment, index) => {
    basePath = `${basePath}/${segment}`;
    const isLast = index === pathSegments.length - 1;

    return (
      <li key={index} className="bread-crumbs__list-item">
        {isLast ? (
          <span className="bread-crumbs__link">{translateToRussian(segment)}</span>
        ) : (
          <Link href={basePath} className="bread-crumbs__link">
            {translateToRussian(segment)}
          </Link>
        )}
      </li>
    );
  });

  return (
    <article className="bread-crumbs">
      <div className="bread-crumbs__container container">
        <ul className="bread-crumbs__list" style={{margin: margin}}>
          {/* Главная страница */}
          <li key="home" className="bread-crumbs__list-item">
            <Link href="/">{translateToRussian('/')}</Link>
          </li>
          {/* Другие сегменты */}
          {breadCrumbItems}
        </ul>
        <button onClick={goBack} className="bread-crumbs__button">
          <img src="/icons/arrow-left-g.svg" alt="Иконка назад" className="bread-crumbs__button-img" />
          <span>Назад</span>
        </button>
      </div>
    </article>
  );
}
