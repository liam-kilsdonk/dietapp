import axios from 'axios';
import React from "react";

export default async function handler(req, res) {
  const { query } = req.query;

  try {
    const response = await axios.get('https://api.nal.usda.gov/fdc/v1/foods/search', {
      params: {
        query,
        api_key: 'E1MXCfURKsg8CcvqjUB4WvnuY7P62K8bT8bPXrBN', // Replace with your actual API key
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
