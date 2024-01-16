// FoodDetails.js

import React from 'react';

const FoodDetails = ({ food }) => {
  return (
    <div>
      <h2>Food Details</h2>
      <p>Description: {food.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default FoodDetails;
