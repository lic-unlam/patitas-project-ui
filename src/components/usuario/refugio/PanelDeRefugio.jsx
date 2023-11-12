import { Link, Outlet, useLocation } from "react-router-dom";

const PanelDeRefugio = () => {
    const location = useLocation();

    return (
        <div id="panel_de_usuario_wrapper">
            <h1 className="title">Panel de refugio</h1>
            <ul className="nav nav-underline nav-fill p-4">
                <li className="nav-item">
                    <Link to="/refugio/perfil" className={`nav-link ${location.pathname === "/refugio/perfil" ? "active" : "" }`}><img src="/img/usuarios/perfil_refugio_veterinaria.png" width={32} alt="perfil_refugio_icon" /> Perfil</Link>
                </li>
                <li className="nav-item">
                    <Link to="/refugio/solicitudes" className={`nav-link ${location.pathname === "/refugio/solicitudes" ? "active" : "" }`}><img src="/img/usuarios/gato_corazon.png" width={32} alt="solicitudes_icon" /> Solicitudes</Link>
                </li>
                <li className="nav-item">
                    <Link to="/refugio/turnos" className={`nav-link ${location.pathname === "/refugio/turnos" ? "active" : "" }`}><img src="/img/usuarios/turnos.png" width={32} alt="turnos_icon" /> Turnos</Link>
                </li>
                <li className="nav-item">
                    <Link to="/refugio/seguimientos" className={`nav-link ${location.pathname === "/refugio/seguimientos" ? "active" : "" }`}><img src="/img/usuarios/jeringa.png" width={32} alt="seguimientos_icon" /> Seguimientos</Link>
                </li>
                <li className="nav-item">
                    <Link to="/refugio/abm-animales" className={`nav-link ${location.pathname === "/refugio/abm-animales" ? "active" : "" }`}><img src="/img/usuarios/gato.png" width={32} alt="abm_animales_icon" /> ABM animales</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    );
}

export default PanelDeRefugio;