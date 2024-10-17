
import '../../styles/components/CategoryCard.css';

const CategoryCard = ({ title, image }) => {
    return (
        <div className="category-card">
            <img src={image} alt={title} className='category-image' />
            <p className='category-title'>{title}</p>
        </div>
    );
};

export default CategoryCard;    