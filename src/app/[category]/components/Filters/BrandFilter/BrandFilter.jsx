import { useEffect, useState } from 'react';
import products from '@/data/products';
import Search from '../Search/Search';
import Accordion from '@/app/components/UI/Accordion/Accordion';
import './BrandFilter.scss';

export default function BrandFilter({ delUpdate, category }) {
  // Получаем список брендов
  const filteredProduct = products.filter((product) => product.category === category);
  const brandCounts = filteredProduct.reduce((acc, product) => {
    acc[product.brand] = (acc[product.brand] || 0) + 1;
    return acc;
  }, {});

  const brands = Object.keys(brandCounts);

  // Состояние для выбранных брендов и поискового запроса
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

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
  };

  // Фильтрация брендов по поисковому запросу
  const filteredBrands = brands.filter((brand) =>
    brand.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  // Функция для обновления поискового запроса
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Разделяем бренды на первые 4 и остальные
  const firstFourBrands = filteredBrands.slice(0, 4);
  const remainingBrands = filteredBrands.slice(4);

  return (
    <div className="brand-filter">
      <p className="brand-filter__title">Бренд</p>
      <Search onSearch={handleSearch} />

      {/* Отображаем первые 4 бренда */}
      <ul className="brand-filter__list">
        {firstFourBrands.map((brand) => (
          <li key={brand}>
            <label className="brand-filter__list-item">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
              />
              <p>{brand} <span>({brandCounts[brand]})</span></p>
            </label>
          </li>
        ))}
      </ul>

      {/* Если есть еще бренды, оборачиваем оставшиеся в аккордеон */}
      {remainingBrands.length > 0 && (
        <Accordion title="Показать все">
          <ul className="brand-filter__list">
            {remainingBrands.map((brand) => (
              <li key={brand}>
                <label className="brand-filter__list-item">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                  />
                  <p>{brand} <span>({brandCounts[brand]})</span></p>
                </label>
              </li>
            ))}
          </ul>
        </Accordion>
      )}
    </div>
  );
};
