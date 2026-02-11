import React, { useState } from "react";
import { Mail, Lock, ArrowLeft, ShieldCheck } from "lucide-react";
import { usuariosPrueba } from "./usuariosPrueba";

function Login({ logo, onBackClick, onRegisterClick, onForgotClick, onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Buscamos si el usuario existe en nuestro archivo de pruebas
    const usuarioEncontrado = usuariosPrueba.find(
      (u) => u.email === email && u.password === password
    );

    if (usuarioEncontrado) {
   
      onLoginSuccess(usuarioEncontrado.path); 
    } else {
      alert("Correo o contraseña incorrectos. Intenta con los datos de prueba.");
    }
  };

  return (
    <div style={{ backgroundColor: '#dbeafe', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', fontFamily: 'sans-serif' }}>
      
      <div style={{ width: '100%', maxWidth: '1000px', alignSelf: 'flex-start', marginBottom: '10px' }}>
        <button onClick={onBackClick} style={{ cursor: 'pointer', border: 'none', background: 'none', display: 'flex', alignItems: 'center', color: '#0c215a', fontSize: '14px', padding: '0' }}>
          <ArrowLeft size={16} style={{ marginRight: '5px' }} /> Volver
        </button>
      </div>

      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <img src={logo} alt="Logo" style={{ width: '80px', marginBottom: '10px' }} />
        <h1 style={{ color: '#0c215a', fontSize: '28px', fontWeight: 'bold', margin: '0' }}>TECHSTORE</h1>
        <p style={{ fontSize: '18px', color: '#1e40af', marginTop: '15px', maxWidth: '550px', lineHeight: '1.4', fontWeight: '500' }}>
          Prototipo de aplicación web para el apoyo de la administración de microempresas en la CDMX
        </p>
      </header>

      <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', width: '100%', maxWidth: '420px', textAlign: 'center', boxSizing: 'border-box' }}>
        <h2 style={{ color: '#000', marginBottom: '30px', fontSize: '24px', fontWeight: 'bold' }}>Iniciar Sesión</h2>
        
        <form onSubmit={handleSubmit}>
          <div style={{ textAlign: 'left', marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', marginBottom: '8px', color: '#0c215a' }}>Correo Electrónico *</label>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '10px' }}>
              <Mail size={16} style={{ marginRight: '10px', color: '#94a3b8' }} />
              <input 
                type="email" 
                placeholder="ejemplo@correo.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                style={{ border: 'none', outline: 'none', width: '100%', fontSize: '14px' }} 
              />
            </div>
          </div>

          <div style={{ textAlign: 'left', marginBottom: '15px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', marginBottom: '8px', color: '#0c215a' }}>Contraseña *</label>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '10px' }}>
              <Lock size={16} style={{ marginRight: '10px', color: '#94a3b8' }} />
              <input 
                type="password" 
                placeholder="********" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                style={{ border: 'none', outline: 'none', width: '100%', fontSize: '14px' }} 
              />
            </div>
          </div>

          <p onClick={onForgotClick} style={{ fontSize: '14px', color: '#1e40af', cursor: 'pointer', marginBottom: '20px', textAlign: 'center' }}>
            ¿Olvidaste tu contraseña?
          </p>

          <button type="submit" style={{ width: '100%', padding: '14px', backgroundColor: '#0c215a', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' }}>
            Ingresar
          </button>
        </form>

        <div style={{ marginTop: '20px' }}>
          <p style={{ fontSize: '14px', color: '#000' }}>
            ¿No tienes una cuenta? <span onClick={onRegisterClick} style={{ color: '#1e40af', fontWeight: 'bold', cursor: 'pointer' }}>Regístrate aquí</span>
          </p>
        </div>
      </div>

      <div style={{ marginTop: '30px', backgroundColor: 'white', padding: '20px', borderRadius: '15px', width: '100%', maxWidth: '420px', boxShadow: '0 4px 10px rgba(0,0,0,0.03)', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <ShieldCheck size={20} style={{ color: '#0c215a', marginRight: '12px', flexShrink: 0 }} />
          <div>
            <p style={{ color: '#1e40af', fontSize: '11px', fontWeight: 'bold', margin: '0 0 10px 0' }}>
              ESTE PROTOTIPO ESTÁ REGIDO BAJO LAS SIGUIENTES LEYES:
            </p>
            <ul style={{ listStyle: 'none', padding: '0', margin: '0', color: '#000', fontSize: '10px', lineHeight: '1.6' }}>
              <li>• Ley Federal de Protección de Datos Personales en Posesión de los Particulares</li>
              <li>• Ley Orgánica del Instituto Politécnico Nacional</li>
              <li>• Ley Federal del Derecho de Autor</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;