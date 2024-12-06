import Undefine from '../components/UI/Undefine/Undefine';

export default async function Category({ params }) {
  const { category } = await params;
  const categories = ["household-chemicals", "cosmetics-and-hygiene", "household-goods", "products-for-children-and-mothers", "tableware"];
  const isCategoryValid = categories.includes(category);

  if (!isCategoryValid) {
    return (
      <Undefine message={ "категория не найдена" } />
    )
  }

  return (
    <>
      <Undefine message={ "страница еще не готова" } />
    </>
  )
}
