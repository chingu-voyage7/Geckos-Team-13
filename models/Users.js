const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
});

// Init the User model schema
const User = mongoose.model('User', UserSchema);

module.exports = {
  User,
};
