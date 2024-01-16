"use client"

//use npm run dev to launch

import React, { useState } from 'react';
import styles from './page.module.css';
import Navigator from './navigator';
import Search from './search';
import FoodDetails from './FoodDetails';
import ComparisonPage from './ComparisonPage';

export default function Home() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);

  const handleSearch = (results) => {
    // Update the state with the search results
    setSearchResults(results);
    // Reset the selectedFood when a new search is performed
    setSelectedFood(null);
  };

  const handleFoodClick = (food) => {
    // Set the selected food item
    setSelectedFood(food);
  };

  return (
    <main className={styles.main}>
      <Navigator />
      <Search onSearch={handleSearch} />

      {/* Display the search results */}
      <ul>
        {searchResults.map((food) => (
          <li key={food.fdcId} onClick={() => handleFoodClick(food)}>
            {/* Display the link at the beginning */}
            <a href={`/food?fdcId=${food.fdcId}`}>
              {/* Display the name of the food after the link */}
              {food.description}
            </a>
          </li>
        ))}
      </ul>

      {/* Conditional rendering based on selectedFood */}
      {selectedFood && (
        <div>
          {/* Display FoodDetails component for the selected food */}
          <FoodDetails food={selectedFood} />

          {/* Display ComparisonPage component */}
          <ComparisonPage />
        </div>
      )}
    </main>
  );
}
