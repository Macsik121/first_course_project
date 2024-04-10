require('dotenv').config();
const express = require('express');
const cors = require('cors');
const api_router = require('./routers/api_router');
const { connectToDb } = require('./db_actions/mysql');
const app = express();
const port = process.env.PORT || 8001;

app.use(express.json());
app.use(cors());

connectToDb();

app.use('/api', api_router);

app.listen(port, () => console.log(`Server has been started with port ${port}`));
