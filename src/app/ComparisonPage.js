// ComparisonPage.js

import React, { useState } from 'react';

const ComparisonPage = () => {
  const [selectedFoods, setSelectedFoods] = useState([]);

  const handleAddFood = (food) => {
    // Add the selected food to the comparison list
    setSelectedFoods((prevSelectedFoods) => [...prevSelectedFoods, food]);
  };

  return (
    <div>
      <h2>Comparison Page</h2>
      <p>Select two foods to compare:</p>

      {/* Display selected foods for comparison */}
      <ul>
        {selectedFoods.map((food) => (
          <li key={food.fdcId}>{food.description}</li>
        ))}
      </ul>

      {/* Add a search component to select additional foods */}
      {/* You may reuse the existing Search component or create a new one */}
      {/* Call handleAddFood when a user selects a food from the search results */}
    </div>
  );
};

export default ComparisonPage;
