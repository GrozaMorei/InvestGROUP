// Ключ для хранения корзины в localStorage
const BASKET_KEY = 'BASKET';

export default function removeFromBasket(productBarcode, delMode = false ) {
	// Получаем текущую корзину
  const basket = JSON.parse(localStorage.getItem(BASKET_KEY)) || {};

  // Если включён режим полного удаления, сразу удаляем товар
  if (delMode) {
    delete basket[productBarcode];
  } else {
    // Уменьшаем количество, если товар есть в корзине
    if (basket[productBarcode] !== undefined) { // Проверяем, существует ли товар
      basket[productBarcode] -= 1;

      // Если количество стало 0 или меньше, удаляем товар
      if (basket[productBarcode] <= 0) {
        delete basket[productBarcode];
      }
    }
  }

  // Сохраняем обновлённую корзину
  localStorage.setItem(BASKET_KEY, JSON.stringify(basket));
}
