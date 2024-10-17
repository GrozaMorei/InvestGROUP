import Image from 'next/image';

import '../../styles/components/CategoryCard.css';

const CategoryCard = ({ title, image }) => {
    return (
        <div className="category-card">
            <Image src={image} alt={title} />
            <p className='category-title'>{title}</p>
        </div>
    );
};

export default CategoryCard;    