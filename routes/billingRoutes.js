const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    // refactored into requireLogin middleware
    // if (!req.user) {
    //   return res
    //     .status(401)
    //     .send({ error: 'Please log in before making purchases' });
    // }

    // this is where we use body-parser, the stripe token is in req.body
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id
    });

    // passport puts the user object on req (through cookies), must be saved though
    req.user.credits += 5;
    // save is async
    const user = await req.user.save();

    res.send(user);
  });
};
