import { Link } from "react-router-dom";

export const SolicitudTarjeta = (props) => {
    const { solicitudes } = props;

    return (
        solicitudes?.map((solicitud, index) =>
            <Link to={`/adoptante/mis-adopciones/${solicitud.id}`} className="list-group-item list-group-item-action" key={index}>
                <div>
                    <h4 className="d-inline-block">Solicitud de adopción Nº {solicitud.id}</h4>
                    {!solicitud.aprobada && <span style={{'color': 'crimson', 'fontStyle': 'italic'}} className="align-text-bottom ms-2"><i className="bi bi-exclamation-diamond-fill h5 align-middle"></i> Pendiente de aprobación</span>}
                </div>
                <p className="fst-italic">Iniciada el {solicitud.fechaInicio} a las {solicitud.horaInicio} hs.</p>
                <div>
                    <span className="fs-5">Refugio: </span>
                    <span>{solicitud.nombre} ({solicitud.ubicacion})</span>
                </div>
                <div>
                    <span className="fs-5">Animal a adoptar: </span>
                    <span>{solicitud.nombreAnimal}</span>
                </div>
            </Link>
        )
    );
}