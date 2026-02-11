import React from 'react';
import { 
  LayoutDashboard, Package, ShoppingCart, ClipboardList, 
  BarChart3, Users, Bell, Wallet, LogOut 
} from 'lucide-react';
import './Dashboard.css';

export default function Dashboard({ onLogout }) {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <ShoppingCart size={20} color="#1e3a8a" />
          </div>
          <div>
            <h1 style={{fontSize: '14px', fontWeight: 'bold', margin: 0}}>TECHSTORE</h1>
            <p style={{fontSize: '10px', opacity: 0.7, margin: 0}}>Super Admin</p>
          </div>
        </div>

        <nav className="nav-menu">
          <div className="nav-item active"><LayoutDashboard size={18} /> Dashboard</div>
          <div className="nav-item"><Package size={18} /> Productos</div>
          <div className="nav-item"><ShoppingCart size={18} /> Ventas</div>
          <div className="nav-item"><ClipboardList size={18} /> Inventario</div>
          <div className="nav-item"><BarChart3 size={18} /> Reportes</div>
          <div className="nav-item"><Users size={18} /> Usuarios</div>
        </nav>

        <div className="sidebar-footer">
          <div className="role-box">
            <p style={{fontSize: '10px', opacity: 0.8, margin: '0 0 4px 0'}}>Rol actual</p>
            <p style={{fontSize: '13px', fontWeight: 'bold', margin: 0}}>Superadministrador</p>
          </div>
          <button 
            onClick={onLogout}
            style={{background: 'none', border: 'none', color: '#f87171', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px'}}
          >
            <LogOut size={18} /> Cerrar Sesión
          </button>
        </div>
      </aside>

      <main className="main-content">
        <header className="header-top">
          <div>
            <p style={{fontSize: '12px', color: '#64748b', margin: 0}}>Inicio {'>'} Panel de Control</p>
            <h2 style={{fontSize: '24px', fontWeight: 'bold', color: '#1e293b', margin: 0}}>Panel de Control</h2>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
            <button style={{display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', background: 'white', fontWeight: '500', fontSize: '14px'}}>
              <Wallet size={18} color="#1e3a8a" /> Información Bancaria
            </button>
            <div style={{textAlign: 'right', fontSize: '12px', color: '#64748b'}}>
              <p style={{margin: 0}}>Martes, 6 de enero de 2026</p>
              <p style={{margin: 0}}>03:29:13</p>
            </div>
          </div>
        </header>

        <div className="alert-stock">
          <Bell size={20} color="#f59e0b" />
          <div>
            <p style={{fontSize: '14px', fontWeight: 'bold', color: '#92400e', margin: 0}}>Alerta de Stock Bajo</p>
            <p style={{fontSize: '12px', color: '#b45309', margin: 0}}>3 producto(s) con stock bajo: Sabritas Originales 45g, Leche Lala Entera 1L, Doritos Nacho 62g</p>
          </div>
        </div>

        <div className="metrics-grid">
          <MetricCard title="Ventas del Día" value="$0.0K" sub="+8.37% vs mes anterior" icon="$" color="blue" />
          <MetricCard title="Utilidad Total" value="$0.2K" sub="-4.37% vs mes anterior" icon="📉" color="red" />
          <MetricCard title="Margen de Ganancia" value="$0.2K" sub="Margen: 31.9%" icon="📈" color="green" />
          <MetricCard title="Productos en Stock" value="315" sub="3 productos bajos" icon="📦" color="purple" />
        </div>

        <div className="products-table-card">
          <div style={{padding: '20px 24px', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <h3 style={{margin: 0, fontSize: '16px', fontWeight: 'bold'}}>Productos con Mayor Ganancia</h3>
            <button style={{color: '#2563eb', border: 'none', background: 'none', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer'}}>Ver todos</button>
          </div>
          <ProductRow rank="1" name="Doritos Nacho 62g" info="Vendidos: 5 unidades" price="$35.00" trend="+53.8%" />
          <ProductRow rank="2" name="Pepsi 600ml" info="Vendidos: 6 unidades" price="$30.00" trend="+50.0%" />
          <ProductRow rank="3" name="Takis Fuego 62g" info="Vendidos: 4 unidades" price="$24.00" trend="+42.9%" />
          <ProductRow rank="4" name="Cheetos Poffs 42g" info="Vendidos: 3 unidades" price="$18.00" trend="+50.0%" />
          <ProductRow rank="5" name="Coca-Cola 600ml" info="Vendidos: 3 unidades" price="$15.00" trend="+50.0%" />
        </div>

        <footer className="legal-banner">
          <p style={{fontSize: '11px', fontWeight: '900', color: '#1e40af', margin: '0 0 8px 0', textTransform: 'uppercase'}}>
            Este prototipo está regido bajo las siguientes leyes:
          </p>
          <ul style={{fontSize: '10px', color: '#1e40af', listStyle: 'none', padding: 0, margin: 0}}>
            <li>• Ley Federal de Protección de Datos Personales en Posesión de los Particulares</li>
            <li>• Ley Orgánica del Instituto Politécnico Nacional</li>
            <li>• Ley Federal del Derecho de Autor</li>
          </ul>
        </footer>
      </main>
    </div>
  );
}

function MetricCard({ title, value, sub, icon, color }) {
  const iconColors = {
    blue: { bg: '#eff6ff', text: '#2563eb' },
    red: { bg: '#fef2f2', text: '#ef4444' },
    green: { bg: '#f0fdf4', text: '#10b981' },
    purple: { bg: '#f5f3ff', text: '#7c3aed' }
  };

  return (
    <div className="metric-card">
      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '12px'}}>
        <span style={{fontSize: '12px', color: '#64748b', fontWeight: '500'}}>{title}</span>
        <span style={{
          backgroundColor: iconColors[color].bg, 
          color: iconColors[color].text,
          padding: '6px',
          borderRadius: '8px',
          fontSize: '14px'
        }}>{icon}</span>
      </div>
      <h4 style={{fontSize: '24px', fontWeight: 'bold', margin: '0 0 4px 0'}}>{value}</h4>
      <p style={{fontSize: '11px', fontWeight: 'bold', margin: 0, color: color === 'red' ? '#ef4444' : '#10b981'}}>{sub}</p>
    </div>
  );
}

function ProductRow({ rank, name, info, price, trend }) {
  return (
    <div className="product-row">
      <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
        <span style={{background: '#1e3a8a', color: 'white', width: '24px', height: '24px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold'}}>{rank}</span>
        <div>
          <p style={{fontSize: '14px', fontWeight: 'bold', margin: 0}}>{name}</p>
          <p style={{fontSize: '12px', color: '#94a3b8', margin: 0}}>{info}</p>
        </div>
      </div>
      <div style={{textAlign: 'right'}}>
        <p style={{fontSize: '14px', fontWeight: 'bold', margin: 0}}>{price}</p>
        <p style={{fontSize: '12px', color: '#10b981', fontWeight: 'bold', margin: 0}}>{trend}</p>
      </div>
    </div>
  );
}