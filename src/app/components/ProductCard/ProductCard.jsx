'use client';

import Link from 'next/link';

import './ProductCard.scss';

const ProductCard = ({ product }) => {
  const handleAddToCart = () => {
    // Логика добавления товара в корзину
    console.log(`Добавлено в корзину: ${product.name}`);
  };
  
  return (
    <div className="product-card">
      <div className="product-card__image">
        <Link href={`/product/${product.id}`} passHref>
          <img src={product.image} alt={product.name} />
        </Link>
        <span className="product-card__tag">Популярное</span>
      </div>

      <div className="product-card__info">
        <Link href={`/product/${product.id}`} passHref>
          <div className="product-card__info__top">
           <div className="product-card__type">
              <img src={product.type}></img>
              <span className="product-card__volume">{product.weight}</span>
           </div>
            <h3 className="product-card__title">
              <b>{product.brand} </b>
              {product.name}
            </h3>
          </div>
        </Link>

        <div className="product-card__info__middle">
          <span className="product-card__barcode">
            Штрихкод:
            <b> {product.barcode}</b>
          </span>
          <span className="product-card__manufacturer">
            Производитель:
            <b> {product.manufacturer}</b>
          </span>
          <span className="product-card__brand">
            Бренд:
            <b> {product.brand}</b>
          </span>
        </div>

        <div className="product-card__info__bottom">
          <span className="product-card__price">{product.price} ₸</span>
          <button className="product-card__button">
            <span>В корзину</span>
            <img src="/icons/basket-white.svg"></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;