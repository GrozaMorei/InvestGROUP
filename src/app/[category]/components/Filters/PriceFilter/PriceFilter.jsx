import { useState } from 'react';

import './PriceFilter.scss';

const PriceFilter = ({ minPrice, setMinPrice, maxPrice, setMaxPrice }) => {
  const handleKeyDown = (e) => {
    if (
      !/[0-9]/.test(e.key) &&
      e.key !== 'Backspace' &&
      e.key !== 'Tab' &&
      e.key !== 'Enter' &&
      e.key !== 'Escape'
    ) {
      e.preventDefault();
    }
  };

  return (
    <div className="price-filter">
      <div className="container">
        <span className="price-filter__title">ПОДБОР ПО ПАРАМЕТРАМ</span>
        <span className="price-filter__pr">Цена ₸</span>
        <div className="price-filter__range">
          <div className="price-filter__range__min">
            <input
              type="text"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="0"
            />
          </div>
          <span> - </span>
          <div className="price-filter__range__max">
            <input
              type="text"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
