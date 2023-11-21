import { useState, useEffect, useCallback, useContext } from "react";
import { flushSync } from 'react-dom';
import { Link, useNavigate, useParams } from "react-router-dom";

import { CustomModal } from "src/components/layout/CustomModal";
import { UserContext } from "src/components/layout/LayoutPublic";
import Loading from "src/components/layout/Loading";
import { RegistrarVacunacion } from "./RegistrarVacunacion";

export const SeguimientoDetalleVeterinaria = (props) => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const { seguimientoId } = useParams();

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
            const response = await fetch(`https://localhost:7277/api/veterinaria/seguimientos/${seguimientoId}`, {
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

    const marcarAsistencia = async () => {
        try {
            const response = await fetch("https://localhost:7277/api/veterinaria/seguimientos", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${user.accessToken}`
                },
                body: JSON.stringify({
                    seguimientoId: seguimientoId,
                    solicitudId: turno.solicitudId
                })
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

    useEffect(() => {
        document.title = props.title.concat(' - ', window.$title);
        
        if(user)
            loadTurno();
    }, [loadTurno]);

    if(JSON.stringify(turno) === '{}')
        return (
            <CustomModal>
                <Loading />
            </CustomModal>
        );
    
    return (
        <CustomModal>
            <h4 className="title">Cita reservada para el adoptante "{turno.nombreAdoptante}"</h4>
            <hr/>

            {
            turno.estaAplicada &&
                <div className="alert alert-success border-success py-2">
                    <b>"{turno.nombreAdoptante}" asistió para vacunar al animal.</b>
                </div>
            }

            {/*
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
            */}

            <Link to={`/veterinaria/adopciones-vinculadas/${turno.solicitudId}`}>Ver solicitud de adopción</Link>

            {
                showRegistrarAsistenciaForm ?
                <RegistrarVacunacion userData={user} setShowRegistrarAsistenciaForm={setShowRegistrarAsistenciaForm} />
                : 
                <>
                    <p className="card-text pt-3">El adoptante debe asistir en la siguiente fecha para la vacunación del animal:</p>
                
                    <figure>
                        <img src="/img/clock.png" className="img-fluid" width={70} alt="reloj" />
                    </figure>
                    <p className="title fs-4">{turno.fechaAsignada} a las {turno.horaAsignada} hs.</p>
                    {
                        turno.estaActivo && !turno.estaAplicada &&
                        <button type="button" className="btn btn-seguimiento" onClick={marcarAsistencia}>Registrar vacunación</button>
                    }
                    
                    {turno.porReprogramar && <span style={{'color': 'mediumvioletred', 'fontStyle': 'italic'}} className="fs-5"><i className="bi bi-clock h2 align-middle"></i> {turno.nombreAdoptante} solicitó reprogramación del turno</span>}
                </>
            }
            
            <small className="d-block pt-3 pb-2"><i>Datos de contacto: Correo ({turno.emailAdoptante}) - Teléfono: ({turno.telefono})</i></small>
            
        </CustomModal>
    );
}