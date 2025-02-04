import { useState } from 'react';
import './CategoryHeader.scss';

export default function CategoryHeader({ title, toggleUpdate }) {
  const [display, setDisplay] = useState('line');

  function handleDisplay() {
    localStorage.setItem('display', display)
    if (display == 'line') {
      setDisplay('card');
    } else {
      setDisplay('line');
    }
    toggleUpdate();
  }

  function handleSorted(e) {
    const sort = e.target.value;
    localStorage.setItem('sorted', sort);
    toggleUpdate();
  }

  return (
    <section className="category-header">
      <h1 className='category-header__title'>{title}</h1>

      <div className='category-header__filter'>
        <span className='category-header__sorted-title'>Сортировка:</span>
        <select className='category-header__sorted' onChange={handleSorted}>
          <option value="" disabled>Тип</option>
          <option value="name_start">Название: от А до Я</option>
          <option value="name_end">Название: от Я до А</option>
          <option value="price_start">Цена: по возрастанию</option>
          <option value="price_end">Цена: по убыванию</option>
        </select>

        <div className='category-header__display'>
          <div className='category-header__display-slider'
            style={display == 'line' ? {left: '44px'} : {left: '4px'}}></div>
          <button className='category-header__display-btn' onClick={handleDisplay}>
            <img src="/icons/sorted-line.svg" alt="Значок линий" />
          </button>
          <button className='category-header__display-btn' onClick={handleDisplay}>
            <img src="/icons/sorted-card.svg" alt="Значок карточек" />
          </button>
        </div>
      </div>
    </section>
  );
}
