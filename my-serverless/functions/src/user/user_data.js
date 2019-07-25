const express = require('express');
const cors = require('cors');


const user = express();

// Automatically allow cross-origin requests
user.use(cors({ origin: true }));
// build multiple CRUD interfaces:
user.get('/userData', (req, res) => {
  res.send('Hello GET user data')
});
user.post('/userData', (req, res) => {
  res.send('Hello POST user data')
});
user.put('/userData', (req, res) => {
  res.send('Hello PUT user data')
});
user.patch('/userData', (req, res) => {
  res.send('Hello PATCH user data')
});
user.delete('/userData', (req, res) => {
  res.send('Hello DELETE user data')
});

module.exports = user