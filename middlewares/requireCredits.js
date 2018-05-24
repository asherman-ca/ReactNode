// next is a function we call once our middleware is complete

module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return res.status(401).send({
      error: 'Not enough credits!!!'
    });
  }

  next();
};