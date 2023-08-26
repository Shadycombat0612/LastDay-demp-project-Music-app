//This file contains a function that interacts with the backend API. It's created to encapsulate the logic for making requests to the backend and fetching song data


import axios from 'axios';  // Import Axios library for making HTTP requests.

const baseURL = 'http://localhost:3001/api';  // Define the base URL for the backend API.

// Function to fetch songs from the backend API based on a search term.
export async function getSongs(termName) {
  try {
    const response = await axios.get(`${baseURL}/songs`, {
      params: { term: termName }  // Send the search term as a query parameter.
    });
    return response.data;  // Return the fetched song data.
  } catch (error) {
    console.error(error);
    return [];  // Handle errors and return an empty array.
  }
}
