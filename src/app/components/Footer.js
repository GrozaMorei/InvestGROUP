import Link from 'next/link'
import '../../styles/components/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className='container'>
        <ul className='footer-сolumns'>

          <li className='columns'>
            <div className='columns-top'>

              <img src='/icons/logo-w.svg'></img>

              <p className='top-text'>Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и Акмолинской области</p>

            </div>

            <div className='columns-bottom'>
              <p className='bottom-text'>Подпишись на скидки и акции</p>
              <div className='input-inner'>
                <input className='input' placeholder='Введите ваш E-mail'></input>
                <button className='button'><span>&gt;</span></button>
              </div>
            </div>
          </li>

          <li className='columns'>
            <h4 className='columns-title'>Меню сайта:</h4>

            <ul className='columns-list'>
              <li className='columns-item'>
                <Link href="/">О компании</Link>
              </li>
              <li className='columns-item'>
                <Link href="/">Доставка и оплата</Link>
              </li>
              <li className='columns-item'>
                <Link href="/">Возврат</Link>
              </li>
              <li className='columns-item'>
                <Link href="/">Категории</Link>
              </li>
            </ul>

          </li>

          <li className='columns'>
            <h4 className='columns-title'>Категории:</h4>

            <ul className='columns-list'>
              <li className='columns-item'>
                <Link href="/">Бытовая химия</Link>
              </li>
              <li className='columns-item'>
                <Link href="/">Косметика и гигиена</Link>
              </li>
              <li className='columns-item'>
                <Link href="/">Товары для дома</Link>
              </li>
              <li className='columns-item'>
                <Link href="/">Товары для детей и мам</Link>
              </li>
              <li className='columns-item'>
                <Link href="/">Посуда</Link>
              </li>
            </ul>

          </li>

          <li className='columns'>
            <h4 className='columns-title'>Скачать прайс-лист:</h4>
            <button className='button-price'>
              <p>Прайс-лист</p>
              <img src='/icons/download.svg'></img>
            </button>
            <p className='colums-item'>Связь в мессенджерах:</p>
            <div className='img-inner'>
              <a href='/'>
                <img src='/icons/wotsap.svg'></img>
              </a>
              <a href='/'>
                <img src='/icons/telegram.svg'></img>
              </a>
            </div>
          </li>

          <li className='columns'>
            <h4 className='columns-title'>Контакты:</h4>
          </li>

        </ul>
      </div>
    </footer>
  );
}
