import React from "react";
import "./header.css";
import { BrowserRouter,Link, Routes, Route } from "react-router-dom";
import Inicio from '../components/inicio';
import Cards from '../components/Card';
import Productos from '../components/Productos';
import Contacto from '../components/Contacto';




const Header: React.FC = () => {
  return (
   <BrowserRouter>
      <nav className="navbar">
        <div className="nav-item">
          <Link to="/Inicio"><span>Inicio</span></Link>
        </div>
        <div className="nav-item">
          <Link to="/Cards"><span>Cards</span></Link>
        </div>
        <div className="nav-item">
          <Link to="/Productos"><span>Productos</span></Link>
        </div>
        <div className="nav-item">
          <Link to="/Contacto"><span>Contacto</span></Link>
        </div>
      </nav>

      <div style={{ paddingTop: '100px' }}>
        <Routes>
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Cards" element={<Cards />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};



export default Header;
