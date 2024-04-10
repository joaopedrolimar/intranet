// models/Leave.js
const mongoose = require('mongoose');

const leaveSchema = new mongoose.Schema({
  reason: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Leave = mongoose.model('Leave', leaveSchema);

module.exports = Leave;
