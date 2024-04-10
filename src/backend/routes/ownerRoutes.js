const express = require('express');
const router = express.Router();
const { addPoliceman, removePoliceman } = require('../controllers/ownerController');

// Rota para adicionar um policial
router.post('/add-policeman', addPoliceman);

// Rota para remover um policial
router.delete('/remove-policeman/:id', removePoliceman);

module.exports = router;
