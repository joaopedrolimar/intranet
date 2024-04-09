// src/components/Login.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, TextField } from '@mui/material'; // Importe os componentes do Material-UI necessários

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    // Aqui você implementará a lógica de autenticação com PHP e XAMPP
    // Você pode fazer uma requisição para o backend e verificar as credenciais

    // Após a autenticação bem-sucedida, redirecione para a página principal
    history.push('/home');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <TextField
          type="text"
          label="Username" // Use a prop label para adicionar um rótulo ao campo
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" type="submit">Login</Button> {/* Use o componente Button do Material-UI */}
      </form>
    </div>
  );
};

export default Login;
