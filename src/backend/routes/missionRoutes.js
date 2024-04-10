// missionRoutes.js

const express = require('express');
const router = express.Router();
const missionController = require('../controllers/missionController');

// Rota para criar uma nova missão
router.post('/', missionController.createMission);

module.exports = router;
