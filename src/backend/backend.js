// backend.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

// Configurar variáveis de ambiente
dotenv.config();

// Criar instância do Express
const app = express();

// Middleware para análise do corpo das requisições
app.use(bodyParser.json());

// Middleware para permitir solicitações de origens diferentes
app.use(cors());

// Conectar ao banco de dados MongoDB
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Conexão com o banco de dados MongoDB estabelecida.');
}).catch((error) => {
  console.error('Erro ao conectar ao banco de dados MongoDB:', error);
});

// Importar as rotas dos usuários e policiais
const userRoutes = require('./routes/userRoutes');
const policeRoutes = require('./routes/policeRoutes');

// Configurar as rotas
app.use('/api', userRoutes);
app.use('/api', policeRoutes);

// Porta em que o servidor irá escutar as requisições
const PORT = process.env.PORT || 5000;

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
