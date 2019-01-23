const express = require('express');
const debug = require('debug');
const db = require('../models/Auction');
const secured = require('../lib/middleware/secured');

// TODO - Import Data controller for auctions

const router = express.Router();

/* GET Auctions, this is an unsecured endpoint */
router.get('/auctions', (req, res, next) => {
  try {
    db.Auction.find().then((dbData) => {
      res.json(
        { data: dbData },
      );
    });
  } catch (err) {
    next(err);
  }
});
/* This will populate some auction cards */
/* GET a User's Acutions - this is a secured endpoint */
router.get('/myauctions', secured(), (req, res, next) => {
  try {
    const { _raw, _json, ...userProfile } = req.user;
    db.Auction.find({ userID: userProfile.id }).then((dbData) => {
      res.json(
        { data: dbData },
      );
    });
  } catch (err) {
    next(err);
  }
});
/* This endpoint should be secured */
/* POST a new auction for a User's auction */
router.post('/auctions', secured(), (req, res, next) => {
  // We'll spit the data back out for now until we setup the controller
  const {
    title,
    description,
    startingDate,
    endOfAuction,
    minimumBid,
  } = req.body;
  const userID = req.user.id;
  const formData = {
    userID,
    title,
    description,
    startingDate,
    endOfAuction,
    minimumBid,
  };
  debug(formData);
  try {
    db.Auction.create({ formData }).then((dbData) => {
      res.json(
        {
          message: 'This should return all the auctions data from the post',
          data: dbData,
        },
      );
    });
  } catch (err) {
    debug(err.message);
    next(err);
  }
});

router.put('/auctions', (req, res, next) => {
  // We'll spit the data back out for now until we setup the controller
  const { id } = req.body;
  try {
    db.Auction.find({ id }).then((dbData) => {
      const { _id } = dbData[0];
      debug(dbData);
      const currentCount = dbData[0].views + 1;
      db.Auction.update({ _id }, { $set: { views: currentCount } }).then((data) => {
        res.json(
          {
            message: 'This should return all the auctions data from the post',
            data,
          },
        );
      });
    });
  } catch (err) {
    debug(err.message);
    next(err);
  }
});

module.exports = router;
