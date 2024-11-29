'use client';

// Import components
import Contacts from './components/Contacts/Contacts.jsx';
import Brands from './components/Brands/Brands.jsx';
import Offers from './components/Offers/Offers.jsx';
import ProductCategories from './components/ProductCategories/ProductCategories.jsx'
import PromotionalProducts from './components/PromotionalProducts/PromotionalProducts.jsx'
import Baner from './components/Baner/Baner.jsx'

function Page() {
  return (
    <>
      <Baner />
      <PromotionalProducts />
      <ProductCategories />
      <Offers />
      <Brands />
      <Contacts />
    </>
  );
}

export default Page;
