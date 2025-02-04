'use client';

import { useState, useEffect } from 'react';
import { useModal } from '../components/UI/ModalOrder/ModalOrder';
import Button from '../components/UI/Button/Button';
import getBasketProducts from '@/utils/readProducts';
import getCountProduct from '@/utils/getCountProduct';
import removeFromBasket from '@/utils/deleteProduct';
import products from '@/data/products';
import './page.scss';

export default function Page() {
  // Получаем массив баркодов из корзины
  const [basketBarcodes, setBasketBarcodes] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [basketProducts, setBasketProducts] = useState([]);
  useEffect(() => {
    setBasketBarcodes(getBasketProducts());
    // Фильтруем товары по баркодам
    setBasketProducts(products.filter(product => getBasketProducts().includes(product.barcode)));
  }, []);

  useEffect(() => {
    // Загружаем общую цену
    setTotalPrice(calculatePrice(basketProducts));
  }, [basketProducts]);

  // Валидация текста на превышение длины строки
  function trancateText(text, maxLenght) {
    if (text.length > maxLenght) {
      return text.slice(0, maxLenght) + "...";
    }
    return text;
  };

  // Сумма товаров
  function calculatePrice(basketProducts) {
    return basketProducts.reduce((total, product) => {
      const productCount = getCountProduct(product.barcode);
      const productTotal = productCount * product.price;
      return total + productTotal;
    }, 0);
  };

  // Модальное окно
  const { openModal, ModalWrapper } = useModal();

  // === ВАЛИДАЦИЯ ИНПУТОВ ФОРМЫ ===
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    let isValid = true;

    // Валидация имени
    const nameIsValid = /^[A-Za-zА-Яа-яЁё ]+$/.test(name);
    const nameInput = document.getElementById('name');
    if (!nameIsValid) {
      isValid = false;
      nameInput.classList.add('input-error');
      nameInput.placeholder = '*Без цифр и спец.символов';
      nameInput.value = '';
    } else {
      nameInput.classList.remove('input-error');
    }

    // Валидация телефона
    const phoneIsValid = /^\+?\d{7,13}$/.test(phone);
    const phoneInput = document.getElementById('phone');
    if (!phoneIsValid) {
      isValid = false;
      phoneInput.classList.add('input-error');
      phoneInput.placeholder = '*Без пробелов';
      phoneInput.value = '';
    } else {
      phoneInput.classList.remove('input-error');
    }

    // Валидация почты
    const emailIsValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const emailInput = document.getElementById('email');
    if (!emailIsValid) {
      isValid = false;
      emailInput.classList.add('input-error');
      emailInput.value = '';
    } else {
      emailInput.classList.remove('input-error');
    }

    if (isValid) {
      nameInput.value = '';
      phoneInput.value = '';
      emailInput.value = '';
      setName('');
      setPhone('');
      setEmail('');
      // Очищаем корзину
      basketBarcodes.forEach((barcode) => {
        removeFromBasket(barcode, true);
      });
      openModal();
    }
  }
  // ==============================

  return (
    <section className="order">
      <div className="container">
        <ModalWrapper />
        <form className="order-form" onSubmit={handleSubmit}>
          {/* Блок контактных данных */}
          <fieldset className="order-form__block contact-details">
            <legend className="order-form__title">Контактные данные</legend>
        
            <div className="order-form__field">
              <label htmlFor="name" className="order-form__label">Имя*</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="order-form__input" 
                placeholder="Введите ваше имя" 
                maxLength={35}
                onChange={(e) => setName(e.target.value)}
                required/>
            </div>

            <div className="order-form__field">
              <label htmlFor="phone" className="order-form__label">Телефон*</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                className="order-form__input" 
                placeholder="Введите ваш телефон" 
                onChange={(e) => setPhone(e.target.value)}
                required/>
            </div>

            <div className="order-form__field">
              <label htmlFor="email" className="order-form__label">Почта*</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="order-form__input" 
                placeholder="Введите вашу почту" 
                onChange={(e) => setEmail(e.target.value)}
                required/>
            </div>

            <div className="order-form__field">
              <label htmlFor="organization" className="order-form__label">Название организации</label>
              <input type="text" id="organization" name="organization" className="order-form__input" placeholder="Введите название организации"/>
            </div>
          </fieldset>

          {/* Блок адреса доставки */}
          <fieldset className="order-form__block delivery-address">
            <legend className="order-form__title">Адрес доставки</legend>

            <div className="order-form__field">
              <label htmlFor="city" className="order-form__label">Город</label>
              <input type="text" id="city" name="city" className="order-form__input" placeholder="Введите ваш город" required/>
            </div>

            <div className="order-form__field">
              <label htmlFor="address" className="order-form__label">Адрес</label>
              <input type="text" id="address" name="address" className="order-form__input" placeholder="Введите адрес доставки" required/>
            </div>
          </fieldset>

          {/* Блок комментария */}
          <fieldset className="order-form__block additional-info">
            <legend className="order-form__title">Дополнительно</legend>

            <div className="order-form__field">
              <label htmlFor="comment" className="order-form__label">Комментарий</label>
              <textarea id="comment" name="comment" className="order-form__textarea" placeholder="Введите комментарий" maxLength={400}></textarea>
            </div>
          </fieldset>

          {/* Блок с информацией */}
          <ul className="order-form__info">
            <li className="order-form__info-block">
              <div className="order-form__info-top">
                <div className="order-form__info-img">
                  <img src="/icons/pay.svg" alt="Значок кошелька"/>
                </div>
                <h3 className="order-form__info-title">Оплата</h3>
              </div>
              <span className="order-form__info-text">Принимаем оплату наличными, по карте и через расчетный счет.</span>
            </li>
            <li className="order-form__info-block">
              <div className="order-form__info-top">
                <div className="order-form__info-img">
                  <img src="/icons/delivery.svg" alt="Значок доставки"/>
                </div>
                <h3 className="order-form__info-title">Доставка</h3>
              </div>
              <span className="order-form__info-text">Бесплатная доставка от <b>10 000</b> ₸ по области. Наша доставка работает ежедневно.</span>
            </li>
            <li className="order-form__info-block">
              <div className="order-form__info-top">
                <div className="order-form__info-img">
                  <img src="/icons/question.svg" alt="Значок вопроса"/>
                </div>
                <h3 className="order-form__info-title">Возникли вопросы?</h3>
              </div>
              <span className="order-form__info-text">Звоните: <b>+7 777 490 00 91</b> <br/> Менеджер Вам ответит на все вопросы.</span>
            </li>
          </ul>
        </form>

        <div className="order-basket">
          <h3 className="order-basket__title">Ваш заказ</h3>
          <ul className="order-basket__product">

            {basketProducts.map(product => (
              <li key={product.id} className="order-basket__product-item">
                <div className="order-basket__product-inner">
                  <div className="order-basket__product-img">
                    <img src={product.image} />
                  </div>
                  <div className="order-basket__product-info">
                    <div className="order-basket__product-type">
                      <img src={product.image_type} alt="Иконка типа" />
                      <span>{product.weight}</span>
                    </div>
                    <h3 className="order-basket__product-title">{trancateText(product.name, 50)}</h3>
                    <span className="order-basket__product-price">{getCountProduct(product.barcode) * product.price} ₸</span>
                  </div>
                </div>
              </li>
            ))}

          </ul>
          <div className="order-basket__info">
            <h4 className="order-basket__info-title">Итого</h4>
            <span className="order-basket__info-price">{totalPrice.toFixed(2)} ₸</span>
          </div>
          <div className="order-basket__button">
            <Button className='order-basket__button-edit' href='/basket'>
              <span>Редактировать заказ</span>
              <img src="/icons/pencel.svg" alt="Значок редактирования" />
            </Button>
            <Button className='order-basket__button-edit--mobile' href='/basket'>
              <img src="/icons/pencel.svg" alt="Значок редактирования" />
            </Button>
            <Button className='order-basket__button-edit' type='submit' onClick={handleSubmit}>
              <span>Оформить</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
