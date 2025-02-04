'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../UI/Button/Button';
import CountForBasket from '../UI/CountForBasket/CountForBasket';
import translationsStatus from '@/data/translationsStatus';
import addToBasket from '@/utils/saveProduct';
import deleteProduct from '@/utils/deleteProduct';
import getCountProduct from '@/utils/getCountProduct';
import './ProductCard.scss';

export default function ProductCard({ product, lineMode = false, isBasket = 0, onUpdate, quantityUpdate}) {
	// Состояние для обновление кнопки "В корзину"
	const [useBasket, setUseBasket] = useState(false);
	const [priceProduct, setPriceProduct] = useState(product.price);
	useEffect(() => {
    // Проверяем, есть ли товар в корзине
    if (getCountProduct(product.barcode) !== 0) {
      setUseBasket(true);
			setPriceProduct(getCountProduct(product.barcode)*product.price);
    };
  }, [product.barcode]);

	function delOrSetProduct() {
		if (isBasket) {
			deleteProduct(product.barcode, true);
			onUpdate();
		} else {
			setUseBasket(false);
		}
	}

	function validText(text, maxLenght) {
		if (text.length > maxLenght) {
			return text.slice(0, maxLenght) + '...';
		}
		return text;
	}

	function translateStatus(status) {
		return translationsStatus[status];
	}

	// === РАБОТА С ПЕРЕКЛЮЧЕНИЕМ РЕЖИМА КАРТОЧКИ { lineMode } ===
	const [lineModeState, setLineModeState] = useState(false);
	const [width, setWidth] = useState(0);
	const cardRef = useRef(null);

	useEffect(() => {
    setLineModeState(lineMode);
  }, [lineMode]);

	useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width);
    });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

	useEffect(() => {
    if (lineModeState && width < 550) {
      const timeout = setTimeout(() => {
        setLineModeState(false);
      }, 300); // Задержка в 300мс (можно регулировать)

      return () => clearTimeout(timeout);
    }
  }, [width, lineModeState]);

	useEffect(() => {
    if (!lineModeState && width >= 650) {
      const timeout = setTimeout(() => {
        setLineModeState(true);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [width, lineModeState]);
	// ============================================================

	return (
		<div ref={cardRef} className={lineModeState ? 'product-card inline' : 'product-card'}>
			<ul className='product-card__inner'>
				{/* Статус товара */}
				<li className='product-card__status'>
					<span className='product-card__status-text'>
						{translateStatus(product.status)}
					</span>
				</li>

				{/* Изображение товара */}
				<li className={`product-card__image ${width <= 850 ? 'mini' : ''}`}>
					<Link href={`/${product.category}/${product.article}`} passHref>
						<Image src={product.image} alt={product.name} sizes='400px' fill style={{objectFit: 'contain'}}/>
					</Link>
				</li>

				<li className={`product-card__info ${width < 850 ? 'mini' : ''}`}>
					<div className='product-card__info-top'>
						{/* Название */}
						<div className="product-card__type">
            	<img src={product.image_type}></img>
              <span className="product-card__volume">{product.weight}</span>
           	</div>
						<Link href={`/${product.category}/${product.article}`} passHref>
							<h3 className="product-card__title">
              	<b>{product.brand} </b>
              	{validText(product.name, 35)}
            	</h3>
						</Link>

						{/* Описание */}
						{(isBasket || lineModeState) ?
							<span className='product-card__description'>
								{validText(product.description, 100)}
							</span>
						: <></>
						}
					</div>

					{/* Параметры */}
					{!isBasket ?
						<ul className={`product-card__info-middle ${width <= 850 ? 'mini' : ''}`}>
							<li className='product-card__barcode'>
								Штрихкод:
								<b> {product.barcode}</b>
							</li>
							<li className='product-card__manufacturer'>
								Производитель:
            		<b> {validText(product.manufacturer, 45)}</b>
							</li>
							<li className='product-card__brand'>
								Бренд:
            		<b> {product.brand}</b>
							</li>
						</ul>
					: <></>}
					
					{/* Футер карточки */}
					<div className='product-card__info-bottom'>
						{isBasket ?
							<div className='product-card__basket'>
								<div className='product-card__basket-inner'>
									<span className='product-card__price'>{Number(priceProduct).toFixed(2)} ₸</span>
									<CountForBasket product={product} nullUpdate={() => delOrSetProduct()} quantityUpdate={() => quantityUpdate()} setPriceProduct={setPriceProduct}/>
								</div>
								<Button className='product-card__basket-btn' onClick={() => delOrSetProduct()}>
									<img src="/icons/delete.svg" alt="" />
								</Button>
							</div>
						:
							<div className={`product-card__to-basket ${width <= 850 ? 'mini' : ''}`}>
								<span className='product-card__price'>{priceProduct} ₸</span>
								{useBasket ? 
									<CountForBasket product={product} nullUpdate={() => delOrSetProduct()} setPriceProduct={setPriceProduct}/> 
								: 
									<Button className='product-card__button'
										onClick={() => {addToBasket(product.barcode); setUseBasket(true)}}>
										<span>В корзину</span>
										<img src='/icons/basket-white.svg'></img>
									</Button>
								}
							</div>
						}
					</div>
				</li>
			</ul>
		</div>
	)
}
