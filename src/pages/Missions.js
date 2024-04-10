import React, { useState } from 'react';
import AddMissionForm from '../components/AddMissionForm'; // Importe o componente AddMissionForm

const Missions = () => {
  const [missions, setMissions] = useState([]);

  // Função para adicionar a nova missão à lista de missões
  const addMission = (newMission) => {
    setMissions([...missions, newMission]);
  };

  return (
    <div>
      <h2>Missions</h2>
      {/* Passa a função addMission para o componente AddMissionForm */}
      <AddMissionForm onAddMission={addMission} />
      <hr />
      <h3>Existing Missions</h3>
      {/* Tabela de missões */}
      <table className="table">
        <thead>
          <tr>
            <th>ORD</th>
            <th>Period</th>
            <th>Motivation</th>
            <th>Participants</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission, index) => (
            <tr key={index}>
              <td>{mission.ORD}</td>
              <td>{mission.period}</td>
              <td>{mission.motivation}</td>
              <td>{mission.participants}</td>
              <td>{mission.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
