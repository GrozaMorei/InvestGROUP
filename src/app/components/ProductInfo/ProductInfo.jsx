'use client'

import { useState, useRef } from 'react';
import { priceList } from '@/utils/priceList';
import Accordion from '../UI/Accordion/Accordion';
import './ProductInfo.scss';

export default function ProductInfo({ currentProduct }) {
	let count = currentProduct.count;
	const [thisCount, setThisCount] = useState(0);

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
		console.log(`В корзину было добавлено ${thisCount} товара "${currentProduct.name}"`);
		currentProduct.count -= thisCount;
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

  return (
    <section className='product-info'>
			<div className="container product-info__container">

				<div className="product-info__left">
					<img src={ currentProduct.image } alt="Изображение товара" className="product-info--images" />
				</div>

				<div className="product-info__right">

					<span className={ `product-info__existence ${
						currentProduct.count > 0 ? 'product-info__existence--on' : 'product-info__existence--off'
					}` }>
						{ currentProduct.count > 0 ? 'В наличии' : 'Отсутствует' }
					</span>

					<h2 className='product-info__title'>
						<b>{ currentProduct.brand }</b> { currentProduct.name }
					</h2>

					<div className="product-info__type">
						<img src={ currentProduct.image_type } alt="Тип товара" className="product-info__type--img" />
						<span className="product-info__type--text">{ currentProduct.weight }</span>
					</div>

					<div className="product-info__buy-list">
						<span className="product-info__price">{ currentProduct.price } ₸</span>
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
							Производитель: <b>{currentProduct.manufacturer}</b>
						</li>
						<li className="product-info__item">
							Бренд: <b>{currentProduct.brand}</b>
						</li>
						<li className="product-info__item">
							Артикул: <b>{currentProduct.article}</b>
						</li>
						<li className="product-info__item">
							Кол-во в коробке: <b>{currentProduct.countItem}</b>
						</li>
						<li className="product-info__item">
							Штрихкод: <b>{currentProduct.barcode}</b>
						</li>
						<li className="product-info__item">
							Размеры коробки<span>(д*ш*в)</span>: <b>{currentProduct.size}</b>
						</li>
						<li className="product-info__item">
							Вес коробки: <b>{currentProduct.weight}</b>
						</li>
					</ul>

					<div className="product-info__description">
						<Accordion title="Описание" className="product-info__accordion-title">
							<p className="product-info__accordion-text">{ currentProduct.description }</p>
						</Accordion>
					</div>

				</div>

			</div>
    </section>
  );
}
