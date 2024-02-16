import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Erreur404 from "./pages/Erreur404";
import Home from "./pages/Home";





function App() {
  // État local pour suivre le mode (jour ou nuit)
  const [mode, setMode] = useState('jour');

  // Fonction pour basculer entre le mode jour et le mode nuit
  const toggleMode = () => {
    setMode(mode === 'jour' ? 'nuit' : 'jour');
  };

  return (
    <div className={`App ${mode === 'nuit' ? 'night-mode' : 'day-mode'}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Erreur404 />} />



        </Routes>
      </BrowserRouter>
      <button  onClick={toggleMode}>
        {mode === 'jour' ? 'Nuit' : 'Jour'}
      </button>
    </div>
  );
}

export default App;



 
    
     
      
 