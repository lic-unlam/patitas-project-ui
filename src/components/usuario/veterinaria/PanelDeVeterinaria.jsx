import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const PanelDeVeterinaria = (props) => {
    const location = useLocation();
	const { pathname } = location; // obtengo el path actual

    return (
        <div id="panel_de_veterinaria_wrapper">
            <h1 className="title">Panel de veterinaria</h1>
            <ul className="nav nav-underline nav-fill p-4">
                <li className="nav-item">
                    <Link to="/veterinaria/perfil" className={`nav-link ${location.pathname === "/veterinaria/perfil" ? "active" : "" }`}><img src="/img/usuarios/perfil_refugio_veterinaria.png" width={32} alt="perfil_veterinaria_icon" /> Perfil</Link>
                </li>
                <li className="nav-item">
                    <Link to="/veterinaria/seguimientos-de-vacunacion" className={`nav-link ${location.pathname === "/veterinaria/seguimientos-de-vacunacion" ? "active" : "" }`}><img src="/img/usuarios/jeringa.png" width={32} alt="solicitudes_icon" /> Seguimientos</Link>
                </li>
                <li className="nav-item">
                    <Link to="/veterinaria/planes-de-vacunacion" className={`nav-link ${location.pathname === "/veterinaria/planes-de-vacunacion" ? "active" : "" }`}><img src="/img/usuarios/plan_de_vacunacion.png" width={32} alt="plan_de_vacunacion_icon" /> Planes de vacunación</Link>
                </li>
                <li className="nav-item">
                    <Link to="/veterinaria/adopciones-vinculadas" className={`nav-link ${location.pathname === "/veterinaria/adopciones-vinculadas" ? "active" : "" }`}><img src="/img/usuarios/gato_corazon.png" width={32} alt="seguimientos_icon" /> Adopciones</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    );
}

export default PanelDeVeterinaria;