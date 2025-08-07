const mongoose = require('mongoose');

const showSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  src: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ""
  },
  status: {
    type: String,
    required: true,
    enum: ['en-cours', 'passes' ]
  }
}, {
  timestamps: true // add created_at and updated_at
});

module.exports = mongoose.model('Show', showSchema, 'shows');
