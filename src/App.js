import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Inicio from './components/Inicio';
import About from './components/About';
import Contacto from './components/Contacto';
import './App.css'; // Importar los estilos

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <img src="/logotec.png" alt="TECBA Logo" />
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                    </ul>
                </nav>

                <div className="container">
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contacto" element={<Contacto />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
