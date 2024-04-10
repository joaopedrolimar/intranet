import React, { useState } from 'react';

const AddMissionForm = () => {
  const [formData, setFormData] = useState({
    ORD: '',
    period: '',
    motivation: '',
    participants: '',
    role: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Enviar os dados para o servidor
    fetch('/api/missions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Missão adicionada:', data);
        // Limpar o formulário após adicionar a missão
        setFormData({
          ORD: '',
          period: '',
          motivation: '',
          participants: '',
          role: ''
        });
      })
      .catch(error => console.error('Erro ao adicionar missão:', error));
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-3">
        <label htmlFor="ORD" className="form-label">ORD:</label>
        <input type="text" className="form-control" id="ORD" name="ORD" value={formData.ORD} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="period" className="form-label">Período (Inicio e Fim):</label>
        <input type="text" className="form-control" id="period" name="period" value={formData.period} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="motivation" className="form-label">Motivação:</label>
        <input type="text" className="form-control" id="motivation" name="motivation" value={formData.motivation} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="participants" className="form-label">Participantes:</label>
        <input type="text" className="form-control" id="participants" name="participants" value={formData.participants} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="role" className="form-label">Função:</label>
        <input type="text" className="form-control" id="role" name="role" value={formData.role} onChange={handleChange} required />
      </div>
      <button type="submit" className="btn btn-primary">Adicionar Missão</button>
    </form>
  );
};

export default AddMissionForm;


