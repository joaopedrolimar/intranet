// models/Police.js

const mongoose = require('mongoose');

const policeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rank: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  // Outros campos relevantes
});

const Police = mongoose.model('Police', policeSchema);

module.exports = Police;
