import products from '@/data/products';
import ProductInfo from '@/app/components/ProductInfo/ProductInfo';
import SimilarProducts from '@/app/components/SimilarProducts/SimilarProducts';
import ProductUndifine from '@/app/components/ProductUndefine/ProductUndefine';
import BreadCrumbs from '@/app/components/breadCrumbs/breadCrumbs';

export default async function ProductPage({ params }) {
  const { id } = await params;
  const currentProduct = products[id];

  if (!currentProduct) {
    return (
      <ProductUndifine />
    );
  }

  return (
    <>
      <BreadCrumbs/>
      <ProductInfo currentProduct={ currentProduct } />
      <SimilarProducts currentProduct={ currentProduct } />
    </>
  );
};

