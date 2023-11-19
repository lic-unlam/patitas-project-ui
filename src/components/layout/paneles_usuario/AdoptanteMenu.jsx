import { Link } from "react-router-dom";

export const AdoptanteMenu = () => {
    return (
        <>
            <li>
                <Link className="dropdown-item" to="/adoptante/datos-personales">Datos personales</Link>
            </li>
            <div className="dropdown-divider"></div>
            {/*<li>
                <Link className="dropdown-item" to="/adoptante/formulario-pre-adopcion">Formulario pre-adopción</Link>
            </li>*/}
            <li>
                <Link className="dropdown-item" to="/adoptante/mis-adopciones">Mis adopciones</Link>
            </li>
            <li>
                <Link className="dropdown-item" to="/adoptante/mis-turnos">Mis turnos</Link>
            </li>
            <li>
                <Link className="dropdown-item" to="/adoptante/mis-seguimientos">Mis seguimientos</Link>
            </li>
        </>
    );
}