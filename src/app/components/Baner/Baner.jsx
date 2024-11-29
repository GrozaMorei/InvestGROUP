import Link from 'next/link'
import './Baner.scss'

export default function Baner() {
	return (
		<section className='baner'>
			<div className='baner__img'>
				<div className="baner__img-blur desktop"></div>
				<div className="container baner__container">
					<div className='baner__main'>
						<h1 className='baner__main-title'>Бытовая химия, косметика и хозтовары</h1>
						<span className='baner__main-text'>Оптом по кокчетаву и области</span>
						<Link href='/#catalog' className='baner__main-link desktop'>В каталог</Link>
atal					</div>
					<div className='baner__info desktop'>
						<div className='baner__info-item'>
							<div className='baner__info-plus'>+</div>
							<span className='baner__info-text'>Только самые выгодные предложения</span>
						</div>
						<div className='baner__info-item'>
							<div className='baner__info-plus'>+</div>
							<span className='baner__info-text'>Бесплатная доставка
								по <b>Кокчетаву от 10 тыс ₸</b></span>
						</div>
					</div>
				</div>
			</div>

			<div className='container baner__container'>
				<div className='baner__info mobile'>
					<div className='baner__info-item'>
						<div className='baner__info-plus'>+</div>
						<span className='baner__info-text'>Только самые выгодные предложения</span>
					</div>
					<div className='baner__info-item'>
						<div className='baner__info-plus'>+</div>
						<span className='baner__info-text'>Бесплатная доставка
							по <b>Кокчетаву от 10 тыс ₸</b></span>
					</div>
				</div>
			</div>
		</section>
	)
}