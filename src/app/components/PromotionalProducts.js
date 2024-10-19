import '../../styles/components/PromotionalProducts.css';

import ProductCard from '../components/ProductCard';

import products from '../../data/products.json';

import Slider from 'react-slick';

import { useEffect, useState } from 'react';

const PromotionalProducts = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 740);

      console.log(`Is mobile: ${window.innerWidth < 740}`);
    };

    handleResize(); // Проверяем при первой загрузке
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);

    
  }, []);

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

        {isMobile ? (
          <Slider {...sliderSettings}>
            {products.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </Slider>
        ) : (
          <ul className="promo-products__list">
            {products.map((product) => (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default PromotionalProducts;
