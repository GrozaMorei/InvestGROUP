// Ключ для хранения корзины в localStorage
const BASKET_KEY = 'BASKET';

export default function getBasketProducts() {
	// Получаем корзину из локального хранилища
	const basket = JSON.parse(localStorage.getItem(BASKET_KEY)) || {};

	// Возвращаем только productBarcode
	return Object.keys(basket).map(Number);
}
