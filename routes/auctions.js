const express = require('express');
const secured = require('../lib/middleware/secured');
// TODO - Import Data controller for auctions

const router = express.Router();

/* GET Auctions, this is an unsecured endpoint */
router.get('/auctions', (req, res, next) => {
  try {
    res.json({ message: 'This should return all the auctions from all users' });
  } catch (err) {
    next(err);
  }
});

/* GET a User's Acutions - this is a secured endpoint */
router.get('/myauctions', secured(), (req, res, next) => {
  try {
    const { _raw, _json, ...userProfile } = req.user;
    res.json({ message: `This should return all the auctions from ${userProfile.id}` });
  } catch (err) {
    next(err);
  }
});

/* POST a new auction for a User's auction */

module.exports = router;
