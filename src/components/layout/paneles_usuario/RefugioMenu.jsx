import { Link } from "react-router-dom";

export const RefugioMenu = () => {
    return (
        <>
            <li>
                <Link className="dropdown-item" to="/refugio/perfil">Datos de perfil</Link>
            </li>
            <div className="dropdown-divider"></div>
            <li>
                <Link className="dropdown-item" to="/refugio/solicitudes">Adopciones</Link>
            </li>
        </>
    );
}