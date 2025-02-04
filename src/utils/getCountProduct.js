// Ключ для хранения корзины в localStorage
const BASKET_KEY = 'BASKET';

export default function getCountProduct(productBarcode) {
  // Получаем текущую корзину
  const basket = JSON.parse(localStorage.getItem(BASKET_KEY)) || {};

  // Возвращаем количество товара или 0, если товара нет в корзине
  return basket[productBarcode] || 0;
}