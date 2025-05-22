#!/usr/bin/env node

// setup
// npm ininstall figlet express

// start node server
// node server.js

// run example in web browser
// http://localhost:3000/figlet?text=Your%20Message

// server.js
const express = require('express');
const figlet = require('figlet');

const app = express();
const port = process.env.PORT || 3000;

// Root route with a simple greeting
app.get('/', (req, res) => {
  res.send('Hello, World from your Node server using an MIT licensed component!');
});

// /figlet route that generates ASCII art using figlet
app.get('/figlet', (req, res) => {
  // Use the 'text' query parameter or default to "Hello!" if not provided
  const text = req.query.text || 'Hello!';
  
  // The figlet API converts text to ASCII art asynchronously
  figlet(text, (err, data) => {
    if (err) {
      console.error('Error generating ASCII art:', err);
      return res.status(500).send('An error occurred while generating the ASCII art.');
    }
    // Wrap the ASCII art in <pre> tags to preserve formatting in the browser
    res.send(`<pre>${data}</pre>`);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
