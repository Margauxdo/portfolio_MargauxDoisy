import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Erreur404 from "./pages/Erreur404";
import Home from "./pages/Home";

function App() {
  // Récupérer le mode actuel depuis le stockage local, ou utiliser "jour" par défaut
  const [mode, setMode] = useState(localStorage.getItem('mode') || 'jour');

  // Mettre à jour le mode et enregistrer dans le stockage local
  const toggleMode = () => {
    const newMode = mode === 'jour' ? 'nuit' : 'jour';
    setMode(newMode);
    localStorage.setItem('mode', newMode);
  };

  // Mettre à jour le mode lorsque le composant est monté
  useEffect(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  return (
    <div className={`App ${mode === 'nuit' ? 'night-mode' : 'day-mode'}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Erreur404 />} />
        </Routes>
      </BrowserRouter>
      <button className="JourNight" onClick={toggleMode}>
        {mode === 'jour' ? 'Nuit' : 'Jour'}
      </button>

      
    </div>

    
  );
}

export default App;




 
    
     
      
 