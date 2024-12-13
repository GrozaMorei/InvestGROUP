import { useEffect, useState } from 'react';
import products from '@/data/products';
import './BrandFilter.scss';

export default function BrandFilter({ delUpdate }) {
  // Получаем список брендов
  const brandCounts = products.reduce((acc, product) => {
    acc[product.brand] = (acc[product.brand] || 0) + 1;
    return acc;
  }, {});

  const brands = Object.keys(brandCounts);

  // Состояние для выбранных брендов
  const [selectedBrands, setSelectedBrands] = useState([]);

   // Для обновления значений при сбросе
   useEffect(() => {
    setSelectedBrands([]);
    localStorage.setItem('selectedBrands', JSON.stringify([]));
  }, [delUpdate]);

  // Функция записи брендов
  const handleBrandChange = (brand) => {
    let updatedBrands;

    // Проверка: если бренд уже выбран - убираем его, иначе добавляем
    if (selectedBrands.includes(brand)) {
      updatedBrands = selectedBrands.filter(item => item !== brand);
    } else {
      updatedBrands = [...selectedBrands, brand];
    }

    // Сохраняем новое состояние брендов
    setSelectedBrands(updatedBrands);

    // Сохраняем значение в localStorage
    localStorage.setItem('selectedBrands', JSON.stringify(updatedBrands));
    console.log("сохраняем значение: " + updatedBrands);
  }

  return (
    <div className='brand-filter'>
      <p className='brand-filter__title'>Бренд</p>
      <ul className='brand-filter__list'>
        {brands.map((brand) => (
          <li key={brand}>
            <label className='brand-filter__list-item'>
              <input
                type='checkbox'
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
              />
              <p>{brand} <span>({brandCounts[brand]})</span></p>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
