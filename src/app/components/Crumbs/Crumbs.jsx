'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import './Crumbs.scss';

function translateToRussian(element) {
  const translations = {
    '/': 'Главная',
    'household-chemials': 'Бытовая химия',
    'cosmetics-and-hygiene': 'Косметика и гигиена',
    'household-goods': 'Товары для дома',
    'products-for-children-and-mothers': 'Товары для детей и мам',
    'tableware': 'Посуда'
  }

  return translations[element] || element;
}


export default function BreadCrumps({ currentProduct }) {
  const pathName = usePathname();
  const pathSegments = pathName.split('/').filter(Boolean);
  let basePath = '';
  
  // Если передается текущий продукт, меняем артикул на название
  if (currentProduct) {
    pathSegments[pathSegments.length-1] = `${currentProduct.name}, ${currentProduct.weight}`;
  }

  // Логика кнопки "Назад"
  const goBack = () => {
    if (pathSegments.length > 1) {
      const newPath = '/' + pathSegments.slice(0, -1).join('/');
      window.location.href = newPath;
    } else {
      window.location.href = '/';
    }
  }


  return (
    <section className='bread-crumbs'>
      <div className="container bread-crumbs__container">

        <ul className='bread-crumbs__list'>
          {/* Главная страница */}
          <li key='home' className='bread-crumbs__list-item'>
            <Link href="/">{translateToRussian('/')}</Link>
          </li>

          {/* Другие сегменты */}
          {pathSegments.map(function(segment, index) {
            basePath = `${basePath}/${segment}`;

            // Если это последний элемент
            const isLast = index === pathSegments.length - 1;

            return (
              <li key={ index } className='bread-crumbs__list-item'>
                { isLast ?  (
                  // Отключенный последний элемент
                  <span className='bread-crumbs__link'>{ translateToRussian(segment) }</span>
                ) : (
                  // Ссылка для остальных элементов
                  <Link href={ basePath } className='bread-crumbs__link'>{ translateToRussian(segment) }</Link>
                )}
              </li>
            );
          })}
        </ul>

        <button onClick={ goBack } className='bread-crumbs__button'>
          <img src='/icons/arrow-left-g.svg' alt='Икнонка назад' className='bread-crumbs__button-img' />
          <span>Назад</span>
        </button>

      </div>
    </section>
  )
}