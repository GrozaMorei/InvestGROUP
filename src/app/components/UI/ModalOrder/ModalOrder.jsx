import { useState, useEffect } from "react";
import "./ModalOrder.scss";

export const Modal = ({ isVisible, onClose }) => {
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

  return (
    <div className='modalOverlay'>
      <div className='modalContent modalOrder'>
        <img className='modalOrder-doneBtn' src="/icons/done.svg" alt="Значок окей"/>
        <h2 className='modalOrder-title'>Спасибо за заказ</h2>
        <p className='modalOrder-text'>Наш менеджер свяжется с вами в близжайшее время</p>
        <a className='modalOrder-closeBtn' onClick={onClose} href="/"><img src="/icons/close.svg" alt="Значок закрытия"/></a>
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