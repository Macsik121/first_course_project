require('dotenv').config();
const express = require('express');
const app = express();
const products = [];

app.listen(process.env.PORT, () => console.log(`Server has been started with port ${PORT}`));
