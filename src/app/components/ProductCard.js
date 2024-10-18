"use client"; 

import '../../styles/components/ProductCard.css';

const ProductCard = ({ product }) => {
    const handleAddToCart = () => {
      // Логика добавления товара в корзину
      console.log(`Добавлено в корзину: ${product.name}`);
    };
  
    return (
        <div className="product-card">
          <div className="popular-tag">Популярное</div>
          <div className='container-image'>
            <img src={product.image} alt={product.name} className="product-image" />
          </div>
          <ul className="product-info">
            <li><p className="product-weight"><img src={product.type}className="product-type" /> {product.weight} </p></li>
            <li><p className="product-description"><b>{product.brand}</b> {product.description}</p></li>
            <li className='product-inform'>
              <p className="product-barcode">
                <span className='secText'>Штрихкод: </span>{product.barcode}
              </p>
              <p className="product-manufacturer">
                <span className='secText'>Производитель: 
                </span> {product.manufacturer}
              </p>
              <p className="product-brand"><span className='secText'>Бренд: </span> {product.brand}</p>
            </li>
            <li><p className="product-price">{product.price} ₸</p></li>
            <button onClick={handleAddToCart} className="add-to-cart-button">
              В корзину <img src='/images/Vector.svg' className='icon-sale'/>
            </button>
          </ul>
        </div>
      );
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <ul className="product-info">
        <li>
          <h2></h2>
        </li>
        <h2 className="product-name">{product.name}</h2>
        <p className="product-brand">Фирма: {product.brand}</p>
        <p className="product-weight">Вес: {product.weight} </p>
        <p className="product-price">Цена: {product.price} руб.</p>
        <button onClick={handleAddToCart} className="add-to-cart-button">
          В корзину
        </button>
      </ul>

      <style jsx>{`
        .product-card {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          width: 200px; /* Фиксированная ширина */
          height: 300px; /* Фиксированная высота */
          margin: 16px;
          color: white; /* Цвет текста для контраста на фоне изображения */
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* Тень для карточки */
          box-sizing: border-box;
        }
        .product-image {
          width: 100%;
          height: 300px;
          display: block;
        }
        .product-info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.6); /* Полупрозрачный фон для текста */
          padding: 16px;
          text-align: left;
          font-size: 10px;
        }
        .add-to-cart-button {
          background-color: #28a745;
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 4px;
          cursor: pointer;
        }
        .add-to-cart-button:hover {
          background-color: #218838;
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
