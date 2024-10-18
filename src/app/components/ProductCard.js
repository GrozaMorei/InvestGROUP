'use client';

import '../../styles/components/ProductCard.css';

const ProductCard = ({ product }) => {
  const handleAddToCart = () => {
    // Логика добавления товара в корзину
    console.log(`Добавлено в корзину: ${product.name}`);
  };

  return (
    <div className="product-card">
      <div className="popular-tag">Популярное</div>
      <div className="container-image">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <ul className="product-info">
        <li>
          <p className="product-weight">
            <img src={product.type} className="product-type" /> {product.weight}{' '}
          </p>
        </li>
        <li>
          <p className="product-description">
            <b>{product.brand}</b> {product.description}
          </p>
        </li>
        <li className="product-inform">
          <p className="product-barcode">
            <span className="secText">Штрихкод: </span>
            {product.barcode}
          </p>
          <p className="product-manufacturer">
            <span className="secText">Производитель:</span>{' '}
            {product.manufacturer}
          </p>
          <p className="product-brand">
            <span className="secText">Бренд: </span> {product.brand}
          </p>
        </li>
        <li>
          <p className="product-price">{product.price} ₸</p>
        </li>
        <button onClick={handleAddToCart} className="add-to-cart-button">
          В корзину <img src="/images/Vector.svg" className="icon-sale" />
        </button>
      </ul>
    </div>
  );
};

export default ProductCard;
