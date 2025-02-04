import { useState } from 'react';
import ButtonFilter from './ButtonFilter/ButtonFilter';
import PriceFilter from './PriceFilter/PriceFilter';
import BrandFilter from './BrandFilter/BrandFilter';
import ManufacturerFilter from './ManufacturerFilter/ManufacturerFilter';
import './Filters.scss';

export default function Filters({ toggleUpdate, category, type = 'desktop' }) {
  // Состояние для сброса фильтров
  const [delUpdate, setDelUpdate] = useState(true);
  const deleteUpdate = () => {
    setDelUpdate((prev) => !prev);
  }

  // Состояние дял фильтров
  const [displayParam, setDisplayparam] = useState(false);
  const toggleDisplayParam = () => {
    setDisplayparam((prev) => !prev)
  }

  // Функция для скрытия меню через кнопку
  function closeWindow() {
    setDisplayparam(false)
    toggleUpdate();
  }

  return (
    <section className='filters'>
      <div className='filters__top'>
        <h3 className='filters__title'>Подбор по параметрам</h3>
        {type === 'mobile' ?
          <button className={`filters__btn ${displayParam ? 'active' : ''}`} onClick={toggleDisplayParam}>
            <img src="/icons/arrow-left-g.svg" alt="Иконка стрелочки" />
          </button>
        :
          <></>}
      </div>

      <div className={`${type === 'mobile' ? 'filters__inner-mobile' : 'filters__inner'} ${displayParam ? 'active' : ''}`}>
        <PriceFilter delUpdate={delUpdate} category={category}/>
        <ManufacturerFilter delUpdate={delUpdate} category={category}/>
        <BrandFilter delUpdate={delUpdate} category={category}/>
        <ButtonFilter toggleUpdate={type === 'mobile' ? closeWindow : toggleUpdate} deleteUpdate={deleteUpdate}/>
      </div>
    </section>
  )
}

