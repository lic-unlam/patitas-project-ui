import { useState, useCallback, useEffect, useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import { UserContext } from "src/components/layout/LayoutPublic";
import { SolicitudTarjeta } from "../adoptante/secciones/tarjetas/SolicitudTarjeta";
import Loading from "src/components/layout/Loading";

const MisAdopciones = (props) => {
    const { user } = useContext(UserContext); // datos del estado del usuario
    const [solicitudes, setSolicitudes] = useState(null);
    const navigate = useNavigate();
    const sinRegistros = <div className="text-center pt-2 pb-4">
                            <span className="p-2 text-muted">No hay registros que mostrar.</span>
                        </div>;

    const loadSolicitudesDeAdopcion = useCallback(async () => {
        try {
            if(!user)
                throw new Error("No hay usuario logueado.");

            const response = await fetch("https://localhost:7277/api/solicitudes-adopcion/adoptante", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${user.accessToken}`
                }
            });

            if(!response.ok) {
                if(response.status === 403)
                    navigate("/error/forbidden");

                if(response.status === 401)
                    navigate("/error/unauthorized");
                
                throw new Error("Hubo un problema con la solicitud. Código de error " + response.status);
            }
            
            const data = await response.json();
            setSolicitudes(data);
        }
        catch(error) {
            console.log(error.message);
        }
    }, [user]);

    useEffect(() => {
        document.title = props.title.concat(' - ', window.$title);
        loadSolicitudesDeAdopcion();
    }, [user]);

    if(!solicitudes)
        return <Loading />

    return (
        <div id="mis_adopciones_wrapper">
            <hr/>
            <h5 className="title text-center">Solicitudes pendientes de aprobación</h5>
            <hr/>

            <div className="list-group">
                {
                    solicitudes.pendientesDeAprobacion.length > 0 ?
                    <SolicitudTarjeta solicitudes={solicitudes.pendientesDeAprobacion} />
                    : sinRegistros
                }
            </div>
            
            <hr/>
            <h5 className="title text-center">Procesos de adopción en curso</h5>
            <hr/>
            
            <div className="list-group">
                {
                    solicitudes.adopcionesEnCurso.length > 0 ?
                    solicitudes.adopcionesEnCurso.map((solicitud, index) =>
                    <Link to={`/adoptante/mis-adopciones/${solicitud.id}`} className="list-group-item list-group-item-action" key={index}>
                        <div>
                            <h4 className="d-inline-block">Solicitud de adopción Nº {solicitud.id}</h4>
                            <span style={{'color': 'crimson', 'fontStyle': 'italic'}} className="align-text-bottom ms-2"><i className="bi bi-exclamation-diamond-fill h5 align-middle"></i> Sin turno asignado aún</span>
                        </div>
                        <p className="fst-italic">Iniciada el {solicitud.fechaInicio} a las {solicitud.horaInicio} hs.</p>
                        <div>
                            <span className="fs-5">Refugio: </span>
                            <span>San Pedro (Av. del Libertador 4101, Palermo)</span>
                        </div>
                        <div>
                            <span className="fs-5">Animal a adoptar: </span>
                            <span>Chispita</span>
                        </div>
                    </Link>
                    ) : sinRegistros
                }
            </div>

            <hr/>
            <h5 className="title text-center">Adopciones exitosas</h5>
            <hr/>

            <div className="list-group">
                {
                    solicitudes.adopcionesExitosas.length > 0 ?
                    solicitudes.adopcionesExitosas.map((solicitud, index) =>
                    <Link to={`/adoptante/mis-adopciones/${solicitud.id}`} className="list-group-item list-group-item-action" key={index}>
                        <div>
                            <h4 className="d-inline-block">Solicitud de adopción Nº {solicitud.id}</h4>
                        </div>
                        <p className="fst-italic">Iniciada el {solicitud.fechaInicio} a las {solicitud.horaInicio} hs.</p>
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
                    ) : sinRegistros
                }
            </div>

            <hr/>
            <h5 className="title text-center">Adopciones canceladas</h5>
            <hr/>

            <div className="list-group">
                {
                    solicitudes.adopcionesCanceladas.length > 0 ?
                    solicitudes.adopcionesCanceladas.map((solicitud, index) =>
                    <Link to={`/adoptante/mis-adopciones/${solicitud.id}`} className="list-group-item list-group-item-action" key={index}>
                        <div>
                            <h4 className="d-inline-block">Solicitud de adopción Nº {solicitud.id}</h4>
                        </div>
                        <p className="fst-italic">Iniciada el {solicitud.fechaInicio} a las {solicitud.horaInicio} hs.</p>
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
                    ) : sinRegistros
                }
            </div>

            <Outlet/>
        </div>
    );
}

export default MisAdopciones;