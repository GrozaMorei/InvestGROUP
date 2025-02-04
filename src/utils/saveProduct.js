// Ключ для хранения корзины в localStorage
const BASKET_KEY = 'BASKET';

export default function addToBasket(productBarcode) {
	// Получаем текущую корзину
	const basket = JSON.parse(localStorage.getItem(BASKET_KEY)) || {};
	
	// Обновляем список товаров
	if (basket[productBarcode]) {
		basket[productBarcode] += 1;
	} else {
		basket[productBarcode] = 1;
	}

	// Сохраняем обновленную корзину
	localStorage.setItem(BASKET_KEY, JSON.stringify(basket))
}
