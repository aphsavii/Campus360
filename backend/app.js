// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connection = require('./db');
const College = require('./collegeData')

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Search endpoint to get suggestions
app.get('/api/search', async (req, res) => {
  try {
    const searchTerm = req.query.term || ''; // Set an empty string if searchTerm is not provided
    const regex = new RegExp(searchTerm, 'i'); // Case-insensitive search

    const colleges =await College.where('clgName').regex(regex).limit(10);
    console.log(colleges);
    res.json(colleges);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
