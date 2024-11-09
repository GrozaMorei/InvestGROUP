import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Brands.scss';
import Slider from 'react-slick';

export default function Brands() {
  const brandCount = 10; // Колличество брендов
  const brands = Array.from({ length: brandCount }, (_, index) => index + 1);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 3,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <section className="brands">
      <div className="brands__container container">
        <h2 className="brands__title">
          <span>Лучшие</span> товары
        </h2>

        <span className="brands__description">От ведущих мировых брендов</span>

        <Slider {...settings}>
					{/* Создается brandCount количество брендов*/}
          {brands.map((num) => (
            <div key={num}>
              <div className="brands__item">
                <img
                  src={`/images/brands/brand-${num}.jpg`}
                  alt={`Brand ${num}`}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}