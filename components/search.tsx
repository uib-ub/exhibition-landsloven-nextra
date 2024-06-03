// components/SearchComponent.js

import { useState } from 'react';

const SearchComponent = ({ items }) => {
  // const [query, setQuery] = useState('');
  // const [filteredItems, setFilteredItems] = useState(items);

  // const handleSearch = (event) => {
  //   const value = event.target.value;
  //   setQuery(value);
  //   setFilteredItems(
  //     items.filter(item =>
  //       item.toLowerCase().includes(value.toLowerCase())
  //     )
  //   );
  // };

  return (
      <div>
    <form className="w-full flex gap-2">
      input className="flex-grow border border-neutral-400 dark:border-white rounded p-3" 
       /
        <button className= "bg-green-700 text-white font-bold border-white rounded py-3 px-5"
        type="submit" 
        id="search-button">Søk</button>
    </form>
    </div>

  );
};

export default SearchComponent;