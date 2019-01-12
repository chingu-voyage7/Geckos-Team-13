
const db = require('./models/Auction');
// const sum = require('./sum');

const MONGODB_URI = 'mongodb://localhost/easyAuctionTest';

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;


test('Verify that Mongo is connected to the test suite', async () => {
  await mongoose.connect(MONGODB_URI, options).then(
    async () => {expect(err).toBeFalsy();}
  );
});
