
"use client"; 

import '../styles/pages.css';
import products from '../data/products';
import ProductCard from './components/ProductCard';

export default function Page() {
  return (
    <section className="test"> 
      <div>
      <h1 className="test-title">Страница: Главная</h1><br /><p/>
      

      </div>

      <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}

      <style jsx>{`
        .product-list {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          margin: 20px;
        }
      `}</style>
    </div>

    </section>
  );
}

