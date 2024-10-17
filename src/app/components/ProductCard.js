
"use client"; 


const ProductCard = ({ product }) => {
    const handleAddToCart = () => {
      // Логика добавления товара в корзину
      console.log(`Добавлено в корзину: ${product.name}`);
    };
  
    return (
        <div className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-info">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-brand">Фирма: {product.brand}</p>
            <p className="product-weight">Вес: {product.weight} </p>
            <p className="product-price">Цена: {product.price} руб.</p>
            <button onClick={handleAddToCart} className="add-to-cart-button">
              В корзину
            </button>
          </div>
    
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
              gap: 20 px;
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