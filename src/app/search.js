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

      // Filter out food items with dataType "Branded"
      const filteredResults = data.foods.filter((food) => food.dataType !== 'Branded');

      // Pass the filtered search results to the onSearch callback
      onSearch(filteredResults);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  
  const handleKeyPress = (event) => {
    // If the pressed key is Enter (key code 13), initiate the search
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Search for food..."
      />
    </div>
  );
};

export default FoodSearch;
