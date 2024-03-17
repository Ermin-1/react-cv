// App.jsx
import React, { useState } from 'react';
import Portfolio from './Portfolio'; // Importera Portfolio-komponenten
import './App.css';

function App() {
  const [showProjects, setShowProjects] = useState(false);

  const handleShowProjects = () => {
    setShowProjects(true);
  };

  return (
<div className="app-wrapper">
  <header>
    <h1></h1>
  </header>
  <main className="main-content">
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Ermins Portfolio API</h5>
          <button className="btn btn-primary" onClick={handleShowProjects}>Visa GitHub-projekt</button>
          {showProjects && <Portfolio />} {/* Visa Portfolio-komponenten om showProjects är true */}
        </div>
      </div>
    </div>
  </main>
  <footer>
    <p></p>
  </footer>
</div>

  );
}

export default App;
