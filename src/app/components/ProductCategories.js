import '../../styles/components/ProductCategories.css';

import CategoryCard from '../components/CategoryCard';

import categories from '../../data/categories.json';

const ProductCategories = () => {
  return (
    <section className="product-categories">
      <div className="container">
        <h2 className="product-categories__title">
          <span>КАТЕГОРИИ </span> ТОВАРОВ
        </h2>

        <span className="product-categories__description">
          10 000+ ходовых позиций по спецмальным ценам
        </span>

        <ul className="product-categories__list">
          {categories.map((category) => (
            <li key={ category.id }>
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductCategories;
