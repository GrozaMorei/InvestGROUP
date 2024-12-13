'use client';

import { use, useState } from 'react';
import categories from '@/data/categories';

import Undefine from '../components/UI/Undefine/Undefine';
import Filters from './components/Filters/Filters';
import CategoryList from './components/CategoryList/CategoryList';
import CategoryHeader from './components/CategoryHeader/CategoryHeader'

import './page.scss';

export default function Category({ params }) {
  // Првоерка правильности маршрута
  const { category } = use(params);
  const isCategoryValid = categories.some(cat => cat.name === category);
  if (!isCategoryValid) {
    return <Undefine message={'категория не найдена'} />;
  }

  // Получение перевода категории
  const title = categories.find(cat => cat.name === category)?.title;

  // Состояние для обновление списка
  const [update, setUpdate] = useState(true);
  const toggleUpdate = () => {
    setUpdate((prev) => !prev);
  }

  return (
    <>
      <div className='container'>
        <CategoryHeader title={title}/>
        <div className='category__inner'>
          <Filters toggleUpdate={toggleUpdate}/>
          <CategoryList update={update}/>
        </div>
      </div>
    </>
  );
}
