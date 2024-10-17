"use client"; 

// Импорт стилей
import '../styles/index.css';

// Импорт данных товаров
import categories from '../data/categories';
import products from '../data/products';

// Импорт компонентов
import ProductCard from './components/ProductCard';
import CategoryCard from './components/CategoryCard';

export default function Page() {
  return (
    <article className='products'>

      <section className="promotional-products"> 
        <div className='container'>

          <h2 className='products-title'>
            <span style={{ color: 'yellow' }}>АКЦИОННЫЕ</span>
            <span style={{ color: 'white' }}>ТОВАРЫ</span>
          </h2>

          <ul className="products-list">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ul>

        </div> 
      </section>

      <section className='product-categories'>
        <div className='container'>

          <h2 className='categories-title'>
            <span style={{ color: 'yellow' }}>КАТЕГОРИИ</span>
            <span style={{ color: 'white' }}>ТОВАРОВ</span>
          </h2>

          <p className='categories-description'>10 000+ ходовых позиций по спецмальным ценам</p>

          <ul className='categories-list'>
            // Здесь ты создаешь элементы li - карточки товаров
          </ul>
        </div>
      </section>

    </article>
  );
}