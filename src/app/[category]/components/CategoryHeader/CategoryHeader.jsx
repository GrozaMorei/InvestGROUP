import './CategoryHeader.scss';

export default function CategoryHeader({ title }) {
  return (
    <section className="category-header">
      <h1 className='category-header__title'>{title}</h1>
    </section>
  );
}
