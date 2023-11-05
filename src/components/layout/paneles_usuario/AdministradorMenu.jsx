import { Link } from "react-router-dom";

export const AdministradorMenu = () => {
    return (
        <>
            <li>
                <Link className="dropdown-item" to="/administrador/perfil">Datos de perfil</Link>
            </li>
            <div className="dropdown-divider"></div>
            <li>
                <Link className="dropdown-item" to="/administrador/activaciones">Activar refugio/veterinaria</Link>
            </li>
            <li>
                <Link className="dropdown-item" to="/administrador/moderar-foro">Moderar foro</Link>
            </li>
            <li>
                <Link className="dropdown-item" to="/administrador/abm-usuarios">ABM de usuarios</Link>
            </li>
        </>
    );
}