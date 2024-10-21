import '../../styles/components/PromotionalProducts.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

import ProductCard from '../components/ProductCard';

import products from '../../data/products.json';

import Slider from 'react-slick';

import { useEffect, useState } from 'react';

const PromotionalProducts = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1920);

      console.log(`Is mobile: ${window.innerWidth < 1920}`);
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

        {isMobile && (
          <div className='promo-products__slider'>
            <Slider {...sliderSettings}>
                {products.map((product) => (
                <div key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </Slider>
          </div>
          
        )}
        {!isMobile && (
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
