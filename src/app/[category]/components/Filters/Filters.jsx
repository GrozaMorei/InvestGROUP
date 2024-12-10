import { useEffect, useState } from 'react';

import PriceFilter from './PriceFilter/PriceFilter';
import ManufacturerFilter from './ManufacturerFilter/ManufacturerFilter';
import BrandFilter from './BrandFilter/BrandFilter';
import products from '@/data/products';

import './Filters.scss';

const Filters = () => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedManufacturers, setSelectedManufacturers] = useState(new Set());
  const [search, setSearch] = useState('');
  const [selectedBrands, setSelectedBrands] = useState(new Set());
  const [search1, setSearch1] = useState('');
  const [update, setUpdate] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Устанавливаем начальные значения из localStorage
    const savedMinPrice = localStorage.getItem('minPrice') || '0';
    const savedMaxPrice = localStorage.getItem('maxPrice') || '0';
    const savedSelectedManufacturers =
      JSON.parse(localStorage.getItem('selectedManufacturers')) || [];
    const savedSelectedBrands =
      JSON.parse(localStorage.getItem('selectedBrands')) || [];
    const savedSearch = localStorage.getItem('search') || '';
    const savedSearch1 = localStorage.getItem('search1') || '';

    // Обновляем состояние при загрузке
    setMinPrice(savedMinPrice);
    setMaxPrice(savedMaxPrice);
    setSelectedManufacturers(new Set(savedSelectedManufacturers));
    setSelectedBrands(new Set(savedSelectedBrands));
    setSearch(savedSearch);
    setSearch1(savedSearch1);
  }, []);

  const saveFilters = () => {
    localStorage.setItem('minPrice', minPrice);
    localStorage.setItem('maxPrice', maxPrice);
    localStorage.setItem(
      'selectedManufacturers',
      JSON.stringify(Array.from(selectedManufacturers))
    );
    localStorage.setItem(
      'selectedBrands',
      JSON.stringify(Array.from(selectedBrands))
    );
    localStorage.setItem('search', search);
    localStorage.setItem('search1', search1);
    setUpdate((prev) => !prev); // Переключаем состояние для обновления списка
  };

  const resetFilters = () => {
    localStorage.removeItem('minPrice');
    localStorage.removeItem('maxPrice');
    localStorage.removeItem('selectedManufacturers');
    localStorage.removeItem('selectedBrands');
    localStorage.removeItem('search');
    localStorage.removeItem('search1');

    setMinPrice('');
    setMaxPrice('');
    setSelectedManufacturers(new Set());
    setSelectedBrands(new Set());
    setSearch('');
    setSearch1('');

    setFilteredProducts([]);

    setUpdate((prev) => !prev);
  };

  const showProducts = () => {
    saveFilters();
    // Здесь вы можете добавить логику для отображения продуктов на основе выбранных фильтров

    const filtered = products.filter((product) => {
      const withinPriceRange =
        (minPrice === '' || product.price >= minPrice) &&
        (maxPrice === '' || product.price <= maxPrice);
      const matchesManufacturer =
        selectedManufacturers.size === 0 ||
        selectedManufacturers.has(product.manufacturer);
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const brandCondition =
        selectedBrands.size > 0 ? selectedBrands.has(product.brand) : true;
      const matchesSearch1 = product.name
        .toLowerCase()
        .includes(search1.toLowerCase());
      return (
        withinPriceRange &&
        matchesManufacturer &&
        matchesSearch &&
        brandCondition &&
        matchesSearch1
      );
    });
    setFilteredProducts(filtered);

    console.log('Showing products with filters:', {
      minPrice,
      maxPrice,
      selectedManufacturers: Array.from(selectedManufacturers),
      search,
    });
  };

  return (
    <div className="filters">
      <div className="container">
        <PriceFilter
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />
        <ManufacturerFilter
          search={search}
          setSearch={setSearch}
          selectedManufacturers={selectedManufacturers}
          setSelectedManufacturers={setSelectedManufacturers}
        />
        <BrandFilter
          search={search1}
          setSearch={setSearch1}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
        />
        <div className="filters__buttons">
          <button
            className="filters__buttons__show-products"
            onClick={showProducts}
          >
            <span>Показать</span>
          </button>
          <button
            className="filters__buttons__reset-filters"
            onClick={resetFilters}
          >
            <img src="/icons/delete.svg"></img>
          </button>
        </div>
        <div className="filtered-products">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product">
              <h3>{product.name}</h3>
              <p>Цена: {product.price}</p>
              <p>Производитель: {product.manufacturer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
