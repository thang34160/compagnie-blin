const mongoose = require('mongoose');

const exhibitionSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  src: {
    type: String,
    required: true
  },
}, {
  timestamps: true // add created_at and updated_at
});

module.exports = mongoose.model('Exhibition', exhibitionSchema, 'exhibitions');
