const User = require('../models/User');

// Função para adicionar um policial
exports.addPoliceman = async (req, res) => {
  try {
    // Aqui você implementa a lógica para adicionar um novo policial
    // Por exemplo:
    const { name, badgeNumber } = req.body;
    const newPoliceman = new User({ name, badgeNumber });
    await newPoliceman.save();
    res.status(201).json({ message: 'Policial adicionado com sucesso!', policeman: newPoliceman });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao adicionar policial' });
  }
};

// Função para remover um policial
exports.removePoliceman = async (req, res) => {
  try {
    // Aqui você implementa a lógica para remover um policial
    // Por exemplo:
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json({ message: 'Policial removido com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao remover policial' });
  }
};
