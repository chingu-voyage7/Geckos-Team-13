const express = require('express');
const secured = require('../lib/middleware/secured');

const router = express.Router();

/* GET user profile. */
router.get('/user', secured(), (req, res, next) => {
  try {
    const { _raw, _json, ...userProfile } = req.user;
    res.json(userProfile);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
