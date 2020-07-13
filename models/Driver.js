const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const pointSchema = require('../schemas/point');

const driverSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  driving: {
    type: Boolean,
    default: false
  },
  location: {
    type: pointSchema,
    index: '2dsphere'
  }
});

const Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;
