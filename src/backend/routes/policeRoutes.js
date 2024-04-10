// routes/policeRoutes.js

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth'); // Middleware para autenticação do usuário
const Police = require('../models/Police');

// Adicionar um novo policial (rota protegida)
router.post('/police', auth, async (req, res) => {
  try {
    // Verificar se o usuário é "Woner" antes de permitir adicionar policiais
    if (req.user.role !== 'Woner') {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { name, rank, email } = req.body;

    const newPolice = new Police({
      name,
      rank,
      email
    });

    const savedPolice = await newPolice.save();

    res.status(201).json(savedPolice);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// Listar todos os policiais
router.get('/police', auth, async (req, res) => {
  try {
    // Verificar se o usuário é "Woner" antes de permitir listar policiais
    if (req.user.role !== 'Woner') {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const police = await Police.find();

    res.json(police);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// Remover um policial (rota protegida)
router.delete('/police/:id', auth, async (req, res) => {
  try {
    // Verificar se o usuário é "Woner" antes de permitir remover policiais
    if (req.user.role !== 'Woner') {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { id } = req.params;

    const deletedPolice = await Police.findByIdAndDelete(id);

    if (!deletedPolice) {
      return res.status(404).json({ message: 'Police not found' });
    }

    res.json(deletedPolice);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
