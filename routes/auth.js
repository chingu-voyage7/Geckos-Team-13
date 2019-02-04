const express = require('express');
const debug = require('debug');

const router = express.Router();
const passport = require('passport');

// Perform the login, after login Auth0 will redirect to callback
router.get(
  '/login',
  passport.authenticate('auth0', {
    scope: 'openid email profile',
  }),
  (req, res) => {
    res.redirect('/');
  },
);

// Perform the final stage of authentication and redirect to previously requested URL or '/user'
router.get('/callback', (req, res, next) => {
  passport.authenticate('auth0', (err, user, info) => {
    debug(info);
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect('/login');
    }
    return req.logIn(user, (loginErr) => {
      if (loginErr) {
        return next(loginErr);
      }
      const { returnTo } = req.session;
      delete req.session.returnTo;
      return res.redirect(returnTo || '/user');
    });
  })(req, res, next);
});

// Perform session logout and redirect to homepage
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
