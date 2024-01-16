"use client"
// FoodDetailsPage.js

import React, { useState } from 'react';
import Search from '../search'; // Assuming you have a Search component

const FoodDetailsPage = ({ match }) => {
  // Extract the fdcId from the URL parameter
  const { fdcId } = match.params;

  // Simulate fetching the food details based on the fdcId (replace with actual fetching logic)
  const [foodDetails, setFoodDetails] = useState({
    fdcId,
    description: `Food Item ${fdcId}`,
    // Add more details as needed
  });

  const handleSearch = (results) => {
    // Handle the search results as needed
    console.log('Search results:', results);
  };

  return (
    <div>
      {/* Display food details on the left side */}
      <div style={{ float: 'left', width: '50%' }}>
        <h2>Food Details</h2>
        <p>Description: {foodDetails.description}</p>
        {/* Add more details as needed */}
      </div>

      {/* Display search function on the right side */}
      <div style={{ float: 'right', width: '50%' }}>
        <h2>Search</h2>
        <Search onSearch={handleSearch} />
      </div>

      {/* Clear floats */}
      <div style={{ clear: 'both' }}></div>
    </div>
  );
};

export default FoodDetailsPage;
