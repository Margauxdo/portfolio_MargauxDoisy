import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Erreur404 from "./pages/Erreur404";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Home from "./pages/Home";
import CVonline from "./pages/Cvonline";
import Apropos from "./components/Apropos";
import ContactForm from "./components/ContactForm";
import ProjetsWeb from "./components/ProjetsWeb";





function App() {
  // Récupérer le mode actuel depuis le stockage local, ou utiliser "jour" par défaut
  const [mode, setMode] = useState(localStorage.getItem('mode') || 'jour');

  // Mettre à jour le mode et enregistrer dans le stockage local
  const toggleMode = () => {
    const newMode = mode === 'jour' ? 'nuit' : 'jour';
    setMode(newMode);
    localStorage.setItem('mode', newMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      const progressBar = document.querySelector('.progressBar');
      const windowHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progressBarHeight = (scrollTop / (scrollHeight - windowHeight)) * 100;
      progressBar.style.width = progressBarHeight + '%';
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
        <div className="progressBar" ></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<ProjetsWeb/>} />
          <Route path="/monHistoire" element={<Apropos/>} />
          <Route path="/cvonline" element={<CVonline />} />
          <Route path="/contact" element={<ContactForm/>} />
          <Route path="*" element={<Erreur404 />} />
          
        </Routes>
      </BrowserRouter>
      <button className="JourNight" onClick={toggleMode}>
        {mode === 'jour' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
      </button>
    </div>
  );
}

export default App;






 
    
     
      
