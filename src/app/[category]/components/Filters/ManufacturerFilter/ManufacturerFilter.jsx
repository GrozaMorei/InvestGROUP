import { useState } from 'react';

import Accordion from '@/app/components/UI/Accordion/Accordion';
import products from '@/data/products';

import './ManufacturerFilter.scss';

const manufacturers = Array.from(
  new Set(products.map((product) => product.manufacturer))
);

const ManufacturerFilter = ({
  selectedManufacturers,
  setSelectedManufacturers,
  search,
  setSearch,
}) => {
  const [showAll, setShowAll] = useState(false);

  const filteredManufacturers = manufacturers.filter((manufacturer) =>
    manufacturer.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = () => {
    console.log(`Searching for: ${search}`);
    // Здесь можно добавить логику для выполнения поиска
  };

  const handleCheckboxChange = (manufacturer) => {
    setSelectedManufacturers((prev) => {
      const updatedSet = new Set(prev);
      if (updatedSet.has(manufacturer)) {
        updatedSet.delete(manufacturer);
      } else {
        updatedSet.add(manufacturer);
      }
      return updatedSet;
    });
  };

  const getProductCount = (manufacturer) => {
    return products.filter((product) => product.manufacturer === manufacturer)
      .length;
  };

  const displayedManufacturers = showAll
    ? filteredManufacturers
    : filteredManufacturers.slice(0, 4);

  return (
    <div className="manufacturer-filter">
      <div className="container">
        <span className="manufacturer-filter__title">Производитель</span>
        <div className="manufacturer-filter__main-search">
          <input
            className="manufacturer-filter__search"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Поиск..."
          />
          <button
            className="manufacturer-filter__button"
            onClick={handleSearch}
          >
            <img src="/icons/search-white.svg" alt="Иконка поиска" />
          </button>
        </div>

        <ul className="manufacturer-filter__manufacturers">
          {displayedManufacturers.map((manufacturer) => (
            <li key={manufacturer}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedManufacturers.has(manufacturer)}
                  onChange={() => handleCheckboxChange(manufacturer)}
                />
                {manufacturer} ({getProductCount(manufacturer)})
              </label>
            </li>
          ))}
        </ul>
        {!showAll && filteredManufacturers.length > 4 && (
          <div className="manufacturer-filter__manufacturers__acc">
            <Accordion title="Показать все">
              <ul className="manufacturer-filter__manufacturers">
                {filteredManufacturers.slice(4).map((manufacturer) => (
                  <li key={manufacturer}>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedManufacturers.has(manufacturer)}
                        onChange={() => handleCheckboxChange(manufacturer)}
                      />
                      {manufacturer} ({getProductCount(manufacturer)})
                    </label>
                  </li>
                ))}
              </ul>
            </Accordion>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManufacturerFilter;
