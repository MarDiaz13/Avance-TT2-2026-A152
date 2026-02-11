import React, { useState } from 'react';
import './HelpCenter.css';
import logoStore from '../logo.jpg';

export function HelpCenter({ onBackClick }) {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: '¿Cómo crear una cuenta?',
      a: 'Para crear una cuenta, haz clic en "Regístrate aquí" desde la página de inicio de sesión. Completa el formulario con tu información personal, de contacto y crea una contraseña segura.'
    },
    { 
      q: '¿Cómo recuperar mi contraseña?', 
      a: 'Si olvidaste tu contraseña, haz clic en "¿Olvidaste tu contraseña?" en la página de inicio de sesión. Recibirás un correo electrónico con instrucciones para restablecerla.' 
    },
    { 
      q: '¿Por qué no puedo iniciar sesión después de registrarme?', 
      a: 'Verifica que hayas confirmado tu dirección de correo electrónico haciendo clic en el enlace que te enviamos. También asegúrate de estar usando las credenciales correctas.' 
    },
    { 
      q: '¿Cómo buscar un producto?', 
      a: 'Utiliza la barra de búsqueda en la parte superior de cualquier página. También puedes navegar por categorías en el menú principal para encontrar lo que necesitas.' 
    },
    { 
      q: '¿Cómo agregar productos al carrito?', 
      a: 'En la página del producto que deseas comprar, selecciona las opciones necesarias (como tamaño o color) y haz clic en "Agregar al carrito". El producto se guardará hasta que estés listo para finalizar tu compra.' 
    },
    { 
      q: '¿Puedo modificar la cantidad de producto en el carrito?', 
      a: 'Sí, puedes modificar la cantidad directamente desde tu carrito de compras usando los botones "+" y "-" junto a cada producto. También puedes eliminar productos completamente.' 
    },
    { 
      q: '¿Cómo finalizar mi compra?', 
      a: 'Una vez que hayas agregado todos los productos deseados a tu carrito, haz clic en "Finalizar compra". Completa la información de envío y pago para confirmar tu pedido.' 
    },
    { 
      q: '¿Cuál es el estado de mi pedido?', 
      a: 'Puedes verificar el estado de tu pedido en tu cuenta, en la sección "Mis Pedidos". También recibirás actualizaciones por correo electrónico en cada etapa del proceso de entrega.' 
    }
  ];

  return (
    <div className="help-container">
      {/* Botón de volver */}
      <div className="back-nav">
        <button onClick={onBackClick} className="btn-back">
          <span>← Volver</span>
        </button>
      </div>

      <div className="help-header-main">
        <img src={logoStore} alt="Logo" className="help-logo" />
        <h1 className="help-title-text">Preguntas Frecuentes</h1>
        <p className="help-subtitle-text">Encuentra respuestas a las preguntas más comunes</p>
      </div>

      <div className="faq-list-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-row">
            <button 
              className="faq-trigger" 
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <span>{faq.q}</span>
              <span className={`arrow ${openFaq === index ? 'up' : 'down'}`}>⌵</span>
            </button>
            {openFaq === index && (
              <div className="faq-content">
                <p>{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="help-footer-box">
        <p>¿Necesitas más ayuda?</p>
        <p>Escríbenos a:</p>
        <a href="mailto:correo@techstore.com" className="help-mail">correo</a>
      </div>
    </div>
  );
}