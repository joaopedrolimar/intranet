// controllers/leaveController.js
const Leave = require('../models/Leave');

exports.createLeave = async (req, res) => {
  try {
    const { reason, startDate, endDate, description } = req.body;
    const newLeave = new Leave({
      reason,
      startDate,
      endDate,
      description,
    });
    const savedLeave = await newLeave.save();
    res.status(201).json(savedLeave);
  } catch (error) {
    console.error('Erro ao criar afastamento:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

exports.getAllLeaves = async (req, res) => {
  try {
    const allLeaves = await Leave.find();
    res.json(allLeaves);
  } catch (error) {
    console.error('Erro ao obter todos os afastamentos:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};
