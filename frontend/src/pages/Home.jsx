import React from "react";
import "./Home.css";
import ilustracionHome from "../paginaprincipal.png";

function Home({ logo, onLoginClick, onRegisterClick, onAboutClick, onHelpClick }) {
  
  return (
    <div className="home-master-wrapper">
      <header className="home-white-strip top">
        <div className="home-container-wide">
          <div className="home-brand" onClick={() => window.location.reload()} style={{cursor: 'pointer'}}>
            <img src={logo} alt="Logo TECHSTORE" className="home-logo-img" />
            <span className="home-brand-name">TECHSTORE</span>
          </div>
          <nav className="home-nav-links">
            <button className="nav-text-btn" onClick={onAboutClick}>Conócenos</button>
            <button className="nav-text-btn" onClick={onHelpClick}>Ayuda</button>
          </nav>
        </div>
      </header>

      <main className="home-blue-section">
        <div className="home-container-wide hero-layout">
          <div className="home-hero-text">
            <h1 className="home-hero-title">Impulsamos la digitalización de microempresas en CDMX</h1>
            <p className="home-hero-subtitle">Soluciones accesibles para administrar productos, ventas y clientes.</p>
            <div className="home-hero-actions">
              <button className="btn-primary-blue" onClick={onLoginClick}>Iniciar sesión</button>
              <button className="btn-secondary-white" onClick={onRegisterClick}>Registrarse</button>
            </div>
          </div>
          <div className="home-hero-image">
            <img src={ilustracionHome} alt="Tienda" className="img-fluid-hero" />
          </div>
        </div>
      </main>

      <footer className="home-white-strip bottom">
        <div className="home-container-wide legal-footer-content">
          <p className="legal-title-small">ESTE PROTOTIPO ESTÁ REGIDO BAJO LAS SIGUIENTES LEYES:</p>
          <ul className="legal-list-small">
            <li>• Ley Federal de Protección de Datos Personales</li>
            <li>• Ley Orgánica del Instituto Politécnico Nacional</li>
            <li>• Ley Federal del Derecho de Autor</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Home;