const express = require('express');
const auth_router = require('./auth_router');
const products_router = require('./products_router');
const api_router = express.Router();

api_router.use('/auth', auth_router);
api_router.use('/products', products_router)

module.exports = api_router;
