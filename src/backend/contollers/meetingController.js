// controllers/meetingController.js
const Meeting = require('../models/Meeting');

exports.createMeeting = async (req, res) => {
  try {
    const { title, date, description, participants } = req.body;
    const newMeeting = new Meeting({
      title,
      date,
      description,
      participants,
    });
    const savedMeeting = await newMeeting.save();
    res.status(201).json(savedMeeting);
  } catch (error) {
    console.error('Erro ao criar reunião:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

exports.getAllMeetings = async (req, res) => {
  try {
    const allMeetings = await Meeting.find();
    res.json(allMeetings);
  } catch (error) {
    console.error('Erro ao obter todas as reuniões:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

