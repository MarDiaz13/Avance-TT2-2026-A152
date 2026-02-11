import React from 'react';
import { 
  LayoutDashboard, ShoppingBag, Package, BarChart3, 
  ClipboardList, Users, LogOut, TrendingUp, DollarSign 
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line, Legend 
} from 'recharts';
import Horario from '../../components/Horario';
import './Dashboard.css';

import logoEmpresa from '../../logo.jpg'; 

const dataIngresos = [
  { name: 'Ene', Ingresos: 650 }, { name: 'Feb', Ingresos: 800 },
  { name: 'Mar', Ingresos: 750 }, { name: 'Abr', Ingresos: 900 },
  { name: 'May', Ingresos: 850 }, { name: 'Jun', Ingresos: 950 },
  { name: 'Jul', Ingresos: 1000 },
];

const dataUtilidad = [
  { name: 'Ene', Utilidad: 300 }, { name: 'Feb', Utilidad: 400 },
  { name: 'Mar', Utilidad: 370 }, { name: 'Abr', Utilidad: 480 },
  { name: 'May', Utilidad: 460 }, { name: 'Jun', Utilidad: 550 },
  { name: 'Jul', Utilidad: 560 },
];

export default function Dashboard({ onLogout }) {
  return (
    <div className="dashboard-wrapper">
      <aside className="sidebar-admin">
        <div className="sidebar-brand">
          <div className="brand-wrapper">
            <img src={logoEmpresa} alt="Logo" className="sidebar-logo-img" />
            <div className="brand-text-container">
              <span className="brand-name">TECHSTORE</span>
              <p className="admin-name">Carlos López</p>
            </div>
          </div>
        </div>

        <nav className="nav-menu">
          <div className="nav-item-link active">
            <LayoutDashboard size={20} /> <span>Dashboard</span>
          </div>
          <div className="nav-item-link">
            <Users size={20} /> <span>Usuarios</span>
          </div>
          <div className="nav-item-link">
            <BarChart3 size={20} /> <span>Inventario</span>
          </div>
          <div className="nav-item-link">
            <ClipboardList size={20} /> <span>Reportes</span>
          </div>
          <div className="nav-item-link">
            <ShoppingBag size={20} /> <span>Pedidos</span>
          </div>
          <div className="nav-item-link">
            <Package size={20} /> <span>Productos</span>
          </div>
        </nav>

        <div className="sidebar-status">
          <div className="role-badge">
            <p>Rol actual</p>
            <p>Dueño</p>
          </div>
          <button className="btn-logout" onClick={onLogout}>
            <LogOut size={18} /> <span>Cerrar Sesión</span>
          </button>
        </div>
      </aside>

      <main className="main-viewport">
        <header className="page-header">
          <p className="breadcrumb">INICIO {'>'} Dashboard</p>
          {/* Contenedor optimizado para fecha y hora */}
          <div className="horario-container-flex">
            <Horario />
          </div>
        </header>

        <div className="view-content-scroll">
          <div className="alert-stock">
            <p><strong>⚠ Aviso de Stock Bajo:</strong> Sabritas Originales 45g (8 unidades), Leche Lala Entera 1L (5 unidades), Doritos Nacho 62g (1 unidades)</p>
          </div>

          <div className="stats-container">
            <StatCard title="Ventas del Día" value="$200.00" sub="↑ +10% desde ayer" icon={<DollarSign size={20} color="#3b82f6" />} />
            <StatCard title="Utilidad Total" value="$200.00" sub="↑ +5% desde ayer" icon={<TrendingUp size={20} color="#ef4444" />} />
            <StatCard title="Margen de Ganancia" value="$200.00" sub="Margen 30%" icon={<TrendingUp size={20} color="#10b981" />} />
            <StatCard title="Productos en Stock" value="315" sub="125 disponibles" icon={<Package size={20} color="#8b5cf6" />} />
          </div>

          <div className="charts-grid">
            <div className="table-card">
              <h3 className="chart-title">Ingresos Mensuales</h3>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={dataIngresos} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip cursor={{fill: 'transparent'}} />
                  <Legend verticalAlign="bottom" align="center" iconType="rect" />
                  <Bar dataKey="Ingresos" fill="#2eb85c" radius={[4, 4, 0, 0]} barSize={45} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="table-card">
              <h3 className="chart-title">Utilidad Mensual</h3>
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={dataUtilidad} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Legend verticalAlign="bottom" align="center" iconType="plainline" />
                  <Line type="monotone" dataKey="Utilidad" stroke="#212529" strokeWidth={2} dot={{ r: 4, fill: 'white', strokeWidth: 2 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="table-card">
            <div className="demand-header">
              <h3>Productos con Mayor Demanda</h3>
              <span className="view-all">Ver Todos</span>
            </div>
            <div className="demand-list">
              <DemandItem rank="1" name="Coca-Cola 600ml" cat="Bebidas" price="$15.00" />
              <DemandItem rank="2" name="Sabritas Originales 45g" cat="Botanas" price="$18.00" />
              <DemandItem rank="3" name="Takis Fuego 62g" cat="Botanas" price="$18.00" />
              <DemandItem rank="4" name="Bimbo Pan Blanco Grande" cat="Panadería" price="$38.00" />
              <DemandItem rank="5" name="Leche Lala Entera 1L" cat="Lácteos" price="$22.00" />
            </div>
          </div>

          <footer className="dashboard-footer-text">
            © 2026 TechStore. Todos los derechos reservados.
          </footer>
        </div>
      </main>
    </div>
  );
}

function StatCard({ title, value, sub, icon }) {
  return (
    <div className="stat-box">
      <div>
        <p className="stat-label">{title}</p>
        <h3 className="stat-main-value">{value}</h3>
        <p className="stat-sub">{sub}</p>
      </div>
      <div className="stat-icon-container">{icon}</div>
    </div>
  );
}

function DemandItem({ rank, name, cat, price }) {
  return (
    <div className="demand-row">
      <div className="demand-left">
        <span className="rank-badge-blue">{rank}</span>
        <div>
          <p className="prod-name">{name}</p>
          <p className="prod-cat">{cat}</p>
        </div>
      </div>
      <span className="prod-price">{price}</span>
    </div>
  );
}