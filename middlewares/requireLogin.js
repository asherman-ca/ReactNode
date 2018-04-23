// next is a function we call once our middleware is complete

module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(404).send({ error: 'Log in required' });
  }

  next();
};
