const express = require('express');
const router = express.Router();
const auth = require('../utils/auth');
const userController = require('../controllers/userController');

// Rota para criar um novo usuário
router.post('/users', auth.authenticate, auth.authorize('Woner'), userController.createUser);

module.exports = router;
