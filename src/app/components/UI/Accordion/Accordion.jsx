import { useState } from 'react';
import './Accordion.scss';

export default function Accordion({ title, children, className, isOpenDefault = false }) {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className='accordion'>
      <details className='accordion__details' onClick={toggleAccordion}>
        <summary className='accordion__summary'>
          <span className={`accordion__title ${ className }`} role='term'>
            { title }
            <img 
              src='/icons/arrow-gray.svg'
              alt='Иконка стерлочки'
              className={`accordion__icon ${isOpen ? 'accordion__icon--rotated' : ''}`} />
          </span>
        </summary>
      </details>

      <div className='accordion__content' role='definition'>
        <div className='accordion__content-body'>
          { children }
        </div>
      </div>
    </div>
  );
}
