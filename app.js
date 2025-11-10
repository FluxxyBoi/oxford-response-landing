const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for team page
app.get('/team', (req, res) => {
    res.sendFile(path.join(__dirname, 'team.html'));
});

// Route for privacy page
app.get('/privacy', (req, res) => {
    res.sendFile(path.join(__dirname, 'privacy.html'));
});

// Route for terms page
app.get('/terms', (req, res) => {
    res.sendFile(path.join(__dirname, 'terms.html'));
});

// Route for cookies page
app.get('/cookies', (req, res) => {
    res.sendFile(path.join(__dirname, 'cookies.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Oxford Response server is running on http://localhost:${PORT}`);
});
