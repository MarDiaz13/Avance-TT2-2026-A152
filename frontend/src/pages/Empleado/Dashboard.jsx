import React from 'react';
import { 
  LayoutDashboard, ShoppingBag, ClipboardList, Package, 
  Store, LogOut, Wallet, Bell, AlertTriangle
} from 'lucide-react';

export default function DashboardEmpleado({ onLogout }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'sans-serif' }}>
      {/* Barra Lateral Izquierda (Azul) */}
      <aside style={{ width: '260px', backgroundColor: '#0c215a', color: 'white', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '24px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Store size={24} />
            <div>
              <span style={{ fontWeight: 'bold', fontSize: '16px', display: 'block' }}>TECHSTORE</span>
              <span style={{ fontSize: '10px', opacity: 0.8 }}>Carlos López</span>
            </div>
          </div>
        </div>

        <nav style={{ flex: 1, padding: '20px 0' }}>
          <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active />
          <NavItem icon={<ShoppingBag size={20} />} label="Registrar Venta" />
          <NavItem icon={<ClipboardList size={20} />} label="Pedidos" />
          <NavItem icon={<Package size={20} />} label="Inventario" />
        </nav>

        <div style={{ padding: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '8px', marginBottom: '15px' }}>
            <p style={{ fontSize: '10px', opacity: 0.6, margin: '0 0 4px 0' }}>Rol actual</p>
            <p style={{ fontSize: '13px', fontWeight: 'bold', margin: 0 }}>Empleado</p>
          </div>
          <button 
            onClick={onLogout}
            style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'none', border: 'none', color: '#f87171', cursor: 'pointer', width: '100%', fontSize: '14px', fontWeight: 'bold' }}
          >
            <LogOut size={18} /> Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Contenido Principal */}
      <main style={{ flex: 1, padding: '30px' }}>
        <header style={{ marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Inicio {'>'} Panel de Control</p>
            <h2 style={{ fontSize: '26px', fontWeight: 'bold', color: '#0c215a', margin: 0 }}>Panel de Control</h2>
          </div>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', background: 'white', fontWeight: '600', fontSize: '13px', cursor: 'pointer' }}>
              <Wallet size={18} color="#0c215a" /> Información Bancaria
            </button>
            <div style={{ textAlign: 'right', fontSize: '12px', color: '#64748b' }}>
              <p style={{ margin: 0 }}>Martes, 6 de enero de 2026</p>
              <p style={{ margin: 0 }}>15:13:39</p>
            </div>
          </div>
        </header>

        {/* Tarjetas de Resumen Superior */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '30px' }}>
          <StatCard title="Ventas del Día" value="$0.0K" subtext="0 transacciones" icon={<ShoppingBag size={20} color="#10b981" />} />
          <StatCard title="Productos Disponibles" value="315" subtext="12 tipos" icon={<Package size={20} color="#3b82f6" />} />
          <StatCard title="Stock Bajo" value="3" subtext="Requiere atención" icon={<AlertTriangle size={20} color="#f59e0b" />} />
        </div>

        {/* Alerta de Productos con Stock Bajo */}
        <div style={{ backgroundColor: '#fffbeb', border: '1px solid #fde68a', borderRadius: '12px', padding: '15px 20px', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <AlertTriangle size={20} color="#d97706" />
          <p style={{ margin: 0, fontSize: '13px', color: '#92400e' }}>
            <strong>Productos con Stock Bajo:</strong> Sabritas Originales 45g (8 unidades), Leche Lala Entera 1L (3 unidades), Doritos Nacho 62g (5 unidades)
          </p>
        </div>

        {/* Tabla de Inventario (Estado del Inventario) */}
        <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '25px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
          <h3 style={{ margin: '0 0 20px 0', fontSize: '16px', fontWeight: 'bold', color: '#0c215a' }}>Estado del Inventario</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #f1f5f9', textAlign: 'left' }}>
                <th style={{ padding: '12px 0', fontSize: '12px', color: '#64748b' }}>Producto / Categoría</th>
                <th style={{ padding: '12px 0', fontSize: '12px', color: '#64748b', textAlign: 'right' }}>Disponibilidad / Precio</th>
              </tr>
            </thead>
            <tbody>
              <InventoryRow name="Coca-Cola 600ml" category="Bebidas" stock="48 unidades" price="$15.00" />
              <InventoryRow name="Sabritas Originales 45g" category="Botanas" stock="8 unidades" price="$18.00" isLow />
              <InventoryRow name="Ruffles Queso 55g" category="Botanas" stock="35 unidades" price="$20.00" />
              <InventoryRow name="Bimbo Pan Blanco Grande" category="Panadería" stock="12 unidades" price="$38.00" />
              <InventoryRow name="Leche Lala Entera 1L" category="Lácteos" stock="3 unidades" price="$22.00" isLow />
            </tbody>
          </table>
        </div>

        {/* Footer Legal */}
        <footer style={{ marginTop: '40px', padding: '20px', backgroundColor: '#eff6ff', borderRadius: '12px', border: '1px solid #dbeafe' }}>
          <p style={{ fontSize: '11px', fontWeight: 'bold', color: '#1e40af', margin: '0 0 10px 0' }}>ESTE PROTOTIPO ESTÁ REGIDO BAJO LAS SIGUIENTES LEYES:</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: '20px', fontSize: '10px', color: '#1e40af' }}>
            <li>• Ley Federal de Protección de Datos Personales</li>
            <li>• Ley Orgánica del IPN</li>
            <li>• Ley Federal del Derecho de Autor</li>
          </ul>
        </footer>
      </main>
    </div>
  );
}

// Sub-componentes para organización
function NavItem({ icon, label, active = false }) {
  return (
    <div style={{ 
      display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 24px', cursor: 'pointer',
      backgroundColor: active ? 'rgba(255,255,255,0.1)' : 'transparent',
      borderLeft: active ? '4px solid #3b82f6' : '4px solid transparent',
      transition: 'all 0.2s'
    }}>
      {icon}
      <span style={{ fontSize: '14px', fontWeight: active ? 'bold' : '500' }}>{label}</span>
    </div>
  );
}

function StatCard({ title, value, subtext, icon }) {
  return (
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <span style={{ color: '#64748b', fontSize: '12px', fontWeight: '500' }}>{title}</span>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#0c215a', margin: '5px 0' }}>{value}</h3>
        <span style={{ fontSize: '11px', color: '#94a3b8' }}>{subtext}</span>
      </div>
      <div style={{ backgroundColor: '#f8fafc', padding: '10px', borderRadius: '10px', height: 'fit-content' }}>
        {icon}
      </div>
    </div>
  );
}

function InventoryRow({ name, category, stock, price, isLow = false }) {
  return (
    <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
      <td style={{ padding: '15px 0' }}>
        <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', color: '#1e293b' }}>{name}</p>
        <p style={{ margin: 0, fontSize: '11px', color: '#94a3b8' }}>{category}</p>
      </td>
      <td style={{ padding: '15px 0', textAlign: 'right' }}>
        <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', color: isLow ? '#ef4444' : '#10b981' }}>{stock}</p>
        <p style={{ margin: 0, fontSize: '11px', color: '#64748b' }}>{price}</p>
      </td>
    </tr>
  );
}