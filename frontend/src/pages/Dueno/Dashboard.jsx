import React from 'react';
import { 
  LayoutDashboard, Package, ShoppingCart, Users, 
  Store, TrendingUp, DollarSign, LogOut,
  BarChart3, Wallet, Bell
} from 'lucide-react';
import './Dashboard.css'; 

export default function Dashboard({ onLogout }) {
  return (
    <div className="dashboard-wrapper">
      <aside className="sidebar-admin">
        <div className="sidebar-brand">
          <div className="brand-info">
            <Store size={24} />
            <span style={{ fontWeight: 'bold', fontSize: '18px' }}>TECHSTORE</span>
          </div>
          <p style={{ fontSize: '10px', opacity: 0.7, margin: '4px 0 0 0' }}>PANEL ADMINISTRATIVO</p>
        </div>

        <nav className="nav-menu">
          <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active />
          <NavItem icon={<Package size={20} />} label="Productos" />
          <NavItem icon={<Users size={20} />} label="Proveedores" />
          <NavItem icon={<ShoppingCart size={20} />} label="Ventas" />
          <NavItem icon={<BarChart3 size={20} />} label="Reportes" />
        </nav>

        <div className="sidebar-status">
          <div className="role-badge">
            <p style={{ fontSize: '10px', opacity: 0.6, margin: '0 0 4px 0' }}>Rol actual</p>
            <p style={{ fontSize: '13px', fontWeight: 'bold', margin: 0 }}>Dueño de Tienda</p>
          </div>
          <button onClick={onLogout} className="btn-logout">
            <LogOut size={18} /> Cerrar Sesión
          </button>
        </div>
      </aside>

      <main className="main-viewport">
        <header className="page-header">
          <div>
            <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Inicio {'>'} Panel de Control</p>
            <h2 style={{ fontSize: '26px', fontWeight: 'bold', color: '#0c215a', margin: 0 }}>Panel de Control</h2>
          </div>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', background: 'white', fontWeight: '600', cursor: 'pointer' }}>
              <Wallet size={18} color="#0c215a" /> Información Bancaria
            </button>
            <div style={{ textAlign: 'right', fontSize: '12px', color: '#64748b' }}>
              <p style={{ margin: 0 }}>Martes, 6 de enero de 2026</p>
              <p style={{ margin: 0 }}>12:52:58</p>
            </div>
          </div>
        </header>

        <div className="alert-stock">
          <Bell size={20} color="#d97706" />
          <div>
            <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', color: '#92400e' }}>Alerta de Stock Bajo</p>
            <p style={{ margin: 0, fontSize: '12px', color: '#b45309' }}>3 producto(s) requieren reabastecimiento pronto.</p>
          </div>
        </div>

        <div className="stats-container">
          <StatCard title="Ventas Hoy" value="$0.0K" icon={<DollarSign size={16} />} color="#2563eb" />
          <StatCard title="Utilidad" value="$0.2K" icon={<TrendingUp size={16} />} color="#3b82f6" />
          <StatCard title="Gastos" value="$5.8K" icon={<TrendingUp size={16} />} color="#ef4444" rotate />
          <StatCard title="Margen" value="31.9%" icon="%" color="#a855f7" />
          <StatCard title="Productos" value="315" icon={<Package size={16} />} color="#f97316" />
        </div>

        <div className="table-card">
          <h3 style={{ margin: '0 0 20px 0', fontSize: '16px', color: '#0c215a' }}>Ganancia por Producto</h3>
          <table className="data-table">
            <tbody>
              <TableRow name="Doritos Nacho 62g" stock="5" sold="5" price="$35.00" trend="+53.8%" />
              <TableRow name="Pepsi 600ml" stock="42" sold="6" price="$30.00" trend="+50.0%" />
              <TableRow name="Takis Fuego 62g" stock="18" sold="4" price="$24.00" trend="+42.9%" />
            </tbody>
          </table>
        </div>

        <footer className="footer-legal">
          <p style={{ fontSize: '11px', fontWeight: 'bold', color: '#1e40af' }}>SISTEMA REGIDO POR LEYES DE PROTECCIÓN DE DATOS MEXICANAS.</p>
        </footer>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false }) {
  return (
    <div className={`nav-item-link ${active ? 'active' : ''}`}>
      {icon} <span>{label}</span>
    </div>
  );
}

function StatCard({ title, value, icon, color, rotate }) {
  return (
    <div className="stat-box">
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
        <span style={{ color: '#64748b', fontSize: '12px' }}>{title}</span>
        <div style={{ color: color, transform: rotate ? 'rotate(180deg)' : 'none' }}>{icon}</div>
      </div>
      <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#0c215a' }}>{value}</span>
    </div>
  );
}

function TableRow({ name, stock, sold, price, trend }) {
  return (
    <tr>
      <td style={{ padding: '15px 0' }}>
        <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>{name}</p>
        <span style={{ fontSize: '11px', color: '#94a3b8' }}>Stock: {stock} | Vendidos: {sold}</span>
      </td>
      <td style={{ textAlign: 'right' }}>
        <p style={{ margin: 0, fontWeight: 'bold' }}>{price}</p>
        <span style={{ fontSize: '11px', color: '#10b981' }}>{trend}</span>
      </td>
    </tr>
  );
}