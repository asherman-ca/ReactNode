const mongoose = require('mongoose');
const {
  Schema
} = mongoose;

const recipientSchema = new Schema({
  email: String,
  responded: {
    type: Boolean,
    default: false
  }
});

// mongoose.model('recipient', recipientSchema);
// because its a subdoc we don't do this here

module.exports = recipientSchema;