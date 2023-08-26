//It is responsible for handling incoming HTTP requests, communicating with external APIs (in this case, the iTunes API), and sending back data to the frontend. 

const express = require('express');  // Import the Express.js framework.
const axios = require('axios');  // Import the Axios library for making HTTP requests.
const cors = require('cors');  // Import the CORS middleware for handling cross-origin issues.
const app = express();  // Create an instance of the Express application.
const port = 3001;  // Define the port number the server will listen on.

app.use(express.json());  // Use middleware to parse incoming request bodies as JSON.
app.use(cors());  // Use the CORS middleware to handle cross-origin requests.

app.get('/api/songs', async (req, res) => {
  try {
    const { term } = req.query;  // Extract the search term from the query parameters.
    const response = await axios.get(`https://itunes.apple.com/search?term=${term}&limit=25`);  // Make a request to the iTunes API using Axios.
    res.json(response.data.results);  // Send back the JSON data containing search results.
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });  // Handle errors and send an error response.
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);  // Start the server and log a message once it's up and running.
});













