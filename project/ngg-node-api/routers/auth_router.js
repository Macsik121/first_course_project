const express = require('express');
const { query } = require('../db_actions/mysql');
const auth_router = express.Router();

auth_router.post('/sign-in', async (req, res) => {
  const { email, password, } = req.body;
  let userWithEmailExists = await query('SELECT users.password FROM users WHERE email = ' + email);
  // if (!userWithEmailExists) res.send(404).json({ error: 'no user with the provided email found' });
  // else res.send('user with the given email found');
  res.json({k: 'ok'})
});

module.exports = auth_router;
