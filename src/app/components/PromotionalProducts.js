import '../../styles/components/PromotionalProducts.css';

import ProductCard from '../components/ProductCard';

import products from '../../data/products.json';

const PromotionalProducts = () => {
  return (
    <section className="promo-products">
      <div className="container">
        <h2 className="promo-products__title">
          <span>АКЦИОННЫЕ</span> ТОВАРЫ
        </h2>

        <ul className="promo-products__list">
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PromotionalProducts;
