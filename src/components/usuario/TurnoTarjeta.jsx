import { Link } from "react-router-dom";
import { roles } from "src/utils/constants/user";

export const TurnoTarjeta = (props) => {
    const { turnos, rol } = props;
    let urlPrefix = "";

    switch(rol) {
        case roles.adoptante:
            urlPrefix = "/adoptante/mis-turnos";
            break;
        case roles.refugio:
            urlPrefix = "/refugio/turnos";
            break;
    }

    return (
        turnos?.map((turno, index) =>
            <div className="list-group" key={index}>
                <Link to={`${urlPrefix}/${turno.id}`} className="list-group-item list-group-item-action">
                    {rol === roles.adoptante ? "Refugio:" : "Adoptante:"} <strong>{turno.nombre}</strong> ➔ Fecha programada: <strong>{turno.fechaProgramada}</strong> a las {turno.horaProgramada} hs.
                    {turno.estaConfirmado && <span style={{'color': 'forestgreen', 'fontStyle': 'italic'}} className="ps-2"><i className="bi bi-check-lg h5 align-middle"></i> Asistencia confirmada</span>}
                    {turno.porReprogramar && <span style={{'color': 'mediumvioletred', 'fontStyle': 'italic'}}><i className="bi bi-clock h5 align-middle"></i> Pedido de reprogramación enviado</span>}
                    {turno.estaVencido && !turno.asistio && <span style={{'color': 'red', 'fontStyle': 'italic'}}><i className="bi bi-x h5 align-middle"></i> No asistió</span>}
                </Link>
            </div>
        )
    );
}