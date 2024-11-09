import Link from 'next/link';

import './CategoryCard.scss';

const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/\s+/g, '-') 
    .trim()       
};

const CategoryCard = ({ category }) => {
  const handleMoveToCategory = () => {
    console.log('Сгенерированный slug:', slug);
    console.log(`Перешёл в категорию: ${category.title}`);
  };

  const slug = generateSlug(category.title);

  return (
    <div className="category-card">
      <Link href={`/categories/${slug}`} passHref className='category-card__link'>
        <img
          src={category.image}
          alt={category.title}
          className="category-card__image"
          onClick={handleMoveToCategory}
        />
      </Link>
      <span className="category-card__title">{category.title}</span>
    </div>
  );
};

export default CategoryCard;