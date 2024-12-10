import './CategoryList.scss';

export default function CategoryList({ filters }) {
  return (
    <div>
      <h3>Текущие фильтры</h3>
      <p>Минимальная цена: {filters.minPrice}</p>
      <p>Максимальная цена: {filters.maxPrice}</p>
      <p>Бренды: {filters.selectedBrands.join(', ') || 'Все'}</p>
      <p>Производители: {filters.selectedManufacturers.join(', ') || 'Все'}</p>
    </div>
  );
};
