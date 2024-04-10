const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const auth = require('../utils/auth');

// Rota para criar um novo evento
router.post('/', auth, eventController.createEvent);

// Rota para buscar todos os eventos de um usuário
router.get('/', auth, eventController.getEventsByUser);

module.exports = router;
