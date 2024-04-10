// models/Meeting.js
const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  participants: {
    type: [String], // Considerando que os participantes são identificados por seus nomes
    required: true,
  },
});

const Meeting = mongoose.model('Meeting', meetingSchema);

module.exports = Meeting;
