const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
  try {
    const { title, date, type } = req.body;
    const userId = req.userId;

    // Criar um novo evento
    const event = await Event.create({ title, date, type, user: userId });

    res.status(201).json({ message: 'Event created successfully', event });
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getEventsByUser = async (req, res) => {
  try {
    const userId = req.userId;

    // Buscar todos os eventos do usuário
    const events = await Event.find({ user: userId });

    res.status(200).json({ events });
  } catch (error) {
    console.error('Error getting events by user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

