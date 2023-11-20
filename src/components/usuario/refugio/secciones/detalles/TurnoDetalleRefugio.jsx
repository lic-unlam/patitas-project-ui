import { useState, useEffect, useCallback, useContext } from "react";
import { flushSync } from 'react-dom';
import { Link, useNavigate, useParams } from "react-router-dom";

import { CustomModal } from "src/components/layout/CustomModal";
import { UserContext } from "src/components/layout/LayoutPublic";
import Loading from "src/components/layout/Loading";
import { RegistrarAsistencia } from "./RegistrarAsistencia";
import { MarcarSolicitudParaSeguimiento } from "./MarcarSolicitudParaSeguimiento";

export const TurnoDetalleRefugio = (props) => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const { turnoId } = useParams();
    const [ turno, setTurno ] = useState({});
    const [ modalActivo, setModalActivo ] = useState(''); // por defecto el modal no se carga al DOM
    const [ showRegistrarAsistenciaForm, setShowRegistrarAsistenciaForm ] = useState(false);
    const [ showMarcarParaSeguimientoForm, setShowMarcarParaSeguimientoForm ] = useState(false);

    const handleModal = (accion) => {
        flushSync(() => {
            setModalActivo(accion); // flushSync me permite actualizar el dom virtual de React antes de seguir con las sentencias
        });

        new bootstrap.Modal(document.querySelector("#modal_popup")).show(); // llamo manualmente al modal
    }

    const loadTurno = useCallback(async () => {
        try {
            const response = await fetch(`https://localhost:7277/api/refugios/turnos/${turnoId}`, {
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
            setTurno(data);
        }
        catch(error) {
            console.log(error);
        }
    }, [user]);

    useEffect(() => {
        document.title = props.title.concat(' - ', window.$title);
        
        if(user)
            loadTurno();
    }, [loadTurno]);

    const marcarAsistencia = async () => {
        try {
            const response = await fetch("https://localhost:7277/api/refugios/turnos", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${user.accessToken}`
                },
                body: turnoId
            });

            if(!response.ok) {
                if(response.status === 403)
                    navigate("/error/forbidden");

                if(response.status === 401)
                    navigate("/error/unauthorized");
                
                throw new Error("Hubo un problema con la solicitud. Código de error " + response.status);
            }

            window.location.reload();
        }
        catch(error) {
            console.log(error);
        }
    }

    const habilitarSeguimiento = async (solicitudId) => {
        try {
            const response = await fetch(`https://localhost:7277/api/solicitudes/${solicitudId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
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

            navigate(`/refugio/solicitudes/${solicitudId}`);
        }
        catch(error) {
            console.log(error);
        }
    }

    if(JSON.stringify(turno) === '{}')
        return (
            <CustomModal>
                <Loading />
            </CustomModal>
        );

    return (
        <CustomModal>
            <h4 className="title">Turno del adoptante "{turno.nombreAdoptante}"</h4>
            <hr/>

            {
            turno.asistio &&
                <div className="alert alert-success border-success py-2">
                    <b>"{turno.nombreAdoptante}" asistió al encuentro:</b>
                    <div className="fst-italic">{turno.informeDeVisita}</div>
                </div>
            }

            {
                turno.solicitudEnEtapaDeSeguimiento ?
                <>
                <hr/>
                <h5 style={{'color': 'blueviolet'}} className="fw-bold">La solicitud está en etapa de seguimiento.</h5>
                </>
                : (turno.asistio) &&
                    <div>
                        {
                        showMarcarParaSeguimientoForm ? <MarcarSolicitudParaSeguimiento solicitudId={turno.solicitudId} refugioId={turno.refugioId} setShowMarcarParaSeguimientoForm={setShowMarcarParaSeguimientoForm} />
                        : <button className="btn btn-warning mb-4" onClick={() => setShowMarcarParaSeguimientoForm(true)}>Marcar solicitud para etapa de seguimiento</button>
                        }
                    </div>
            }

            <Link to={`/refugio/solicitudes/${turno.solicitudId}`}>Ver solicitud de adopción</Link>

            {
                showRegistrarAsistenciaForm ?
                <RegistrarAsistencia userData={user} setShowRegistrarAsistenciaForm={setShowRegistrarAsistenciaForm} />
                : 
                <>
                    <p className="card-text pt-3">Asignaste un turno para la visita del adoptante en la siguiente fecha:</p>
                
                    <figure>
                        <img src="/img/clock.png" className="img-fluid" width={70} alt="reloj" />
                    </figure>
                    <p className="title fs-4">{turno.fechaTurno} a las {turno.horaTurno} hs.</p>
                    {
                        turno.estaActivo && !turno.asistio &&
                        <button type="button" className="btn btn-turnos" onClick={() => setShowRegistrarAsistenciaForm(true)}>Registrar asistencia</button>
                    }

                    {turno.estaConfirmado && <span style={{'color': 'forestgreen', 'fontStyle': 'italic'}} className="d-block fs-5"><i className="bi bi-check-lg h2 align-middle"></i> {turno.nombreAdoptante} confirmó asistencia</span>}
                    {turno.porReprogramar && <span style={{'color': 'mediumvioletred', 'fontStyle': 'italic'}} className="fs-5"><i className="bi bi-clock h2 align-middle"></i> {turno.nombreAdoptante} solicitó reprogramación del turno</span>}
                </>
            }
            
            <small className="d-block pt-3 pb-2"><i>Datos de contacto: Correo ({turno.emailAdoptante}) - Teléfono: ({turno.telefono})</i></small>
            
        </CustomModal>
    );
}