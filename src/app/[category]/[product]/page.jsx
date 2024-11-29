import products from '@/data/products';
import ProductInfo from '@/app/components/ProductInfo/ProductInfo';
import SimilarProducts from '@/app/components/SimilarProducts/SimilarProducts';
import Undifine from '@/app/components/UI/Undefine/Undefine';
import BreadCrumbs from '@/app/components/BreadCrumbs/BreadCrumbs';

export default async function Product({ params }) {
  const { product } = await params;
  const article = product;
  const currentProduct = products.find((item) => item.article == article);

  if (!currentProduct) {
    return (
      <Undifine message={'товар не найден'}/>
    );
  }

  return (
    <>
      <BreadCrumbs currentProduct= { currentProduct }/>
      <ProductInfo currentProduct={ currentProduct } />
      <SimilarProducts currentProduct={ currentProduct } />
    </>
  );
};

