import '../../styles/components/CategoryCard.css';

const CategoryCard = ({ category }) => {
  const handleMoveToCategory = () => {
    // Логика добавления товара в корзину
    console.log(`Перешёл в категорию: ${category.title}`);
  };

  return (
    <div className="category-card">
      <img
        src={category.image}
        alt={category.title}
        className="category-image"
        onClick={handleMoveToCategory}
      />
      <ul className="category-info">
        <li>
          <p className="category-title">{category.title}</p>
        </li>
      </ul>
    </div>
  );
};

export default CategoryCard;
