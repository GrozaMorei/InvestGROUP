'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Хук для получения текущего пути
import './breadCrumps.scss'; // Подключение стилей
import { useState, useEffect } from 'react';

const Breadcrumbs = () => {
  const pathname = usePathname(); // Получаем текущий маршрут
  const pathSegments = pathname.split('/').filter((segment) => segment); // Разбиваем маршрут на сегменты
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600); // Проверяем ширину экрана
    };

    handleResize(); // Проверяем при первой загрузке
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile) {
    // Отображаем кнопку "Назад" на мобильных устройствах
    const backLink = pathSegments.length > 1
      ? '/' + pathSegments.slice(0, pathSegments.length - 1).join('/')
      : '/';

    return (
      <nav className="breadcrumbs breadcrumbs--mobile">
        <Link href={backLink} className="breadcrumbs__back">
          <span className="breadcrumbs__icon">
            <img src="/icons/arrow-left-g.svg" alt="Назад" />
          </span>
          <span className="breadcrumbs__text">Назад</span>
        </Link>
      </nav>
    );
  }

  return (
    <nav className="breadcrumbs">
			<div className="container">
      	<ul className="breadcrumbs__list">
        	{/* Главная ссылка */}
        	<li className="breadcrumbs__item">
          	<Link href="/" className="breadcrumbs__link">
            	Главная
          	</Link>
        	</li>

        	{/* Генерация остальных ссылок */}
        	{pathSegments.map((segment, index) => {
          	const link = '/' + pathSegments.slice(0, index + 1).join('/');
          	return (
            	<li key={index} className="breadcrumbs__item">
              	<Link href={link} className="breadcrumbs__link">
                	{decodeURIComponent(segment)}
              	</Link>
            	</li>
          	);
        	})}
      	</ul>
			</div>
    </nav>
  );
};

export default Breadcrumbs;