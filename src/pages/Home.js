import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import '../styles/Home.css'; // Importar o estilo da página Home

const Home = () => {
  const [date, setDate] = useState(new Date());
  const [selectedPoliceman, setSelectedPoliceman] = useState(null);
  const [events, setEvents] = useState([]);

  // Lista de policiais com seus respectivos nomes e cores
  const policemen = [
    { name: 'Sandro', color: '#FF5733' },
    { name: 'Simões', color: '#33FF57' },
    { name: 'Ulisses', color: '#5733FF' },
    { name: 'Witzel', color: '#FF33E6' },
    { name: 'Marco', color: '#33E6FF' },
    { name: 'Reis', color: '#33FFA5' },
    { name: 'Luiz Carlos', color: '#FFD033' },
    { name: 'Ferrine', color: '#33A5FF' },
    { name: 'Jadson', color: '#FF3333' },
    { name: 'Thiago', color: '#B933FF' },
    { name: 'Geraldo', color: '#33FFD9' },
    { name: 'Paulo', color: '#FF9A33' },
  ];

  const fetchEventsByUser = async (userName) => {
    // Função para buscar os eventos do usuário na API
    // Código omitido para simplificação
  };

  const handleDayClick = (value) => {
    setDate(value);
  };

  const selectPoliceman = (name) => {
    setSelectedPoliceman(name);
    fetchEventsByUser(name);
  };

  return (
    <div className="container">
      <h2 className="mt-5 mb-4">Home</h2>
      <div className="row">
        <div className="col-md-6">
          <h3>Calendário</h3>
          <div className="calendar-container">
            <div className="calendar-left">
              <ul className="police-names list-unstyled">
                {policemen.map((policeman, index) => (
                  <li key={index} className="police-name">
                    <span
                      className="badge rounded-pill me-2"
                      style={{ backgroundColor: policeman.color, cursor: 'pointer' }}
                      onClick={() => selectPoliceman(policeman.name)}
                    >
                      {policeman.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="calendar-right">
              <Calendar value={date} onClickDay={handleDayClick} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h3>Eventos</h3>
          <ul>
            {events.map((event, index) => (
              <li key={index}>
                {event.date} - {event.type}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;

