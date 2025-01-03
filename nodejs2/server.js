const express = require('express');
const path = require('path');

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, './public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/homefinal.html'));
});

app.get('/scanner', (req, res) => {
  res.sendFile(path.join(__dirname, './public/scanner.html'));
});

// Update this route to correctly serve newpage.html
app.get('/newpage', (req, res) => {
  res.sendFile(path.join(__dirname, './public/newpage.html'));
});

app.get('/home2', (req, res) => {
  res.sendFile(path.join(__dirname, './public/home2.html'));
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
