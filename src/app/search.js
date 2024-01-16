// Search.js
import React, { useState } from 'react';

const FoodSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.nal.usda.gov/fdc/v1/foods/search?query=${searchTerm}&api_key=E1MXCfURKsg8CcvqjUB4WvnuY7P62K8bT8bPXrBN`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      console.log(data.foods);

      // Pass the search results to the onSearch callback
      onSearch(data.foods);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for food..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default FoodSearch;
