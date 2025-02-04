'use client';

import { useState, useEffect } from 'react';
import getBasketProducts from '@/utils/readProducts';
import products from '@/data/products';
import ProductCard from '../components/ProductCard/ProductCard';
import BreadCrumps from '../components/Crumbs/Crumbs';
import Undefine from '../components/UI/Undefine/Undefine';
import Button from '../components/UI/Button/Button';
import getCountProduct from '@/utils/getCountProduct';
import './page.scss';

export default function Basket() {
  // Состояние для хранения массива barcodes, товаров и цены
  const [basketBarcodes, setBasketBarcodes] = useState([]);
  const [basketItems, setBasketItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Функция для обновления корзины
  const updateBasket = () => {
    const barcodes = getBasketProducts(); // Получаем barcodes из localStorage
    setBasketBarcodes(barcodes);
    // Отбираем товары из JSON-файла
    setBasketItems(products.filter((product) => barcodes.includes(product.barcode)));
  };

  // Функция расчета общей стоимости
  const calculateTotalPrice = () => {
    const total = basketItems.reduce((acc, product) => {
      const productCount = getCountProduct(product.barcode);
      return acc + (product.price * productCount);
    }, 0);
    setTotalPrice(total.toFixed(2));
  };

  // Загружаем корзину при первой загрузке компонента
  useEffect(() => {
    calculateTotalPrice();
    updateBasket();
  }, []);

  // Пересчитываем цену при изменение корзины
  useEffect(() => {
    calculateTotalPrice();
  }, [basketItems]);

  return (
    <section className='basket'>
      <BreadCrumps margin={'20px 0 0'}/>

      <div className='container'>
        <h1 className='basket__title'>Корзина</h1>

        {basketItems.length ?
          <>
            <ul className='basket__list'>
              {basketItems.map((product) => (
                <li key={product.id} className='basket__list-item'>
                  <ProductCard
                    key={product.id}
                    product={product}
                    isBasket={1}
                    lineMode={1}
                    onUpdate={() => updateBasket()}
                    quantityUpdate={() => calculateTotalPrice()}
                  />
                </li>
              ))}
            </ul>

            <div  className='basket__order'>
              <Button className='basket__order-btn' href='./order'>Оформить заказ</Button>
              <h3 className='basket__order-price'>{totalPrice} ₸</h3>
            </div>
          </>
        :
          <Undefine message={'Кажется, ваша корзина пуста'} margin='40px 0'/>
        }
      </div>
    </section>
  );
}
