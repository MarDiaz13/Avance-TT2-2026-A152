import React, { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registrer from "./pages/Registrer"; 
import ForgotPassword from "./pages/ForgotPassword";
import { About } from "./pages/About"; 
import { HelpCenter } from "./pages/HelpCenter"; 
import DashboardAdmin from "./pages/Superadministrador/Dashboard"; 
import DashboardDueno from "./pages/Dueno/Dashboard"; 
import logoStore from "./logo.jpg"; 

function App() {
  const [currentView, setCurrentView] = useState('home'); 

  const renderView = () => {
    switch (currentView) {
      // 1. VISTAS PÚBLICAS (Navegación del Home)
      case 'home':
        return (
          <Home 
            logo={logoStore} 
            onLoginClick={() => setCurrentView('login')} 
            onRegisterClick={() => setCurrentView('register')}
            onAboutClick={() => setCurrentView('about')} 
            onHelpClick={() => setCurrentView('help')} 
          />
        );

      case 'about':
        return <About logo={logoStore} onBackClick={() => setCurrentView('home')} />;

      case 'help':
        return <HelpCenter onBackClick={() => setCurrentView('home')} />;

      // 2. VISTAS DE AUTENTICACIÓN
      case 'login':
        return (
          <Login 
            logo={logoStore} 
            onBackClick={() => setCurrentView('home')} 
            onRegisterClick={() => setCurrentView('register')}
            onForgotClick={() => setCurrentView('forgot-password')}
            onLoginSuccess={(rolPath) => setCurrentView(rolPath)}
          />
        );

      case 'register':
        return <Registrer logo={logoStore} onBackClick={() => setCurrentView('login')} onRegisterSuccess={() => setCurrentView('login')} />;

      case 'forgot-password':
        return <ForgotPassword logo={logoStore} onBackClick={() => setCurrentView('login')} />;

      // 3. RUTAS DE USUARIOS (Sincronizadas con usuariosPrueba.js)
      case '/superadmin/dashboard':
        return <DashboardAdmin onLogout={() => setCurrentView('home')} />;

      case '/dueno/dashboard':
        return <DashboardDueno onLogout={() => setCurrentView('home')} />;

      case '/empleado/pos':
        return (
          <div style={{ padding: '100px', textAlign: 'center', fontFamily: 'sans-serif' }}>
            <h1>Punto de Venta - Empleado</h1>
            <button onClick={() => setCurrentView('home')}>Cerrar Sesión</button>
          </div>
        );

      case '/cliente/catalogo':
        return (
          <div style={{ padding: '100px', textAlign: 'center', fontFamily: 'sans-serif' }}>
            <h1>Catálogo de Clientes</h1>
            <button onClick={() => setCurrentView('home')}>Cerrar Sesión</button>
          </div>
        );

      // Si el estado no coincide con nada, vuelve al Home
      default:
        return <Home logo={logoStore} onLoginClick={() => setCurrentView('login')} />;
    }
  };

  return <div className="App">{renderView()}</div>;
}

export default App;