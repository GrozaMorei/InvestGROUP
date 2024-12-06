import categories from '/src/data/categories.json';
import CategoryCard from '../CategoryCard/CategoryCard.jsx';
import './ProductCategories.scss';

export default function ProductCategories() {
  return (
    <section className="product-categories" id="catalog">
      <div className="container">
        <h2 className="product-categories__title">
          <span>КАТЕГОРИИ </span> ТОВАРОВ
        </h2>

        <span className="product-categories__description">
          10 000+ ходовых позиций по специальным ценам
        </span>

        <ul className="product-categories__list">
          {categories.map((category) => (
            <li key={category.id} className='product-categories__item'>
              <CategoryCard category={ category } />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
