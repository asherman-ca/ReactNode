//  get api/surveys
//  post api/surveys/webhooks (record feedback from users)
//  post api/surveys (create a new survey)
// title
// subject
// body (text to show in the survey)
// recipients

// needs 3 routes:
// GET - return a list of current user's surveys
// POST - record feedback from a user 
// POST - create a new survey

const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const Survey = mongoose.model('surveys');

// mongoose 5 autocreates req.user.id

module.exports = app => {
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
    const {
      title,
      subject,
      body,
      recipients
    } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({
        email
      })),
      _user: req.user.id,
      dateSent: Date.now()
    })

  });
};