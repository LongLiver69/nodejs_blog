const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Account = new Schema({
  name: {type: String, require:true, },
  age: {type: String, maxLength: 255},
  mssv: {type: String, maxLength: 255},
  image: {type: String},
  videoId: {type: String, require:true, },
  slug: { type: String, slug: 'name', unique: true },
},{
  timestamps: true,
});

mongoose.plugin(slug);
Account.plugin(mongooseDelete, { 
    deletedAt: true,
    overrideMethods: 'all',
});


module.exports = mongoose.model('Account', Account);
