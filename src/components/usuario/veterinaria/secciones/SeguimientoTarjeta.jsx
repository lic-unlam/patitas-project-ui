import { Link } from "react-router-dom";
import { roles } from "src/utils/constants/user";

export const SeguimientoTarjeta = (props) => {
    const { turnos, rol } = props;
    let urlPrefix = "";

    switch(rol) {
        case roles.adoptante:
            urlPrefix = "/adoptante/mis-seguimientos";
            break;
        case roles.refugio:
            urlPrefix = "/refugio/seguimientos";
            break;
        case roles.veterinaria:
            urlPrefix = "/veterinaria/seguimientos-de-vacunacion"
            break;
    }

    const mostrarNombreDeUsuario = (turno) => {
        switch(rol) {
            case roles.adoptante:
                return turno.nombreVeterinaria;
            case roles.refugio:
                return turno.nombreAdoptante;
            case roles.veterinaria:
                return turno.nombreAdoptante;
            default:
                return "";
        }
    }

    return (
        turnos?.map((turno, index) =>
            <div className="list-group" key={index}>
                <Link to={`${urlPrefix}/${turno.id}`} className={`list-group-item list-group-item-action ${props.desactivada ? "tarjeta-desactivada" : ""}`}>
                    {rol === roles.adoptante ? "Veterinaria:" : "Adoptante:"} <strong>{mostrarNombreDeUsuario(turno)}</strong> ➔ Fecha programada: <strong>{turno.fechaAsignada}</strong> a las {turno.horaAsignada} hs.
                    {turno.porReprogramar && <span style={{'color': 'mediumvioletred', 'fontStyle': 'italic'}}><i className="bi bi-clock h5 align-middle"></i> Pedido de reprogramación enviado</span>}
                    {turno.estaVencido && !turno.estaAplicada && <span style={{'color': 'red', 'fontStyle': 'italic'}}><i className="bi bi-x h5 align-middle"></i> No asistió</span>}
                </Link>
            </div>
        )
    );
}