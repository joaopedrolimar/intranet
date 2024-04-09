// src/pages/UserProfile.js

import React, { useState } from 'react';

const UserProfile = () => {
  const [userData, setUserData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    // Adicione outros campos conforme necessário
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do usuário para o backend
  };

  return (
    <div>
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
          placeholder="Username"
        />
        <input
          type="text"
          name="firstName"
          value={userData.firstName}
          onChange={handleInputChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={userData.lastName}
          onChange={handleInputChange}
          placeholder="Last Name"
        />
        {/* Adicione campos adicionais conforme necessário */}
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default UserProfile;
