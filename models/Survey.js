const mongoose = require('mongoose');
const {
  Schema
} = mongoose;
const RecipientSchema = require('./Recipient');
// the recipient sub-documents have their own attributes indicated whether or not they've clicked their survey links

// the underscore on the user prop isn't required. its style to indicate a relationship field

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  yes: {
    type: Number,
    default: 0
  },
  no: {
    type: Number,
    default: 0
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  dateSent: Date,
  lastResponded: Date
});

mongoose.model('surveys', surveySchema);