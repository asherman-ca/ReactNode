// just requiring something simply runs it instead of assigning it to a variable
const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');

mongoose.connect(keys.mongoURI);
// console.log(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);

// heroku can inject environment variables during runtime after deploy
// this is accessed with process.env.PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT);
