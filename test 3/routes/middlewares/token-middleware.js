const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../config');

function verifyToken(req, res, next) {
  let token = req.header('Authorization');
  if (!token) return res.status(401).json({ error: 'Access denied' });
  token.split(' ')[0] === 'Bearer' ? (token = token.split(' ')[1]) : token;
  try {
    console.log('token', token);
    const decoded = jwt.verify(token, JWT_SECRET, {
      expiresIn: '1h',
      issuer: 'https://www.example.com',
    });
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token', error });
  }
}

module.exports = verifyToken;
