const mongoose = require('mongoose');

const { Schema } = mongoose;

const AuctionSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startingDate: {
    type: Date,
    required: true,
  },
  endOfAuction: {
    type: Date,
    required: true,
  },
  minimumBid: {
    type: Number,
  },
  views: {
    type: Number,
    default: 0,
  },
  images: {
    type: [String],
  },
});

// Init the User model schema
const Auction = mongoose.model('Auction', AuctionSchema);

module.exports = {
  Auction,
};
