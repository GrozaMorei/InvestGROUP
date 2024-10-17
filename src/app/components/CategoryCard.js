const CategoryCard = ({ title, image }) => {
    return (
        <div className="category-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <style jsx>{`
                .category-card {
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    padding: 16px;
                    text-align: center;
                    margin: 8px;
                    flex: 1 1 calc(20% - 16px);
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }
                .category-card img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 4px;
                }
            `}</style>
        </div>
    );
};

export default CategoryCard;    