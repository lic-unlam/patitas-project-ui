import { Link, Outlet, useLocation } from "react-router-dom";

const PanelDeRefugio = () => {
    const location = useLocation();

    return (
        <div id="panel_de_usuario_wrapper">
            <h1 className="title">Panel de refugio</h1>
            <ul className="nav nav-underline nav-fill p-4">
                <li className="nav-item">
                    <Link to="/usuarios/1/perfil" className={`nav-link ${location.pathname === "/usuarios/1/perfil" ? "active" : "" }`}><img src="/img/usuarios/perfil_refugio_veterinaria.png" width={32} alt="perfil_refugio_icon" /> Perfil</Link>
                </li>
                <li className="nav-item">
                    <Link to="/usuarios/1/solicitudes-de-adopcion" className={`nav-link ${location.pathname === "/usuarios/1/solicitudes-de-adopcion" ? "active" : "" }`}><img src="/img/usuarios/gato_corazon.png" width={32} alt="adopciones_icon" /> Adopciones</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    );
}

export default PanelDeRefugio;