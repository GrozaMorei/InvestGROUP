import Link from 'next/link';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">

        {/* Блок логотипа и описания компании (1 Колонна) */}
        <div className="footer__company">
          <div className="footer__logo">
            <img src="/icons/logo-white.svg" alt="Логотип компании Султан" />
          </div>
          <button className="footer__price-button --not-active">
            <span className="footer__price">Прайс-лист</span>
            <img src="/icons/download.svg" className="footer__download"></img>
          </button>
          <p className="footer__description">
            Компания «Султан» — снабжаем розничные магазины товарами под ключ в Кокчетаве и Акмолинской области.
          </p>
          <span className="footer__appeal">Подпишись на скидки и акции</span>
          <form className="footer__subscribe">
            <input
              type="email"
              className="footer__subscribe-input"
              placeholder="Введите ваш E-mail"
            />
            <button type="submit" className="footer__subscribe-button">
              &gt;
            </button>
          </form>
        </div>

        {/* Блок меню сайта (2 Колонна) */}
        <div className="footer__menu">
          <h4 className="footer__title">Меню сайта:</h4>
          <ul className="footer__list">
            <li className="footer__item">
              <Link href="#" className="footer__link">
                О компании
              </Link>
            </li>
            <li className="footer__item">
              <Link href="#" className="footer__link">
                Доставка и оплата
              </Link>
            </li>
            <li className="footer__item">
              <Link href="#" className="footer__link">
                Возврат
              </Link>
            </li>
            <li className="footer__item">
              <Link href="#" className="footer__link">
                Контакты
              </Link>
            </li>
          </ul>
        </div>

        {/* Блок категории товаров (3 Колонна) */}
        <div className="footer__categories">
          <h4 className="footer__title">Категории:</h4>
          <ul className="footer__list">
            <li className="footer__item">
              <Link href="/household-chemials" className="footer__link">
                Бытовая химия
              </Link>
            </li>
            <li className="footer__item">
              <Link href="/cosmetics-and-hygiene" className="footer__link">
                Косметика и гигиена
              </Link>
            </li>
            <li className="footer__item">
              <Link href="/household-goods" className="footer__link">
                Товары для дома
              </Link>
            </li>
            <li className="footer__item">
              <Link href="/products-for-children-and-mothers" className="footer__link">
                Товары для детей и мам
              </Link>
            </li>
            <li className="footer__item">
              <Link href="/tableware" className="footer__link">
                Посуда
              </Link>
            </li>
          </ul>
        </div>

        {/* Блок скачивания прайс-листа и мессенджеров (4 Колонна) */}
        <div className="footer__downloads">
          <h4 className="footer__title --active">Скачать прайс-лист:</h4>
          <button className="footer__price-button --active">
            <span className="footer__price">Прайс-лист</span>
            <img src="/icons/download.svg" className="footer__download"></img>
          </button>
          <p className="footer__text">Связь в мессенджерах:</p>
          <div className="footer__messengers">
            <Link
              href="https://web.whatsapp.com/"
              target="_blank"
              className="footer__messenger--whatsapp"
            >
              <img src="/icons/wotsap.svg"></img>
            </Link>
            <Link
              href="https://t.me/Angelochek_FA"
              target="_blank"
              className="footer__messenger--telegram"
            >
              <img src="/icons/telegram.svg"></img>
            </Link>
          </div>
        </div>

        {/* Блок контактной информации (5 Колонна) */}
        <div className="footer__contacts">
          <h4 className="footer__title">Контакты:</h4>
          <div className="footer__contact">
            <a className="footer__phone" href="tel:+77774900091">
              +7 (777) 490-00-91
            </a>
            <p className="footer__time">Время работы: 9:00-20:00</p>
            <Link href="#" className="footer__callback">
              Заказать звонок
            </Link>
          </div>
          <div className="footer__adres">
            <a href="mailto:opt.sultan@mail.ru" className="footer__email">
              opt.sultan@mail.ru
            </a>
            <span className="footer__email-text">На связи в любое время</span>
          </div>
          <div className="footer__payments">
            <img src="/icons/visa.svg" alt="Visa"></img>
            <img src="/icons/mastercard.svg" alt="Mastercard"></img>
          </div>

        </div>
      </div>
    </footer>
  );
}
