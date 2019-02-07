const express = require('express');
const debug = require('debug');
const db = require('../models/Auction');
const secured = require('../lib/middleware/secured');

// TODO - Import Data controller for auctions

const router = express.Router();

/* GET Auctions, this is an unsecured endpoint */
router.get('/auction', (req, res, next) => {
  try {
    const { id } = req.query;
    db.Auction.find(id).then((dbData) => {
      res.json({ data: dbData });
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
