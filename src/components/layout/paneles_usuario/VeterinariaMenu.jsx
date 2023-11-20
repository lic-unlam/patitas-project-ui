import { Link } from "react-router-dom";

export const VeterinariaMenu = () => {
    return (
        <>
            <li>
                <Link className="dropdown-item" to="/veterinaria/perfil">Datos de perfil</Link>
            </li>
            <div className="dropdown-divider"></div>
            <li>
                <Link className="dropdown-item" to="/veterinaria/seguimientos-de-vacunacion">Seguimientos de vacunación</Link>
            </li>
            <li>
                <Link className="dropdown-item" to="/veterinaria/planes-de-vacunacion">Planes de vacunación</Link>
            </li>
            <li>
                <Link className="dropdown-item" to="/veterinaria/adopciones-vinculadas">Adopciones vinculadas</Link>
            </li>
        </>
    );
}