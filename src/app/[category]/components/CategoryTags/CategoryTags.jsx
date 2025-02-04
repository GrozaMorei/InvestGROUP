import { useState, useEffect } from 'react';
import products from '@/data/products';
import './CategoryTags.scss';

export default function CategoryTags({ toggleUpdate, category }) {
  // Отбираем объекты по категории
  const categoryList = products.filter((product) => product.category === category);

  // Собираем теги у категории
  const tags = categoryList.reduce((acc, product) => {
    product.category_tags.forEach((tag) => {
      if (!acc.includes(tag)) {
        acc.push(tag);
      }
    });
    return acc;
  }, []);

  // Состояние для выбранных тегов
  const [selectedTags, setSelectedTags] = useState([]);

  // Загружаем теги из локального хранилища для конкретной категории при монтировании компонента
  useEffect(() => {
    const savedTags = JSON.parse(localStorage.getItem(`selectedTags_${category}`)) || [];
    setSelectedTags(savedTags);
  }, []);

  // Сохраняем выбранные теги в локальное хранилище, когда они изменяются
  useEffect(() => {
    localStorage.setItem(`selectedTags_${category}`, JSON.stringify(selectedTags));
  }, [selectedTags]);

  // Функция обработки клика по тегу
  const handleTagClick = (tag) => {
    setSelectedTags((prev) => {
      // Если тег уже выбран, убираем его; если нет, добавляем
      if (prev.includes(tag)) {
        return prev.filter((t) => t !== tag);
      } else {
        return [...prev, tag];
      }
    });

    // Вызываем обновление страницы
    toggleUpdate();
  };

  return (
    <div className="tag__list">
      {tags.map((tag) => (
        <button
          className={`tag__list-item ${selectedTags.includes(tag) ? 'selected' : ''}`}
          key={tag}
          onClick={() => handleTagClick(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
