const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const driverSchema = new Schema({
  email: {
    type: String,
    required: true
  }
});
