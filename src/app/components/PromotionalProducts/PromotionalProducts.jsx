import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PromotionalProducts.scss';

import ProductCard from '../ProductCard/ProductCard';
import products from '../../../data/products.json';

const PromotionalProducts = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="promo-products">
      <div className="container">
        <h2 className="promo-products__title">
          <span>АКЦИОННЫЕ</span> ТОВАРЫ
        </h2>

        <ul className="promo-products__slider">
          <Slider {...sliderSettings}>
            {products
              .slice(0, 4)
              .filter((product) => product.status === 'popular')
              .map((product) => (
                <li key={product.id}>
                  <ProductCard product={product} />
                </li>
              ))}
          </Slider>
        </ul>

        <ul className="promo-products__list">
          {products
            .filter((product) => product.status === 'popular')
            .slice(0, 8)
            .map((product) => (
              <li key={product.id} className="promo-products__item">
                <ProductCard product={product} />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default PromotionalProducts;
