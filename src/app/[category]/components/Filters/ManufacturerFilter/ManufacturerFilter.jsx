import { useEffect, useState } from 'react';
import products from '@/data/products';
import Search from '../Search/Search';
import Accordion from '@/app/components/UI/Accordion/Accordion';
import './ManufacturerFilter.scss';

export default function ManufacturerFilter({ delUpdate, category }) {
  // Получаем список производителей
  const filteredProduct = products.filter((product) => product.category === category);
  const manufacturerCounts = filteredProduct.reduce((acc, product) => {
    acc[product.manufacturer] = (acc[product.manufacturer] || 0) + 1;
    return acc;
  }, {});

  const manufacturer = Object.keys(manufacturerCounts);
  
  // Состояние для выбранных производителей и поискового запроса
  const [selectedManufacturer, setSelectedManufacturer] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Для обновления значений при сбросе
  useEffect(() => {
    setSelectedManufacturer([]);
    localStorage.setItem('selectedManufacturer', JSON.stringify([]));
  }, [delUpdate]);
  
  // Функция записи производителей
  const handleManufacturerChange = (manufacturer) => {
    let updatedManufacturer;
  
    // Проверка: если производитель уже выбран - убираем его, иначе добавляем
    if (selectedManufacturer.includes(manufacturer)) {
      updatedManufacturer = selectedManufacturer.filter(item => item !== manufacturer);
    } else {
      updatedManufacturer = [...selectedManufacturer, manufacturer];
    }
  
    // Сохраняем новое состояние производителей
    setSelectedManufacturer(updatedManufacturer);
  
    // Сохраняем значение в localStorage
    localStorage.setItem('selectedManufacturer', JSON.stringify(updatedManufacturer));
  };

  
  // Фильтрация брендов по поисковому запросу
  const filteredManufacturer = manufacturer.filter((manufacturer) =>
    manufacturer.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  // Функция для обновления поискового запроса
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Разделяем бренды на первые 4 и остальные
  const firstFourManfacturer = filteredManufacturer.slice(0, 4);
  const remainingManufacturer = filteredManufacturer.slice(4);
  
  return (
    <div className='manufacturer-filter'>
      <p className='manufacturer-filter__title'>Производитель</p>
      <Search onSearch={handleSearch} />

      {/* Отобраажем первые 4 производителя */}
      <ul className='manufacturer-filter__list'>
        {firstFourManfacturer.map((manufacturer) => (
          <li key={manufacturer}>
            <label className='manufacturer-filter__list-item'>
              <input
                type='checkbox'
                checked={selectedManufacturer.includes(manufacturer)}
                onChange={() => handleManufacturerChange(manufacturer)}
              />
              <p>{manufacturer} <span>({manufacturerCounts[manufacturer]})</span></p>
            </label>
          </li>
        ))}
      </ul>

      {/* Если есть еще производители, оборачиваем остальные в аккордеон */}
      {remainingManufacturer.length > 0 && (
        <Accordion title="Показать все">
          <ul className='manufacturer-filter__list'>
            {remainingManufacturer.map((manufacturer) => (
              <li key={manufacturer}>
                <label className='manufacturer-filter__list-item'>
                  <input
                    type='checkbox'
                    checked={selectedManufacturer.includes(manufacturer)}
                    onChange={() => handleManufacturerChange(manufacturer)}
                  />
                  <p>{manufacturer} <span>({manufacturerCounts[manufacturer]})</span></p>
                </label>
              </li>
            ))}
          </ul>
        </Accordion>
      )}
    </div>
  );
};
