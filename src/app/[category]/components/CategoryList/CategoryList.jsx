import { useEffect, useState } from 'react';
import ProductCard from '@/app/components/ProductCard/ProductCard';
import ScrollToTop from '@/app/components/UI/ScrollToTop/ScrollToTop';
import Undefine from '@/app/components/UI/Undefine/Undefine';
import products from '@/data/products';
import './CategoryList.scss';

export default function CategoryList({ update, category }) { 
  const [minPrice, setMinPrice] = useState(0); 
  const [maxPrice, setMaxPrice] = useState(100000); 
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedManufacturer, setSelectedManufacturer] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedSorted, setSelectedSorted] = useState('');
  const [selectedDisplay, setSelectedDisplay] = useState('');

  useEffect(() => { 
    const storedMinPrice = Number(localStorage.getItem('minPrice')) || 0; 
    const storedMaxPrice = Number(localStorage.getItem('maxPrice')) || 100000; 
    const storedBrands = JSON.parse(localStorage.getItem('selectedBrands')) || [];
    const storedManufacturer = JSON.parse(localStorage.getItem('selectedManufacturer')) || [];
    const storedTags = JSON.parse(localStorage.getItem(`selectedTags_${category}`)) || [];
    const storedSorted = localStorage.getItem('sorted') || '';
    const storedDisplay = localStorage.getItem('display') || 'card';
    
    setMinPrice(storedMinPrice); 
    setMaxPrice(storedMaxPrice); 
    setSelectedBrands(storedBrands); 
    setSelectedManufacturer(storedManufacturer);
    setSelectedTags(storedTags);
    setSelectedSorted(storedSorted);
    setSelectedDisplay(storedDisplay);
  }, [update]); 

  let sortedProducts = products.filter((product) => product.category == category);

  // Сортировка по стоимости
  sortedProducts = sortedProducts.filter((product) => product.price > minPrice);
  sortedProducts = sortedProducts.filter((product) => product.price < maxPrice);

  // Сортировка по бренду
  if (selectedBrands.length > 0) {
    sortedProducts = sortedProducts.filter((product) => selectedBrands.includes(product.brand));
  }

  // Сортировка по производителю
  if (selectedManufacturer.length > 0) {
    sortedProducts = sortedProducts.filter((product) => selectedManufacturer.includes(product.manufacturer));
  }

  // Сортировка по тегам
  if (selectedTags.length > 0) {
    sortedProducts = sortedProducts.filter((product) => {
      return selectedTags.some(tag => product.category_tags.includes(tag));
    });
  }

  // Сортировка по алфавиту
  sortedProducts.sort((start, end) => {
    if (selectedSorted == "name_start") {
      return start.name.localeCompare(end.name); // Сортировка от А до Я
    } else if (selectedSorted == "name_end") {
      return end.name.localeCompare(start.name); // Сортировка от Я до А
    } else if (selectedSorted == "price_start") {
      return start.price - end.price; // Сортировка по возрастанию цены
    } else if (selectedSorted == "price_end") {
      return end.price - start.price; // Сортировка по убыванию цены
    }
    return 0; // Если sortType не указан
  });

  return (
    <div className='product__list'>
      {selectedDisplay === 'card' ? 
        <div className='product__list-card'>
          {sortedProducts.map(product => (
            <ProductCard key={product.id} product={product} lineMode={false}/>
          ))}
        </div>
      :
        <div className='product__list-line'>
          {sortedProducts.map(product => (
            <ProductCard key={product.id} product={product} lineMode={true}/>
          ))}
        </div>
      }

      {sortedProducts.length == 0 ? 
        <Undefine message={'подходящие товары не найдены'} />
      :
        <></>
      }

      <p className='product__list-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.</p>

      <ScrollToTop />
    </div>
  );
};
