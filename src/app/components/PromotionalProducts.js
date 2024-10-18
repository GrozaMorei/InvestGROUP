import '../../styles/components/PromotionalProducts.css';

import ProductCard from '../components/ProductCard';

import products from '../../data/products.json';

const PromotionalProducts = () => {
  return (
    <section className="promotional-products">
      <div className="container">
        <h2 className="products-title">
          АКЦИОННЫЕ <span style={{ color: 'black' }}> ТОВАРЫ</span>
        </h2>

        <ul className="products-list">
          {products.map((product) => (
            <li key={product.id} className="">
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PromotionalProducts;
