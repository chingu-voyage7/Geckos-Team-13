/* EasyAuction Express App - This is the back-end API for our React based client */

// createError was replaced by the error handler at the end of app.js
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const flash = require('connect-flash');
const cors = require('cors');
const mongoose = require('mongoose');
// Load ENV variables
require('dotenv').config();


// Import route files
const userInViews = require('./lib/middleware/userInViews');
const authRouter = require('./routes/auth');
// const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const auctionsRouter = require('./routes/auctions');


// Configure Passport and create a new Auth0 instance
const strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL:
      process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback',
  },
  ((accessToken, refreshToken, extraParams, profile, done) => done(null, profile)
  ),
);

passport.use(strategy);
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

const app = express();

app.use(cors());

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug'); // Can replace with pug

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// express-session setup
const sess = {
  secret: 'CHANGE THIS SECRET',
  cookie: {},
  resave: false,
  saveUninitialized: true,
};

if (app.get('env') === 'production') {
  sess.cookie.secure = true; // serve secure cookies, requires https
}

// Init session middleware
app.use(session(sess));
app.use(passport.initialize());
app.use(passport.session());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}build/index.html`));
});

app.use(flash());

// Handle auth failure error messages
app.use((req, res, next) => {
  if (req && req.query && req.query.error) {
    req.flash('error', req.query.error);
  }
  if (req && req.query && req.query.error_description) {
    req.flash('error_description', req.query.error_description);
  }
  next();
});

// root routes (can remove index, once we get react stood up)
app.use(userInViews());
app.use('/', authRouter);
// app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/', auctionsRouter);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/** * Error handlers ** */
// Development error handler
// Will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
    });
    next();
  });
}
// Production error handler
// No stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
  });
  next();
});

// Initialize Mongoose here
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/easyAuctionDev';

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

module.exports = app;
