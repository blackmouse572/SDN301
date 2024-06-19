const verifyToken = require('./token-middleware');

function roleMiddleware(roles) {
  return (req, res, next) => {
    if (roles.includes(req.user.role)) {
      next();
    } else {
      res.status(403).send('Forbidden');
    }
  };
}

const authedMiddleware = [verifyToken, roleMiddleware(['admin', 'user'])];

module.exports = {
  roleMiddleware,
  authedMiddleware,
};
