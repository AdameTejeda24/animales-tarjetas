import React, { useState } from 'react';
import { FaLightbulb } from 'react-icons/fa';
import './Componente.css';


const FocoToggle: React.FC = () => {
  const [encendido, setEncendido] = useState(false);

  const toggleFoco = () => {
    setEncendido(!encendido);
  };

  return (
    <div className="foco-container">
      <FaLightbulb className={`foco-icono ${encendido ? 'foco-encendido' : 'foco-apagado'}`} />
      
      <p className="estado-texto">
        El foco está {encendido ? 'ENCENDIDO' : 'APAGADO'}
      </p>

      <button onClick={toggleFoco} className="foco-toggle-boton">
        {encendido ? 'Apagar' : 'Encender'}
      </button>
    </div>
  );
};

export default FocoToggle;