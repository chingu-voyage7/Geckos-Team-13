const express = require('express');
const path = require('path');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  try {
    res.sendFile(path.join(`${__dirname}build/index.html`));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
