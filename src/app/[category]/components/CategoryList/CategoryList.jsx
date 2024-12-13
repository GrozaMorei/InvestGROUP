import { useEffect, useState } from 'react';
import './CategoryList.scss';

export default function CategoryList({ update }) { 
  const [minPrice, setMinPrice] = useState(0); 
  const [maxPrice, setMaxPrice] = useState(100000); 
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedManufacturer, setSelectedManufacturer] = useState([]);

  useEffect(() => { 
    const storedMinPrice = Number(localStorage.getItem('minPrice')) || 0; 
    const storedMaxPrice = Number(localStorage.getItem('maxPrice')) || 100000; 
    const storedBrands = JSON.parse(localStorage.getItem('selectedBrands')) || [];
    const storedManufacturer = JSON.parse(localStorage.getItem('selectedManufacturer')) || [];
    
    setMinPrice(storedMinPrice); 
    setMaxPrice(storedMaxPrice); 
    setSelectedBrands(storedBrands); 
    setSelectedManufacturer(storedManufacturer);
  }, [update]); 
 
  return ( 
    <section className='category-list'> 
      <p>Минимальное значение: {minPrice}</p> 
      <p>Максимальное значение: {maxPrice}</p> 
      <p>Выбранные бренды:</p> 
      <ul>
        {selectedBrands.length > 0 ? (
          selectedBrands.map((brand, index) => <li key={index}>{brand}</li>)
        ) : (
          <li>Отображаются все бренды</li>
        )}
      </ul>
      <p>Выбранные производители:</p>
      <ul>
        {selectedManufacturer.length > 0 ? (
          selectedManufacturer.map((manufacturer, index) => <li key={index}>{manufacturer}</li>)
        ) : (
          <li>Отображаются все производители</li>
        )}
      </ul>
    </section> 
  ); 
};
