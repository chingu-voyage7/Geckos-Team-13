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
  images: {
    type: [String],
  },
});

// Init the User model schema
const Auction = mongoose.model('Auction', AuctionSchema);

module.exports = {
  Auction,
};
