'use client';

import Slider from 'react-slick';
import ProductCard from '../ProductCard/ProductCard';
import products from '@/data/products.json';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../SimilarProducts/SimilarProducts.scss';



export default function SimilarProduct({ currentProduct }) {
  const similarProducts = products.filter(
    (product) =>
      product.category === currentProduct.category &&
      product.id !== currentProduct.id
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <article>
      <section className="similar-products">
        <div className="container">
          <h2 className="similar-products__title">
            <span>ПОХОЖИЕ </span> ТОВАРЫ
          </h2>

          <ul className="similar-products__slider">
            <Slider {...settings}>
              {similarProducts.slice(0, 8).map((product) => (
                <li key={product.id}>
                  <ProductCard product={product} />
                </li>
              ))}
            </Slider>
          </ul>
        </div>
      </section>
    </article>
  );
}
