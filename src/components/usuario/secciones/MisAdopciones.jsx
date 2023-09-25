import { Link, Outlet } from "react-router-dom";

const MisAdopciones = () => {
    return (
        <div id="mis_adopciones_wrapper">
            <hr/>
            <h5 className="title text-center">Solicitudes pendientes de aprobación</h5>
            <hr/>
            <div className="list-group">
                <Link to="/adoptantes/1/mis-adopciones/1" className="list-group-item list-group-item-action">
                    <div>
                        <h4 className="d-inline-block">Solicitud de adopción Nº 789</h4>
                        <span style={{'color': 'crimson', 'fontStyle': 'italic'}} className="align-text-bottom ms-2"><i className="bi bi-exclamation-diamond-fill h5 align-middle"></i> Pendiente de aprobación</span>
                    </div>
                    <p className="fst-italic">Iniciada el 20/11/2022 a las 12:00 hs.</p>
                    <div>
                        <span className="fs-5">Refugio: </span>
                        <span>San Pedro (Av. del Libertador 4101, Palermo)</span>
                    </div>
                    <div>
                        <span className="fs-5">Animal a adoptar: </span>
                        <span>Chispita</span>
                    </div>
                </Link>
            </div>
            <hr/>
            <h5 className="title text-center">Procesos de adopción en curso</h5>
            <hr/>
            <div className="list-group">
                <Link to="/adoptantes/1/mis-adopciones/1" className="list-group-item list-group-item-action">
                    <div>
                        <h4 className="d-inline-block">Solicitud de adopción Nº 789</h4>
                        <span style={{'color': 'crimson', 'fontStyle': 'italic'}} className="align-text-bottom ms-2"><i className="bi bi-exclamation-diamond-fill h5 align-middle"></i> Sin turno asignado aún</span>
                    </div>
                    <p className="fst-italic">Iniciada el 20/11/2022 a las 12:00 hs.</p>
                    <div>
                        <span className="fs-5">Refugio: </span>
                        <span>San Pedro (Av. del Libertador 4101, Palermo)</span>
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
                <Link to="/adoptantes/1/mis-adopciones/1" className="list-group-item list-group-item-action">
                    <div>
                        <h4 className="d-inline-block">Solicitud de adopción Nº 789</h4>
                    </div>
                    <p className="fst-italic">Iniciada el 20/11/2022 a las 12:00 hs.</p>
                    <div>
                        <span className="fs-5">Refugio: </span>
                        <span>San Pedro (Av. del Libertador 4101, Palermo)</span>
                    </div>
                    <div>
                        <span className="fs-5">Animal a adoptar: </span>
                        <span>Chispita</span>
                    </div>
                    <p className="fw-bold text-success mt-2">Concluida el 31/12/2022 a las 18:00 hs.</p>
                </Link>
                <Link to="/adoptantes/1/mis-adopciones/1" className="list-group-item list-group-item-action">
                    <div>
                        <h4 className="d-inline-block">Solicitud de adopción Nº 789</h4>
                    </div>
                    <p className="fst-italic">Iniciada el 20/11/2022 a las 12:00 hs.</p>
                    <div>
                        <span className="fs-5">Refugio: </span>
                        <span>San Pedro (Av. del Libertador 4101, Palermo)</span>
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
                <Link to="/adoptantes/1/mis-adopciones/1" className="list-group-item list-group-item-action">
                    <div>
                        <h4 className="d-inline-block">Solicitud de adopción Nº 789</h4>
                    </div>
                    <p className="fst-italic">Iniciada el 20/11/2022 a las 12:00 hs.</p>
                    <div>
                        <span className="fs-5">Refugio: </span>
                        <span>San Pedro (Av. del Libertador 4101, Palermo)</span>
                    </div>
                    <div>
                        <span className="fs-5">Animal a adoptar: </span>
                        <span>Chispita</span>
                    </div>
                    <p className="fw-bold text-danger mt-2">Interrumpida el 22/11/2022 a las 11:00 hs.</p>
                </Link>
            </div>

            <Outlet/>
        </div>
    );
}

export default MisAdopciones;