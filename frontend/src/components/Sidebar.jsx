    // Componente para navegar por los links del Dashboard y Fuente de datos
    import { NavLink } from 'react-router-dom';

    export default function Navbar() {
      return (
        <div className="bg-primary text-white px-4 py-3 d-flex align-items-center justify-content-between">
          
          {/* <div className="fs-3 fw-bold">Trabajo Fin de Master</div> */}
      <NavLink to="/" className="text-white text-decoration-none fs-3 fw-bold">
        Trabajo Fin de Máster
      </NavLink>           
          <nav className="d-flex gap-3">

            <NavLink
              to="/datos-loan"
              className={({ isActive }) =>
                `btn btn-outline-light ${isActive ? 'active' : ''}`
              }
            >
              Fuente de datos
            </NavLink>

            <NavLink
              to="/visualizaciones"
              className={({ isActive }) =>
                `btn btn-outline-light ${isActive ? 'active' : ''}`
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/modelo"
              className={({ isActive }) =>
                `btn btn-outline-light ${isActive ? 'active' : ''}`
              }
            >
              Modelo
            </NavLink>

          </nav>
        </div>
      );
    }
