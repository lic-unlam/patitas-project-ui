import { Link } from "react-router-dom";

export const SolicitudesDeAdopcion = () => {
    return (
        <div id="solicitudes_de_adopcion_wrapper">
            <hr/>
            <h5 className="title text-center">Procesos de adopción en curso</h5>
            <hr/>
            <div className="list-group">
                <Link to="/usuarios/1/solicitudes-de-adopcion/1" className="list-group-item list-group-item-action">
                    <div>
                        <h4 className="d-inline-block">Solicitud de adopción Nº 789</h4> <span style={{'color': 'crimson', 'fontStyle': 'italic'}} className="align-text-bottom"><i className="bi bi-exclamation-diamond-fill h5 align-middle"></i> Pendiente de aprobación</span>
                    </div>
                    <p className="fst-italic">Iniciada el 20/11/2022 a las 12:00 hs.</p>
                    <div>
                        <span className="fs-5">Adoptante: </span>
                        <span>adoptante.test (Barrio: Puerto Madero)</span>
                    </div>
                    <div>
                        <span className="fs-5">Animal a adoptar: </span>
                        <span>Chispita</span>
                    </div>
                </Link>
            </div>

            <hr/>
            <h5 className="title text-center">Adopciones exitosas</h5>
            <hr/>

            <div className="list-group">
                <Link to="/usuarios/1/solicitudes-de-adopcion/1" className="list-group-item list-group-item-action">
                    <div>
                        <h4 className="d-inline-block">Solicitud de adopción Nº 789</h4>
                    </div>
                    <p className="fst-italic">Iniciada el 20/11/2022 a las 12:00 hs.</p>
                    <div>
                        <span className="fs-5">Adoptante: </span>
                        <span>adoptante.test (Barrio: Puerto Madero)</span>
                    </div>
                    <div>
                        <span className="fs-5">Animal a adoptar: </span>
                        <span>Chispita</span>
                    </div>
                    <p className="fw-bold text-success mt-2">Concluida el 31/12/2022 a las 18:00 hs.</p>
                </Link>
                <Link to="/usuarios/1/solicitudes-de-adopcion/1" className="list-group-item list-group-item-action">
                    <div>
                        <h4 className="d-inline-block">Solicitud de adopción Nº 789</h4>
                    </div>
                    <p className="fst-italic">Iniciada el 20/11/2022 a las 12:00 hs.</p>
                    <div>
                        <span className="fs-5">Adoptante: </span>
                        <span>adoptante.test (Barrio: Puerto Madero)</span>
                    </div>
                    <div>
                        <span className="fs-5">Animal a adoptar: </span>
                        <span>Chispita</span>
                    </div>
                    <p className="fw-bold text-success mt-2">Concluida el 31/12/2022 a las 18:00 hs.</p>
                </Link>
            </div>

            <hr/>
            <h5 className="title text-center">Adopciones canceladas</h5>
            <hr/>

            <div className="list-group">
                <Link to="/usuarios/1/solicitudes-de-adopcion/1" className="list-group-item list-group-item-action">
                    <div>
                        <h4 className="d-inline-block">Solicitud de adopción Nº 789</h4>
                    </div>
                    <p className="fst-italic">Iniciada el 20/11/2022 a las 12:00 hs.</p>
                    <div>
                        <span className="fs-5">Adoptante: </span>
                        <span>adoptante.test (Barrio: Puerto Madero)</span>
                    </div>
                    <div>
                        <span className="fs-5">Animal a adoptar: </span>
                        <span>Chispita</span>
                    </div>
                    <p className="fw-bold text-danger mt-2">Interrumpida el 22/11/2022 a las 11:00 hs.</p>
                </Link>
            </div>
        </div>
    );
}