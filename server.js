const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'src/public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/public/index.html'));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'src/views/error.html'));
});

app.listen(PORT, () => console.log(`🌤️ Server running on http://localhost:${PORT}`));
 
