import products from '@/data/products.json';
import CustomSlider from '../UI/CustomSlider/CustomSlider';
import ProductCard from '../ProductCard/ProductCard';
import './PromotionalProducts.scss';

const PromotionalProducts = () => {
  // Фильтруем только популярные товары
  const popularProducts = products.filter((product) => product.status === 'popular');

  // Формируем массив карточек для слайдера
  const itemsCard = popularProducts.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <section className="promo-products">
      <div className="container">
        <h2 className="promo-products__title">
          <span>АКЦИОННЫЕ</span> ТОВАРЫ
        </h2>

        <ul className="promo-products__slider">
          <CustomSlider items={itemsCard} maxItems={6} />
        </ul>

        <ul className="promo-products__list">
          {products
            .filter((product) => product.status === 'popular')
            .slice(0, 8)
            .map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default PromotionalProducts;
