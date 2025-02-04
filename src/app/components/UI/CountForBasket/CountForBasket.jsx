import { useEffect, useState } from 'react';
import getCountProduct from '@/utils/getCountProduct';
import addToBasket from '@/utils/saveProduct';
import removeFromBasket from '@/utils/deleteProduct';
import './CountForBasket.scss';

export default function CountForBasket({ product, setPriceProduct, nullUpdate = () => {}, quantityUpdate = () => {}}) {
	// Состояние для отключение кнопки
	const [isDisabled, setIsDisabled] = useState(false);
	// Получаем количество товара в корзине
	const countProduct = getCountProduct(product.barcode);
	// Состояние для смены количества
	const [thisCount, setThisCount] = useState(countProduct);

	useEffect(() => {
		if (countProduct == 0) {
			setIsDisabled(true);
		}
	})

	// Уменьшение количества товара
	const decreaseCount = () => {
		const newCount = thisCount - 1;
		if (newCount === 0) {
			nullUpdate();
			setIsDisabled(true);
		} else {
			setPriceProduct((product.price * newCount).toFixed(2));
		}
		removeFromBasket(product.barcode);
		setThisCount(newCount);
		quantityUpdate();
	};

	// Увеличение количества товара
	const increaseCount = () => {
		const newCount = thisCount + 1;
		setThisCount(newCount);
		setIsDisabled(false);
		addToBasket(product.barcode);
		setPriceProduct((product.price * newCount).toFixed(2));
		quantityUpdate();
	}

	return (
		<div className='count_for_product__list'>
			<button className='count_for_product__remove' onClick={decreaseCount} disabled={isDisabled}>-</button>
			<p className='count_for_product-text'>{thisCount}</p>
			<button className='count_for_product__add' onClick={increaseCount}>+</button>
		</div>
	)
}
