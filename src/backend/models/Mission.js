const mongoose = require('mongoose');

const missionSchema = new mongoose.Schema({
  ORD: {
    type: String,
    required: true
  },
  period: {
    type: String,
    required: true
  },
  motivation: {
    type: String,
    required: true
  },
  participants: {
    type: [String],
    required: true
  },
  role: {
    type: String,
    required: true
  }
});

const Mission = mongoose.model('Mission', missionSchema);

module.exports = Mission;


