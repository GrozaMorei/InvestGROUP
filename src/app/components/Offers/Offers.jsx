import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from '../UI/Button/Button';
import './Offers.scss';

export default function Offers() {
  const offerCount = 4; // Количество предложений
  const offers = Array.from({ length: offerCount }, (_, index) => index + 1);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="offers">
      <div className="offers__container container">

        <Slider {...settings}>
          {offers.map((num) => (
            <div key={num}>

              <div className="offers__item">
                <span className="offers__date">
                  *Акция действует до 04/09/22
                </span>
                <h2 className="offers__title">
                  <span>Название</span> Акции
                </h2>
                <p className="offers__description">
                  Условия акции в пару строк, Условия акции в пару строк,
                  Условия акции в пару строк
                </p>
                <Button className="offers__button">Принять участие</Button>
                <img className="offers__image" src="/images/offers/offer.jpg" alt="Избражение предложения" />
              </div>

            </div>
          ))}
        </Slider>
				
      </div>
    </section>
  );
}
