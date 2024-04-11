import React, { useState, useEffect } from 'react';

function Missions() {
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    // Aqui fazemos a chamada para buscar as missões do PHP
    fetch('../database/getMissions.php') // Supondo que você criou um arquivo PHP separado para buscar as missões
      .then(response => response.json())
      .then(data => setMissions(data))
      .catch(error => console.error('Error fetching missions:', error));
  }, []);

  return (
    <div>
    <h2>Missões</h2>
    <h3>Adicionar Nova Missão</h3>
    <form method="post" action="../database/addMission.php">
        <label htmlFor="ord">ORD:</label>
        <input type="text" id="ord" name="ord" required /><br />

        <label htmlFor="periodo_inicio">Período Início:</label>
        <input type="date" id="periodo_inicio" name="periodo_inicio" required /><br />

        <label htmlFor="periodo_fim">Período Fim:</label>
        <input type="date" id="periodo_fim" name="periodo_fim" required /><br />

        <label htmlFor="motivacao">Motivação:</label>
        <textarea id="motivacao" name="motivacao"></textarea><br />

        <label htmlFor="participantes">Participantes:</label>
        <input type="text" id="participantes" name="participantes" /><br />

        <label htmlFor="funcao">Função:</label>
        <input type="text" id="funcao" name="funcao" /><br />

        <button type="submit">Adicionar Missão</button>
    </form>
</div>
  );
}

export default Missions;
