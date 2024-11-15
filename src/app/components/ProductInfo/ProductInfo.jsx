'use client'

import { useState, useRef } from 'react';
import { priceList } from '@/utils/priceList';
import './ProductInfo.scss';

export default function ProductInfo({ currentProduct }) {
	const cp = currentProduct;

	let count = cp.count;
	const [thisCount, setThisCount] = useState(0);
	// Аккардион	
	const [isOpen, setIsOpen] = useState(false);
	const contentRef = useRef(null)

	// Уменьшение количества товара
	const decreaseCount = () => {
		if (thisCount > 0) {
			setThisCount(thisCount - 1);
		}
	}

	// Увеличение количества товара
	const increaseCount = () => {
		if (thisCount < count) {
			setThisCount(thisCount + 1);
		}
	}

	// Добавление в корзину
	const addToCart = () => {
		console.log(`В корзину было добавлено ${thisCount} товара "${cp.name}"`);
		cp.count -= thisCount;
		setThisCount(0);
	}

	// Копирование ссылки
	const copyLink = () => {
		const currentUrl = window.location.href;  // Получаем текущий URL страницы
    navigator.clipboard.writeText(currentUrl)  // Копируем URL в буфер обмена
		alert('Ссылка была успешна скопирована');
	}

	// Прайс лист
	const showPriceList = () => {
		priceList('Прайс-лист');
	}

	// Аккардеон 
	const accordion = () => {
		setIsOpen(!isOpen);
	}


  return (
    <section className='product-info'>
			<div className="container product-info__container">

				<div className="product-info__left">
					<img src={ cp.image } alt="Изображение товара" className="product-info--images" />
				</div>

				<div className="product-info__right">

					<span className={ `product-info__existence ${
						cp.count > 0 ? 'product-info__existence--on' : 'product-info__existence--off'
					}` }>
						{ cp.count > 0 ? 'В наличии' : 'Отсутствует' }
					</span>

					<h2 className='product-info__title'>
						<b>{ cp.brand }</b> { cp.name }
					</h2>

					<div className="product-info__type">
						<img src={ cp.type } alt="Тип товара" className="product-info__type--img" />
						<span className="product-info__type--text">{ cp.weight }</span>
					</div>

					<div className="product-info__buy-list">
						<span className="product-info__price">{ cp.price } ₸</span>
						<div className="product-info__price-inner">
							<button 
						  	className="product-info__button product-info__button--decrease"
								onClick={ decreaseCount }
							>
								-
							</button>
							<span className="product-info__count">{ thisCount }</span>
							<button
          			className="product-info__button product-info__button--increase"
          			onClick={ increaseCount }
        			>
          			+
        			</button>
						</div>

						<div className="product-info__button-inner">
							<button 
								className="product-info__add-to-cart"
								onClick={ addToCart }
							>
								В корзину
								<img src="/icons/basket-white.svg" alt="Иконка корзины" />
							</button>
							<button
								className="product-info__share active"
								onClick={ copyLink }
							>
								<img src="/icons/link.svg" alt="Иконка ссылки" className="product-info__share--img" />
							</button>
						</div>

					</div>

					<div className="product-info__price-list">
						<button
							className="product-info__share"
							onClick={ copyLink }
						>
							<img src="/icons/link.svg" alt="Иконка ссылки" className="product-info__share--img" />
						</button>

						<div className="product-info__price-list--info">
							<p>
								При покупке от <span>10 000 ₸</span> бесплатная доставка по Кокчетаву и области
							</p>
						</div>

						<button 
							className="product-info__price-download"
							onClick={ showPriceList }
						>
							Прайс-лист
							<img src="/icons/download-gray.svg" alt="Иконка загрузки" className="product-info__price-download--img" />
						</button>
					</div>

					<ul className="product-info__info-block">
						<li className="product-info__item">
							Производитель: <b>{cp.manufacturer}</b>
						</li>
						<li className="product-info__item">
							Бренд: <b>{cp.brand}</b>
						</li>
						<li className="product-info__item">
							Артикул: <b>{cp.article}</b>
						</li>
						<li className="product-info__item">
							Кол-во в коробке: <b>{cp.countItem}</b>
						</li>
						<li className="product-info__item">
							Штрихкод: <b>{cp.barcode}</b>
						</li>
						<li className="product-info__item">
							Размеры коробки<smal>(д*ш*в)</smal>: <b>{cp.size}</b>
						</li>
						<li className="product-info__item">
							Вес коробки: <b>{cp.weight}</b>
						</li>
					</ul>

					<div className="product-info__description">
						<button 
							className="product-info__description--button"
							onClick={ accordion }
						>
							Описание
							<img 
								src="/icons/arrow-gray.svg" 
								alt="Иконка стрелочки" 
								className="product-info__description--img"
								style={{ transform: isOpen ? 'rotate(0)' : 'rotate(-90deg)'}} 
							/>
						</button>
						<p 
							// Исправлю к 22.11 
							ref={ contentRef }
							className={`product-info__description--text ${isOpen ? 'open' : ''}`}
							style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0'}}
						>
							{ cp.description }
						</p>
					</div>

				</div>

			</div>
    </section>
  );
}
