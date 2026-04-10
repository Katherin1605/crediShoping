import { Outlet, NavLink } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <div className="dash">
        <h1>CrediShoping</h1>
        <p>Bienvenido al panel de control de CrediShoping.</p>
      </div>

      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/"><i class="bi bi-columns-gap"></i> Dashboard</NavLink>
          <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/customers"><i class="bi bi-people"></i> Clientes</NavLink>
          <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/products"><i class="bi bi-box-seam"></i> Productos</NavLink>
          <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/shopping"><i class="bi bi-cart"></i> Compras</NavLink>
          <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/sales"><i class="bi bi-currency-dollar"></i> Ventas</NavLink>
          <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/payments"><i class="bi bi-credit-card"></i> Pagos</NavLink>
          <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/admin"><i class="bi bi-shield"></i> Administradores</NavLink>
          <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/audit"><i class="bi bi-file-earmark-text"></i> Auditoría</NavLink>
        </div>
      </nav>

      {/* Aquí se renderizan las vistas */}
      <Outlet />
    </>
  );
};

export default Layout;