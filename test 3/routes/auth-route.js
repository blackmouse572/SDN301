const express = require('express');
const { JWT_SECRET } = require('../config');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'admin') {
    let token = jwt.sign(
      {
        username,
        role: 'admin',
      },
      JWT_SECRET,
      {
        expiresIn: '1h',
        issuer: 'https://www.example.com',
      }
    );

    res.status(200).json({ token });
  } else if (username === 'user' && password === 'user') {
    let token = jwt.sign(
      {
        username,
        role: 'user',
      },
      JWT_SECRET,
      {
        expiresIn: '1h',
        issuer: 'https://www.example.com',
      }
    );

    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: 'Login failed' });
  }
});

module.exports = router;
