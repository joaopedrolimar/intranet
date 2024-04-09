// Header.js

import React from 'react';
import '../styles/Header.css'; // Importe o arquivo CSS para o estilo do header

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Intranet Logo</div>
      <nav className="navbar">
        <a href="/" className="nav-link">Home</a>
        <a href="/missions" className="nav-link">Missions</a>
        <a href="/meetings" className="nav-link">Meetings</a>
        <a href="/leave" className="nav-link">Leave</a>
      </nav>
    </header>
  );
};

export default Header;
