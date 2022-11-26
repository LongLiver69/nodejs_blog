const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = new Schema({
  name: {type: String, maxLength: 255},
  age: {type: String, maxLength: 255},
  mssv: {type: String, maxLength: 255},
  image: {type: String},
  slug: {type: String},
});

module.exports = mongoose.model('Account', Account);
