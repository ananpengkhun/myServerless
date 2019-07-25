const express = require('express');
const cors = require('cors');

const productDetail = express();

// Automatically allow cross-origin requests
productDetail.use(cors({ origin: true }));
// build multiple CRUD interfaces:
productDetail.get('/productDetail', (req, res) => {
  res.send('Hello GET productDetail data')
});
productDetail.post('/productDetail', (req, res) => {
  res.send('Hello POST productDetail data')
});
productDetail.put('/productDetail', (req, res) => {
  res.send('Hello PUT productDetail data')
});
productDetail.patch('/productDetail', (req, res) => {
  res.send('Hello PATCH productDetail data')
});
productDetail.delete('/productDetail', (req, res) => {
  res.send('Hello DELETE productDetail data')
});

module.exports = productDetail