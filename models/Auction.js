const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const { Schema } = mongoose;

const AuctionSchema = new Schema({
  userID: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  startingDate: {
    type: Date,
    required: true
  },
  endOfAuction: {
    type: Date,
    required: true
  },
  minimumBid: {
    type: Number
  },
  views: {
    type: Number,
    default: 0
  },
  images: {
    type: String
  }
});

AuctionSchema.plugin(AutoIncrement, { inc_field: "id" });

// Init the User model schema
const Auction = mongoose.model("Auction", AuctionSchema);

module.exports = {
  Auction
};
