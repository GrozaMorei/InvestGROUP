import { useState } from 'react';
import ButtonFilter from './ButtonFilter/ButtonFilter';
import PriceFilter from './PriceFilter/PriceFilter';
import BrandFilter from './BrandFilter/BrandFilter';
import ManufacturerFilter from './ManufacturerFilter/ManufacturerFilter';
import './Filters.scss';

export default function Filters({ toggleUpdate }) {
  // Состояние для сброса фильтров
  const [delUpdate, setDelUpdate] = useState(true);
  const deleteUpdate = () => {
    setDelUpdate((prev) => !prev);
    localStorage.setItem('minPrice', '0');
    localStorage.setItem('maxPrice', '100000');
    console.log('ef');
  }

  return (
    <section className='filters'>
      <h3 className='filters__title'>Подбор по параметрам</h3>
      <PriceFilter delUpdate={delUpdate}/>
      <ManufacturerFilter delUpdate={delUpdate}/>
      <BrandFilter delUpdate={delUpdate}/>
      <ButtonFilter toggleUpdate={toggleUpdate} deleteUpdate={deleteUpdate}/>
    </section>
  )
}

