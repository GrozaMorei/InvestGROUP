import { useEffect, useState } from 'react';
import products from '@/data/products.json';
import './PriceFilter.scss';

export default function PriceFilter({ delUpdate, category }) {
  const filteredProduct = products.filter((product) => product.category === category);
  const maxPriceProduct = Math.max(...filteredProduct.map(product => product.price));

  const [maxPrice, setMaxPrice] = useState(maxPriceProduct);
  const [minPrice, setMinPrice] = useState(0);
  
  // Для обновления значений при сбросе
  useEffect(() => {
    setMaxPrice(maxPriceProduct);
    setMinPrice(0);
    localStorage.setItem('minPrice', '0');
    localStorage.setItem('maxPrice', '100000');
  }, [delUpdate]);

  // Функция записи минимального значения
  const handleMinPriceBlur = () => {
    let newMinPrice = Number(minPrice);
    
    // Проверка, что минимальная цена не больше максимальной
    if (newMinPrice > maxPrice) {
      newMinPrice = maxPrice - 1;
    }
    
    // Обновляем цену в состоянии и localStorage
    setMinPrice(newMinPrice);
    localStorage.setItem('minPrice', newMinPrice.toString());
  };

  // Функция запсии максимального значения
  const handleMaxPriceBlur = () => {
    let newMaxPrice = Number(maxPrice);

    // Проверка, что максимальная цена не выше максимальной товаров
    if (!newMaxPrice) {
      newMaxPrice = maxPriceProduct;
      console.log("Валидация: " + newMaxPrice);
    }
    
    // Проверка, что максимальная цена не меньше минимальной
    if (newMaxPrice < minPrice) {
      newMaxPrice = minPrice + 1;
    }

    // Проверка на максимально допустимое значение
    if (newMaxPrice > maxPriceProduct) {
      newMaxPrice = maxPriceProduct;
    }

    // Обновляем цену в состоянии и localStorage
    setMaxPrice(newMaxPrice);
    localStorage.setItem('maxPrice', newMaxPrice.toString());
  };

  return (
    <div className='price-filter'>
      <p className='price-filter__title'>Цена ₸</p>

      <div className='price-filter__inner'>
        <input 
          type="number"
          value={minPrice}
          onBlur={handleMinPriceBlur}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="От..."
        />
        <p>-</p>
        <input
          type="number"
          value={maxPrice}
          onBlur={handleMaxPriceBlur}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="...до"
        />
      </div>
    </div>
  );
}

