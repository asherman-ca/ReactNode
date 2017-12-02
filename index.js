// just requiring something simply runs it instead of assigning it to a variable
const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

// heroku can inject environment variables during runtime after deploy
// this is accessed with process.env.PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT);
