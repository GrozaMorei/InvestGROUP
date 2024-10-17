"use client"; 

import Image from 'next/image';

import '../../styles/components/ProductCard.css';

const ProductCard = ({ product }) => {
    const handleAddToCart = () => {
      // Логика добавления товара в корзину
      console.log(`Добавлено в корзину: ${product.name}`);
    };
  
    return (
        <div className="product-card">
          <div className="popular-tag">Популярное</div>
          <Image src={product.image} alt={product.name} width={150} height={200} className="product-image" />
          <ul className="product-info">
            <li>
              <h2>{product.name}</h2>
            </li>
            <p className="product-weight">Вес: {product.weight} </p>
            <p className="product-brand">{product.brand} {product.description}</p>
            <p className="product-barcode">Штрихкод: {product.barcode} </p>
            <p className="product-manufacturer">Производитель: {product.manufacturer}</p>
            <p className="product-brand">Бренд: {product.brand} </p>
            <p className="product-price">Цена: {product.price} руб.</p>
            <button onClick={handleAddToCart} className="add-to-cart-button">
              В корзину
            </button>
          </ul>
        </div>
      );
  };
  
  export default ProductCard;