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
    db.Auction.findOne(id).then((auctionItem) => {
      res.json({ data: auctionItem });
    });
  } catch (err) {
    next(err);
  }
});

router.post('auction/:id/bid', (req, res, next) => {
  try {
    const { bidAmount } = req.body;
    const { id } = req.param.id;
    db.Auction.findOne(id).then((auctionItem) => {
      debug(auctionItem);
      if (bidAmount > auctionItem[0].currentBid) {
        db.Auction.update(id, { currentBid: bidAmount }, (err, doc) => {
          if (err) {
            next(err);
          } else {
            res.json(doc);
          }
        });
      }
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
