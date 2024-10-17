
"use client"; 

import '../styles/pages.css';
import products from '../data/products';
import categories from '../data/categories';
import ProductCard from './components/ProductCard';
import CategoryCard from './components/CategoryCard';

export default function Page() {
  return (
    <div className="test"> 
      <div>
      
      </div>
      <div className='containers'>
      <h1 className="test-title">Страница: Главная</h1><br /><p/>
      <h1>
        <span style={{ color: 'yellow' }}>АКЦИОННЫЕ </span>
        <span style={{ color: 'white' }}>ТОВАРЫ</span>
      </h1>
      <div className="products-container">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
        <h1>
          <span style={{ color: 'yellow' }}>КАТЕГОРИИ </span>
          <span style={{ color: 'white' }}>ТОВАРОВ</span>
        </h1>
       <div className="categories-container">
         {categories.map((category, index) => (
            <CategoryCard key={index} title={category.title} image={category.image} />
          ))}
       </div>
      </div>
      

       <style jsx>{`
        .containers {
          display: flex;
          flex-direction: column;
        }
        .products-container {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 20px 0;
          gap: 20px;
        }
        .product-card {
          flex: 1 1 calc(5% - 10px); /* 4 карточки в строке с учетом отступов */
          margin: 8px;
        }
        .categories-container {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 20px 0;
          gap: 20px;
        }
        .category-card {
          flex: 1 1 calc(2% - 10px); /* 4 карточки в строке с учетом отступов */
          margin: 8px;
        }
      `}</style>
    </div>

  );
}

