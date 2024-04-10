const express = require('express');
const { getAllProducts } = require('../db_actions/products_api_handler');
const products_router = express.Router();

products_router.get('/get-all-products', async (req, res) => {
  const products = await getAllProducts();
  res.status(200).json(products);
});

module.exports = products_router;
