import { useModal } from '../UI/ModalPrice/ModalPrice';
import Link from 'next/link';
import Button from '../UI/Button/Button';
import './Header.scss';

export default function Header({ toggleMenu, isOpen }) {
	// Модальное окно
	const { openModal, ModalWrapper } = useModal();

	return (
		<header className='header'>
			<ModalWrapper />
			<section className={`header-top ${isOpen ? 'active' : ''}`}>
				<div className="header-top__container container ">
					<ul className='header-top__info'>
						<li className='header-top__info-address'>
							<a href="https://yandex.ru/maps/?text=г.+Ростов-на-дону,+проспект+Соколова,+д.+62" target='_blank'>
								<img src="/icons/geo.svg" alt="Иконка метки" className="header-top__geo" />
								<div className="header-top__geo-inner">
									<h3 className="header-top__title">г. Кокчетав, ул. Ж. Ташенова 129Б</h3>
									<span className='header-top__subtitle'>(рынок восточный)</span>
								</div>
							</a>
						</li>
						<li className='header-top__info-mail'>
							<a href="mailto:opt.sultan@mail.ru" target='_blank'>
								<img src="/icons/mail.svg" alt="Иконка почты" className="header-top__mail" />
								<div className="header-top__mail-inner">
									<h3 className="header-top__title">opt.sultan@mail.ru</h3>
									<span className='header-top__subtitle'>На связи в любое время</span>
								</div>
							</a>
						</li>
						<li className='header-top__info-contact mobile'>
							<img src="/icons/tell.svg" alt="Иконка телефона" className="header-top__tell" />
							<div className="header-top__tell-inner">
								<h3 className="header-top__title">Отдел продаж</h3>
								<span className='header-top__subtitle'>+7 (777) 490-00-91</span>
								<span className='header-top__subtitle'>время работы: 9:00-20:00</span>
							</div>
						</li>
						<li className='header-top__info-tell mobile'>
							<button className='header-top__tell-btn'>
								<img src="/icons/tell-white.svg" alt="Иконка телефона" />
								<span className="header-top__tell-text">Заказать звонок</span>
							</button>
						</li>
					</ul>

					<div className="header-top__menu">
						<h2 className="header-top__menu-title mobile">Меню сайта:</h2>
						<nav className='header-top__menu-nav'>
							<ul className='header-top__menu-list'>
								<li className='header-top__menu-item'>
									<Link className="header-top__link" href="#">О компании</Link>
								</li>
								<li className='header-top__menu-item'>
								  <Link className="header-top__link" href="#">Доставка и оплата</Link>
								</li>
								<li className='header-top__menu-item'>
									<Link className="header-top__link" href="#">Возврат</Link>
								</li>
								<li className='header-top__menu-item'>
									<Link className="header-top__link" href="#">Контакты</Link>
								</li>
							</ul>
						</nav>
						<Button className='header-top__menu-price price mobile' onClick={() => openModal()}>
							<span className='header-top__price-text price-text'>Прайс-лист</span>
							<img src="/icons/download.svg" alt="Иконка загрузки" />
						</Button>
					</div>
				</div>
			</section>

			<section className='header-bottom'>
				<div className="header-bottom__container container">
					<div className="header-bottom__main">
						<button className="header-bottom__main-menu mobile" onClick={ toggleMenu }>
							<img src='/icons/menu.svg' className='header-bottom__burger-line' />
						</button>
						<Link className="header-bottom__main-logo" href="/">
							<img src="/icons/logo-gray.svg" alt="Изображение логотипа" />
						</Link>
						<Button className="header-bottom__main-catalog" href="/#catalog">
							Каталог
							<img src="/icons/catalog-white.svg" alt="Иконка каталога" />
						</Button>
						<div className="header-bottom__main-search">
							<input
								className="header-bottom__search-input"
								type="text"
								placeholder='Поиск...'
							/>
							<Button className="header-bottom__search-button">
								<img src="/icons/search-white.svg" alt="Иконка поиска" />
							</Button>
						</div>
						<div className="header-bottom__main-contact">
							<div className="header-bottom__main-contact__inner">
								<h3 className="header-bottom__contact-title">+7 (777) 490-00-91</h3>
								<span className="header-bottom__contact-subtitle">время работы: 9:00-20:00</span>
								<button className="header-bottom__contact-tell">Заказать звонок</button>
							</div>
							<img src="/images/header/contact.png" alt="Изображение девушки" />
						</div>
						<Button className="header-bottom__main-price price" onClick={() => openModal()}>
							Прайс-лист
							<img src="/icons/download.svg" alt="Иконка скачивания" />
						</Button>
						<Link className="header-bottom__main-basket" href="/basket">
							<div className="header-bottom__main-basket__img">
								<img src="/icons/basket-gray.svg" alt="Иконка корзины" />
							</div>
						</Link>
					</div>
				</div>
			</section>

			<section className='header-mobile'>
				<div className="header-mobile__container">
					<Link className="header-mobile__catalog" href="/#catalog">
						<img src="/icons/catalog-gray.svg" alt="Иконка каталога" />
						Каталог
					</Link>
					<button className="header-mobile__search">
						<img src="/icons/search-gray.svg" alt="Иконка поиска" />
						Поиск
					</button>
				</div>
			</section>
		</header>
	);
}
