// requires ES2015 modules to import, which node can't access
// import express from 'express';
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// underlying express server
const app = express();

// passport.use(new GoogleStrategy());
app.get('/', (req, res) => {
  res.send({ bye: 'buddy' });
});

// heroku can inject environment variables during runtime after deploy
// this is accessed with process.env.PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT);
