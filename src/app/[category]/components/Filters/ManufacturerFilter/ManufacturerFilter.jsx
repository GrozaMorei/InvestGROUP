import { useEffect, useState } from 'react';
import products from '@/data/products';
import './ManufacturerFilter.scss';

export default function ManufacturerFilter({ delUpdate }) {
  // Получаем список производителей
  const manufacturerCounts = products.reduce((acc, product) => {
    acc[product.brand] = (acc[product.brand] || 0) + 1;
    return acc;
  }, {});

  const manufacturer = Object.keys(manufacturerCounts);
  
  // Состояние для выбранных производителей
  const [selectedManufacturer, setSelectedManufacturer] = useState([]);
  
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
  }
  
  return (
    <div className='manufacturer-filter'>
      <p className='manufacturer-filter__title'>Производитель</p>
      <ul className='manufacturer-filter__list'>
        {manufacturer.map((manufacturer) => (
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
    </div>
  );
};
