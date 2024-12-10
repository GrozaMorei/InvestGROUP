import './CategoryHeader.scss';

export default function CategoryHeader({ title }) {
  return (
    <section className="category-header">
      <h1>{title}</h1>
    </section>
  );
}
