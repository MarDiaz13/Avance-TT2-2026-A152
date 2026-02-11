import React from 'react';
import { 
  ArrowLeft, Store, Heart, Package, TrendingUp, Clock, 
  AlertCircle, ShoppingBag, ShieldCheck, CheckCircle, 
  DollarSign, FileText 
} from 'lucide-react';
import './About.css';

export function About({ onBackClick, logo }) {
  return (
    <div className="about-page-container">
     
      <button onClick={onBackClick} className="back-button-link-top">
        <ArrowLeft size={16} /> Volver
      </button>

      <div className="about-content-wrapper">
        
        <div className="about-card hero-card">
          <div className="card-body text-center">
            <img src={logo} alt="Logo" className="about-logo-img" />
            <h1 className="about-card-title">Conócenos</h1>
            <p className="about-card-subtitle">
              TECHSTORE es un <strong>prototipo de aplicación web</strong> creado para apoyar a las tienditas de la esquina de la Ciudad de México, esas que son parte del corazón de cada barrio.
            </p>
          </div>
          <img 
            src="https://www.altonivel.com.mx/wp-content/uploads/2020/08/tiendita-jpg.webp" 
            className="card-full-img" 
            alt="Mercado local o barrio" 
          />
        </div>

        
        <div className="about-card card-body">
          <h2 className="section-blue-title">¿Qué es TECHSTORE?</h2>
          <p className="section-text-p">
            TECHSTORE es un <strong>prototipo de aplicación web</strong> diseñado pensando en las tienditas de la esquina: esos pequeños comercios que atienden don Pepe o doña Mary, donde todos se conocen por nombre y que están ahí cuando necesitas algo rápido.
          </p>
          <p className="section-text-p mt-10">
            Este <strong>prototipo de aplicación web</strong> muestra cómo la tecnología puede ayudar a estas tienditas a llevar mejor sus cuentas, saber qué tienen en el inventario, registrar las ventas del día y hasta permitir que los clientes del barrio puedan ver qué hay en la tienda desde su celular.
          </p>
        </div>

        
        <div className="about-card">
          <div className="card-body">
            <div className="title-with-icon-row">
              <div className="icon-blue-circle"><Store size={18} color="white" /></div>
              <h2 className="section-blue-title">Las Tienditas de la Esquina</h2>
            </div>
            <p className="section-text-p mb-15">
              Este <strong>prototipo de aplicación web</strong> está pensado específicamente para esas tienditas que son parte fundamental de los barrios en la CDMX:
            </p>
            <div className="info-grid-row">
              <div className="info-item-blue">
                <Store size={14} /> La tiendita del barrio donde conocen a todos los vecinos.
              </div>
              <div className="info-item-blue">
                <ShoppingBag size={14} /> El abarrote familiar que lleva años sirviendo a la comunidad.
              </div>
            </div>
          </div>
          <img 
            src="https://marketing4ecommerce.mx/wp-content/uploads/2020/07/Tienda-abarrotes-compressor.jpg" 
            className="card-full-img" 
            alt="Tiendita de la esquina con gente" 
          />
        </div>

        
        <div className="about-card card-body">
          <div className="title-with-icon-row">
            <div className="icon-blue-circle"><AlertCircle size={18} color="white" /></div>
            <h2 className="section-blue-title">Los Retos del Día a Día</h2>
          </div>
          <p className="section-text-p mb-15">
            Sabemos que administrar una tiendita de la esquina no es nada fácil. Atender desde temprano hasta tarde, y muchas veces no te alcanza el tiempo para todo:
          </p>
          <div className="retos-stack">
            <div className="reto-card-item">
              <Clock className="blue-icon" size={18} />
              <div>
                <strong>No Alcanza el Tiempo</strong>
                <p>Entre atender clientes, acomodar la mercancía, limpiar y recibir a los proveedores, ¿cuándo queda tiempo para llevar bien las cuentas?</p>
              </div>
            </div>
            <div className="reto-card-item">
              <Package className="blue-icon" size={18} />
              <div>
                <strong>Los Cuadernos se Pierden</strong>
                <p>Anotar todo a mano es tardado, los cuadernos se maltratan, las hojas se manchan y luego no encuentras la información cuando la necesitas.</p>
              </div>
            </div>
            <div className="reto-card-item">
              <TrendingUp className="blue-icon" size={18} />
              <div>
                <strong>Se Acaba lo que Más Vende</strong>
                <p>No te das cuenta que ya no tienes Coca-Colas o que se acabaron los Sabritas hasta que llega un cliente a pedirlos.</p>
              </div>
            </div>
            <div className="reto-card-item">
              <DollarSign className="blue-icon" size={18} />
              <div>
                <strong>¿Cuánto Vendí Hoy?</strong>
                <p>Al final del día cuentas el dinero, pero no sabes bien cuánto vendiste, qué producto dejó más ganancia, o si realmente fue un buen día.</p>
              </div>
            </div>
            <div className="reto-card-item">
              <FileText className="blue-icon" size={18} />
              <div>
                <strong>Las Cuentas de los Proveedores</strong>
                <p>Entre tickets, notas y facturas de varios proveedores, a veces se complica saber exactamente cuánto debes o cuándo te tienen que entregar.</p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="about-card card-body">
          <h2 className="section-blue-title">¿Cómo Puede Ayudar Este Prototipo?</h2>
          <p className="section-text-p mb-15">
            Este <strong>prototipo de aplicación web</strong> muestra cómo la tecnología podría facilitar el día a día de una tiendita de la esquina:
          </p>
          <div className="benefits-three-cols">
            <div className="benefit-col">
              <span className="role-tag">Para el Dueño</span>
              <ul className="benefits-list">
                <li><CheckCircle size={12} color="#2563eb" /> Ver cuánto vendiste hoy o esta semana</li>
                <li><CheckCircle size={12} color="#2563eb" /> Saber qué productos dejan más ganancia</li>
                <li><CheckCircle size={12} color="#2563eb" /> Alertas cuando un producto se está acabando</li>
              </ul>
            </div>
            <div className="benefit-col">
              <span className="role-tag">Para el Empleado</span>
              <ul className="benefits-list">
                <li><CheckCircle size={12} color="#2563eb" /> Registrar ventas con código de barras</li>
                <li><CheckCircle size={12} color="#2563eb" /> Consultar precios al instante</li>
                <li><CheckCircle size={12} color="#2563eb" /> Actualizar inventario fácilmente</li>
              </ul>
            </div>
            <div className="benefit-col">
              <span className="role-tag">Para los Clientes</span>
              <ul className="benefits-list">
                <li><CheckCircle size={12} color="#2563eb" /> Ver qué productos hay disponibles</li>
                <li><CheckCircle size={12} color="#2563eb" /> Hacer pedidos desde el celular</li>
                <li><CheckCircle size={12} color="#2563eb" /> Recoger cuando les convenga</li>
              </ul>
            </div>
          </div>
          <img 
            src="https://i.blogs.es/99f294/abarrotes/500_333.jpeg" 
            className="card-full-img mt-15" 
            alt="Interior de tiendita con productos" 
          />
        </div>

        
        <div className="about-card card-body">
          <div className="title-with-icon-row">
            <div className="icon-blue-circle"><Heart size={18} color="white" /></div>
            <h2 className="section-blue-title">Por Qué las Tienditas Son Importantes</h2>
          </div>
          <p className="section-text-p">
            Las tienditas de la esquina son mucho más que un lugar donde compras cosas. Son parte de la vida del barrio, son el lugar donde te encuentras con los vecinos, donde puedes comprar algo a las 9 de la noche cuando ya cerraron los supermercados, y donde te fían cuando andas corto de dinero.
          </p>
          <p className="section-text-p mt-10">
            En la Ciudad de México, hay miles de estas tienditas. Son negocios familiares que le dan trabajo a familias completas y que están ahí, día tras día, sirviendo a su comunidad. Este <strong>prototipo de aplicación web</strong> busca mostrar que la tecnología no es solo para las grandes empresas, también puede ayudar a las tienditas del barrio.
          </p>
        </div>

        
        <div className="about-card card-body">
          <h2 className="section-blue-title">Lo Que Este Prototipo Representa</h2>
          <div className="light-blue-box mb-15">
            <p className="section-text-p">
              TECHSTORE es un <strong>prototipo de aplicación web</strong> que demuestra cómo la tecnología puede ser simple y útil para las tienditas de la esquina. Usa datos de ejemplo para mostrar que las herramientas digitales no son solo para grandes empresas, sino que también pueden ayudar a los pequeños negocios de barrio.
            </p>
          </div>
          <img 
            src="https://tiendatek.info/wp-content/uploads/3-productos-para-tienda-de-barrio.jpg" 
            className="card-full-img" 
            alt="Estante de abarrotes de tiendita" 
          />
          <p className="section-text-p text-center mt-15">
            Este <strong>prototipo de aplicación web</strong> es un homenaje a todas las tienditas de la esquina que hacen que nuestros barrios sean más que solo calles y edificios.
          </p>
        </div>

        
        <div className="about-legal-card">
          <ShieldCheck size={28} color="#0c215a" />
          <div className="legal-info">
            <p className="legal-header">ESTE PROTOTIPO ESTÁ REGIDO BAJO LAS SIGUIENTES LEYES:</p>
            <ul>
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