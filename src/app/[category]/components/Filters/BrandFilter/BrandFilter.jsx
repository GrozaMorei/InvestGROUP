import { useState } from 'react';

import Accordion from '@/app/components/UI/Accordion/Accordion';

import products from '@/data/products';
import './BrandFilter.scss';

const brands = Array.from(new Set(products.map((product) => product.brand)));

const BrandFilter = ({
  selectedBrands,
  setSelectedBrands,
  search,
  setSearch,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const filteredBrands = brands.filter((brand) =>
    brand.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = () => {
    console.log(`Searching for: ${search}`);
    // Здесь можно добавить логику для выполнения поиска
  };

  const handleCheckboxChange = (brand) => {
    setSelectedBrands((prev) => {
      const updatedSet = new Set(prev);
      if (updatedSet.has(brand)) {
        updatedSet.delete(brand);
      } else {
        updatedSet.add(brand);
      }
      return updatedSet;
    });
  };

  const brandCounts = brands.reduce((acc, brand) => {
    const count = products.filter((product) => product.brand === brand).length;
    acc[brand] = count;
    return acc;
  }, {});

  const displayedBrands = showAll ? filteredBrands : filteredBrands.slice(0, 4);

  return (
    <div className="brand-filter">
      <div className="container">
        <span className="brand-filter__title">Бренд</span>
        <div className="brand-filter__main-search">
          <input
            className="brand-filter__search"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Поиск..."
          />
          <button className="brand-filter__button" onClick={handleSearch}>
            <img src="/icons/search-white.svg" alt="Иконка поиска" />
          </button>
        </div>
        <ul className="brand-filter__brands">
          {displayedBrands.map((brand) => (
            <li key={brand}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedBrands.has(brand)}
                  onChange={() => handleCheckboxChange(brand)}
                />
                {brand} ({brandCounts[brand]})
              </label>
            </li>
          ))}
        </ul>
        {!showAll && filteredBrands.length > 4 && (
          <div className="brand-filter__brands__acc">
            <Accordion title="Показать все">
              <ul className="brand-filter__brands">
                {filteredBrands.slice(4).map((brand) => (
                  <li key={brand}>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedBrands.has(brand)}
                        onChange={() => handleCheckboxChange(brand)}
                      />
                      {brand} ({brandCounts[brand]})
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

export default BrandFilter;
