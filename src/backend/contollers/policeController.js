const Police = require('../models/Police');

// Criar um novo policial
const Police = require('../models/Police');

exports.createPolice = async (req, res) => {
    try {
        const { name, badgeNumber, rank } = req.body;
        const newPolice = new Police({
            name,
            badgeNumber,
            rank
        });
        const savedPolice = await newPolice.save();
        res.status(201).json(savedPolice);
    } catch (error) {
        console.error('Erro ao criar policial:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};


// Obter detalhes de um policial específico
exports.getPoliceById = async (req, res) => {
    try {
        const { id } = req.params;
        const police = await Police.findById(id);
        if (!police) {
            return res.status(404).json({ error: 'Policial não encontrado' });
        }
        res.json(police);
    } catch (error) {
        console.error('Erro ao obter detalhes do policial:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};


// Obter uma lista de todos os policiais
exports.getAllPolice = async (req, res) => {
    try {
        const allPolice = await Police.find();
        res.json(allPolice);
    } catch (error) {
        console.error('Erro ao obter todos os policiais:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};


// Atualizar os detalhes de um policial específico
exports.updatePoliceById = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, badgeNumber, rank } = req.body;
        const updatedPolice = await Police.findByIdAndUpdate(
            id,
            { name, badgeNumber, rank },
            { new: true }
        );
        if (!updatedPolice) {
            return res.status(404).json({ error: 'Policial não encontrado' });
        }
        res.json(updatedPolice);
    } catch (error) {
        console.error('Erro ao atualizar policial:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};


// Excluir um policial específico
exports.deletePoliceById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPolice = await Police.findByIdAndDelete(id);
        if (!deletedPolice) {
            return res.status(404).json({ error: 'Policial não encontrado' });
        }
        res.json({ message: 'Policial excluído com sucesso' });
    } catch (error) {
        console.error('Erro ao excluir policial:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};

