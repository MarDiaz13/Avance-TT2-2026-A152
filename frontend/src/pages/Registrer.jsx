import React, { useState } from "react";
import { ArrowLeft, ShieldCheck } from "lucide-react";

function Registrer({ logo, onBackClick, onRegisterSuccess }) {
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    correo: "",
    telefono: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    console.log("Datos enviados:", formData);
    onRegisterSuccess();
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

      <div style={{ backgroundColor: 'white', padding: '35px 45px', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', width: '100%', maxWidth: '480px', boxSizing: 'border-box' }}>
        <h2 style={{ color: '#1e40af', marginBottom: '25px', fontSize: '22px', fontWeight: 'bold', textAlign: 'center' }}>Crear Cuenta</h2>
        
        <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
          {[
            { label: "Nombres *", name: "nombres", type: "text" },
            { label: "Apellidos *", name: "apellidos", type: "text" },
            { label: "Correo Electrónico *", name: "correo", type: "email" },
            { label: "Teléfono *", name: "telefono", type: "tel" },
            { label: "Contraseña *", name: "password", type: "password" },
            { label: "Confirmar Contraseña *", name: "confirmPassword", type: "password" }
          ].map((field, index) => (
            <div key={index} style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', marginBottom: '5px', color: '#0c215a' }}>{field.label}</label>
              <input 
                type={field.type} 
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required 
                style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }} 
              />
            </div>
          ))}

          <div style={{ display: 'flex', alignItems: 'flex-start', margin: '20px 0', gap: '10px' }}>
            <input type="checkbox" required style={{ marginTop: '3px' }} />
            <p style={{ fontSize: '11px', color: '#64748b', margin: 0, lineHeight: '1.4' }}>
              Al registrarme como cliente de TECHSTORE, acepto que los datos personales sean tratados conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
            </p>
          </div>

          <button type="submit" style={{ width: '100%', padding: '14px', backgroundColor: '#0c215a', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' }}>
            Registrarme
          </button>
        </form>

        <p onClick={onBackClick} style={{ fontSize: '14px', color: '#1e40af', cursor: 'pointer', textAlign: 'center', marginTop: '15px' }}>
          ¿Ya tienes cuenta? <span style={{ fontWeight: 'bold' }}>Inicia sesión aquí</span>
        </p>
      </div>

      {/* Marco Legal */}
      <div style={{ marginTop: '30px', backgroundColor: 'white', padding: '20px', borderRadius: '15px', width: '100%', maxWidth: '480px', boxShadow: '0 4px 10px rgba(0,0,0,0.03)', boxSizing: 'border-box' }}>
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

export default Registrer;