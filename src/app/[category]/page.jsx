'use client';

import { use, useState, useMemo } from 'react';
import categories from '@/data/categories';

import Undefine from '../components/UI/Undefine/Undefine';
import Filters from './components/Filters/Filters';
import CategoryList from './components/CategoryList/CategoryList';
import CategoryHeader from './components/CategoryHeader/CategoryHeader';
import CategoryTags from './components/CategoryTags/CategoryTags';
import BreadCrumps from '../components/Crumbs/Crumbs';

import './page.scss';

export default function Category({ params }) {
  // Проверка правильности маршрута
  const { category } = use(params);
  const isCategoryValid = categories.some(cat => cat.name === category);
  if (!isCategoryValid) {
    return <Undefine message={'Раздел не найден'} margin='40px 0'/>;
  }

  // Получение перевода категории
  const title = categories.find(cat => cat.name === category)?.title;

  // Состояние для обновление списка
  const [update, setUpdate] = useState(true);
  const toggleUpdate = () => {
    setUpdate((prev) => !prev);
  }

  // Настройка адаптива
  const isMobile = useMemo(() => window.innerWidth <= 800, []);

  return (
    <>
      <BreadCrumps margin={'20px 0'}/>
      <div className='container'>
        <CategoryHeader title={title} toggleUpdate={toggleUpdate}/>
        {isMobile ? <Filters toggleUpdate={toggleUpdate} category={category} type={'mobile'}/> : <></>}
        <CategoryTags toggleUpdate={toggleUpdate} category={category}/>
        <div className='category__inner'>
          {isMobile ? <></> : <Filters toggleUpdate={toggleUpdate} category={category}/>}
          <CategoryList update={update} category={category} />
        </div>
      </div>
    </>
  );
}
