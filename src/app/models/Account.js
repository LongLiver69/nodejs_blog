const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Account = new Schema({
  name: {type: String, require:true, },
  age: {type: String, maxLength: 255},
  mssv: {type: String, maxLength: 255},
  image: {type: String},
  videoId: {type: String, require:true, },
  slug: { type: String, slug: 'name', unique: true },
});

module.exports = mongoose.model('Account', Account);
