const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.get('/api/ideas', async (req, res) => {
  try {
    const response = await axios.get('https://suitmedia-backend.suitdev.com/api/ideas');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from API:', error);
    res.status(500).send('Internal Server Error');
  }
});


// Rute untuk menangani root path, menyajikan Suitmedia.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/Suitmedia.html');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
