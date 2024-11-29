import Link from 'next/link';
import './CategoryCard.scss';


const CategoryCard = ({ category }) => {

  return (
    <div className="category-card">
      <Link href={`/${category.name}`} passHref className='category-card__link'>
        <img
          src={category.image}
          alt={category.title}
          className="category-card__image"
        />
      </Link>
      <span className="category-card__title">{category.title}</span>
    </div>
  );
};

export default CategoryCard;