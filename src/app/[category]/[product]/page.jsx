import products from '@/data/products';
import ProductInfo from '@/app/components/ProductInfo/ProductInfo';
import SimilarProducts from '@/app/components/SimilarProducts/SimilarProducts';
import Undifine from '@/app/components/UI/Undefine/Undefine';
import Crumbs from '@/app/components/Crumbs/Crumbs';

export default async function Product({ params }) {
  const { product } = await params;
  const currentProduct = products.find((item) => item.article == product);

  if (!currentProduct) {
    return (
      <Undifine message={ 'товар не найден' }/>
    );
  }

  return (
    <>
      <Crumbs currentProduct= { currentProduct }/>
      <ProductInfo currentProduct={ currentProduct } />
      <SimilarProducts currentProduct={ currentProduct } />
    </>
  );
};
