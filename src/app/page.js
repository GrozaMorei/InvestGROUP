'use client';

// Import styles
import '../styles/index.css';

// Import components
import ProductCategories from './components/ProductCategories';
import PromotionalProducts from './components/PromotionalProducts';

export default function Page() {
  return (
    <>
      <PromotionalProducts />
      <ProductCategories />
      <Contacts />
    </>
  );
}
