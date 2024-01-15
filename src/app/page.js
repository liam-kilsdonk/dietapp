"use client"

import React, { useState } from 'react';
import styles from './page.module.css'
import Navigator from './navigator'
import Search from './search';

export default function Home() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    // Update the state with the search results
    setSearchResults(results);
  };

  return (
    <main className={styles.main}>
      <Navigator />
      <Search onSearch={handleSearch} />

      {/* Display the search results */}
      <ul>
        {searchResults.map((food) => (
          <li key={food.fdcId}>{food.description}</li>
        ))}
      </ul>
    </main>
  )
}
