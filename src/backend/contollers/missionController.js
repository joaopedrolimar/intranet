// missionController.js
// missionController.js

const Mission = require('../models/Mission');

exports.createMission = async (req, res) => {
  try {
    const { ORD, period, motivation, participants, role } = req.body;
    const newMission = new Mission({
      ORD,
      period,
      motivation,
      participants,
      role
    });
    const savedMission = await newMission.save();
    res.status(201).json(savedMission);
  } catch (error) {
    console.error('Erro ao criar missão:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};
