'use client';

import { useState } from 'react';
import { use } from 'react';

import Undefine from '../components/UI/Undefine/Undefine';

import Filters from './components/Filters/Filters';

export default function Category({ params }) {
  const { category } = use(params);
  const categories = [
    'household-chemicals',
    'cosmetics-and-hygiene',
    'household-goods',
    'products-for-children-and-mothers',
    'tableware',
  ];
  const isCategoryValid = categories.includes(category);

  if (!isCategoryValid) {
    return <Undefine message={'категория не найдена'} />;
  }

  return (
    <section className="container">
      <div>
        <div className="filters">
          <Filters />
        </div>
      </div>
    </section>
  );
}
