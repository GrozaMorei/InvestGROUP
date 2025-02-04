import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import './ModalPrice.scss';

export const Modal = ({ isVisible, onClose }) => {
	const [active, setActive] = useState(1);

	// Блокировка скролла при открытом модальном окне
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => { document.body.style.overflow = ''};
  }, [isVisible]);

  if (!isVisible) return null;

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
			onClose();
    }
  }
  // ==============================

	return (
		<div className='modalOverlay'>
			<div className='modalContent modalPrice'>
				<button className='modalPrice-closeBtn' onClick={onClose}><img src="/icons/close.svg" alt="Значок закрытия"/></button>
				
				<div className='modalPrice-top'>
					<h2 className='modalPrice-top__title'>Куда прислать 
					оптовый прайс-лист?</h2>
					<span className='modalPrice-top__text'>Получите оптовый прайс лист с лучшими ценами в Акмолинской области</span>
				</div>

				<form className='modalPrice-form' onSubmit={handleSubmit}>
          {/* Блок контактных данных */}
          <div className='modalPrice-form__field'>
            <label htmlFor='name' className='modalPrice-form__label'>Имя*</label>
            <input 
              type='text' 
              id='name' 
              name='name' 
              className='modalPrice-form__input'
              placeholder='Введите ваше имя' 
              maxLength={35}
              onChange={(e) => setName(e.target.value)}
              required/>
          </div>

          <div className='modalPrice-form__field'>
            <label htmlFor='phone' className='modalPrice-form__label'>Телефон*</label>
            <input 
              type='tel' 
              id='phone' 
              name='phone' 
              className='modalPrice-form__input' 
              placeholder='Введите ваш телефон' 
              onChange={(e) => setPhone(e.target.value)}
              required/>
          </div>

          <div className='modalPrice-form__field'>
            <label htmlFor='email' className='modalPrice-form__label'>Почта*</label>
            <input 
              type='email' 
              id='email'
              name='email' 
              className='modalPrice-form__input' 
              placeholder='Введите вашу почту' 
              onChange={(e) => setEmail(e.target.value)}
              required/>
          </div>

          <div className='modalPrice-form__field'>
            <label htmlFor='organization' className='modalPrice-form__label'>Название организации</label>
            <input type='text' id='organization' name='organization' className='modalPrice-form__input' placeholder='Введите название организации'/>
          </div>
        </form>

				<div className='modalPrice-bottom'>
					<span className='modalPrice-bottom__text'>Куда отправить прайс-лист?</span>
					<div className='modalPrice-bottom__button'>
						<div className='modalPrice-bottom__send'>
							<div className='modalPrice-bottom__slider' 
								style={active === 1 ? {left: '4px'} : {left: '145px'}}></div>
							<button 
								className='modalPrice-bottom__wtsBtn'
								onClick={() => setActive(1)}>
								<span>WhatsApp</span>
								<img src='/icons/wotsap-2.svg' alt='Значок вотсапа' />
							</button>

							<button 
								className='modalPrice-bottom__mailBtn' 
								onClick={() => setActive(2)}>
								<span>E-mail</span>
								<img src='/icons/mail-2.svg' alt='Значок почты' />
							</button>
						</div>

						<Button className='modalPrice-bottom__doneBtn' type='submit' onClick={handleSubmit}>Отправить</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export const useModal = () => {
	const [isVisible, setIsVisible] = useState(false);

	const openModal = () => setIsVisible(true);
	const closeModal = () => setIsVisible(false);

	const ModalWrapper = () => <Modal isVisible={isVisible} onClose={closeModal} />;

	return { openModal, closeModal, ModalWrapper };
};
