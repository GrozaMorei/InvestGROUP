import { useState } from 'react';
import './Search.scss';

const SearchInput = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // передаем запрос в родительский компонент
  };

  return (
    <input
      type="text"
      className="brand-filter__search"
      placeholder="Поиск..."
      value={query}
      onChange={handleChange}
    />
  );
};

export default SearchInput;