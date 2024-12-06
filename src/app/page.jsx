'use client';

// Import components
import Contacts from './components/Contacts/Contacts';
import Brands from './components/Brands/Brands';
import Offers from './components/Offers/Offers';
import ProductCategories from './components/ProductCategories/ProductCategories';
import PromotionalProducts from './components/PromotionalProducts/PromotionalProducts';
import Banner from './components/Banner/Banner';

function Page() {
  return (
    <>
      <Banner />
      <PromotionalProducts />
      <ProductCategories />
      <Offers />
      <Brands />
      <Contacts />
    </>
  );
}

export default Page;
