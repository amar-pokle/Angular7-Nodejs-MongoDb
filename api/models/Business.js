const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
  person_name: {
    type: String
  },
  father_name: {
    type: String
  },
  address: {
    type: String
  },
  email: {
    type: String
  },
  mobile_no: {
    type: String
  }
},{
    collection: 'business'
});

module.exports = mongoose.model('Business', Business);