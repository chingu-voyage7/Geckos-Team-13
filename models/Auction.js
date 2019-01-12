var mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  images: {
    type: [String],
  },
  minimumBid: {
    type: Number,
  },
});

// Init the User model schema
var Auction = mongoose.model("Auction", AuctionSchema);

module.exports = {
    Auction: Auction
};