const User = require('../models/User');

// Função para criar um novo usuário
exports.createUser = async (req, res) => {
  try {
    const { username, password, role } = req.body;

    // Verificar se o usuário já existe
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Criar um novo usuário
    const newUser = new User({
      username,
      password,
      role,
    });

    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};
