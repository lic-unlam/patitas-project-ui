import React, { useState, useEffect, useCallback, useContext } from "react";
import { flushSync } from 'react-dom';
import { Link, useNavigate, useParams } from "react-router-dom";

import { CustomModal } from "../../../layout/CustomModal";
import Modal from "../../modal/Modal";
import { CancelarAdopcion } from "../../modal/popups/CancelarAdopcion";
import { ConfirmarAsistencia } from "../../modal/popups/ConfirmarAsistencia";
import { ReprogramarTurno } from "../../modal/popups/ReprogramarTurno";
import Loading from "src/components/layout/Loading";
import { UserContext } from "src/components/layout/LayoutPublic";

export const TurnoDetalle = (props) => {
    const navigate = useNavigate();
    const [ modalActivo, setModalActivo ] = useState(''); // por defecto el modal no se carga al DOM
    const { user } = useContext(UserContext);
    const { turnoId } = useParams();
    const [ turno, setTurno ] = useState({});

    const accionesModal = {
        confirmarAsistencia: "Confirmar asistencia",
        reprogramarTurno: "Reprogramar turno",
        cancelarAdopcion: "Cancelar adopción"
    }

    const handleModal = (accion) => {
        flushSync(() => {
            setModalActivo(accion); // flushSync me permite actualizar el dom virtual de React antes de seguir con las sentencias
        });
        //setModalActivo(accion, new bootstrap.Modal(document.querySelector("#modal_popup")).show());
        new bootstrap.Modal(document.querySelector("#modal_popup")).show(); // llamo manualmente al modal
    }

    const loadTurno = useCallback(async () => {
        try {
            const response = await fetch(`https://localhost:7277/api/adoptante/turnos/${turnoId}`, {
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

    const confirmarAsistenciaSubmit = async () => {
        try {
            const response = await fetch("https://localhost:7277/api/adoptante/turnos", {
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

    if(JSON.stringify(turno) === '{}')
        return (
            <CustomModal>
                <Loading />
            </CustomModal>
        );

    return (
        <CustomModal>
            <h4 className="title">Turno para el refugio "<Link to={`/refugios/${turno.refugioId}/animales`}>{turno.nombreRefugio}</Link>"</h4>
            <hr/>

            {
            turno.asistio &&
                <div className="alert alert-success border-success py-2">
                    Asististe al encuentro con el refugio.
                </div>
            }

            <Link to={`/adoptante/mis-adopciones/${turno.solicitudId}`} className="btn btn-sm btn-dark">Ver solicitud de adopción</Link>
            <p className="card-text pt-3">Se te ha reservado un turno para visitar el refugio en la siguiente fecha:</p>
            <figure>
                <img src="/img/clock.png" className="img-fluid" width={70} alt="reloj" />
            </figure>
            <p className="title fs-4">{turno.fechaTurno} a las {turno.horaTurno} hs.</p>
            {(turno.estaActivo && !turno.estaConfirmado && !turno.porReprogramar) &&
            <>
                <button type="button" className="btn btn-danger me-0 me-md-4 my-2" data-bs-target="#modal_popup" onClick={() => handleModal(accionesModal.cancelarAdopcion)}>
                    <i className="bi bi-x-lg"></i> Cancelar adopción
                </button>
                <button type="button" className="btn btn-success me-0 me-md-4 my-2" data-bs-target="#modal_popup" onClick={() => handleModal(accionesModal.confirmarAsistencia)}>
                    <i className="bi bi-check-lg"></i> Confirmo asistencia
                </button>
                <button type="button" className="btn btn-warning my-2" data-bs-target="#modal_popup" onClick={() => handleModal(accionesModal.reprogramarTurno)}>
                    <i className="bi bi-clock"></i> Reprogramar turno
                </button>
            </>
            }
            {turno.estaConfirmado && <span style={{'color': 'forestgreen', 'fontStyle': 'italic'}} className="d-block fs-5"><i className="bi bi-check-lg h2 align-middle"></i> Asistencia confirmada</span>}
            {turno.porReprogramar && <span style={{'color': 'mediumvioletred', 'fontStyle': 'italic'}} className="fs-5"><i className="bi bi-clock h2 align-middle"></i> Pedido de reprogramación enviado</span>}
            <small className="d-block pt-3 pb-2"><i>Nota: en caso de no asistir el día indicado, el refugio se contactará contigo via telefónica y/o email.</i></small>

            {
            modalActivo === accionesModal.confirmarAsistencia &&
                <Modal
                    onSubmit={confirmarAsistenciaSubmit}
                    title={accionesModal.confirmarAsistencia}
                    ocultarModal={setModalActivo}
                >
                    <ConfirmarAsistencia turno={turno}/>
                </Modal>
            }

            {
            modalActivo === accionesModal.reprogramarTurno &&
                <Modal
                    title={accionesModal.reprogramarTurno}
                    ocultarModal={setModalActivo}
                >   
                    <ReprogramarTurno turno={turno} />
                </Modal>
            }

            {
            modalActivo === accionesModal.cancelarAdopcion &&
                <Modal
                    title={accionesModal.cancelarAdopcion}
                    ocultarModal={setModalActivo}
                >
                    <CancelarAdopcion/>
                </Modal>
            }
        </CustomModal>
    );
}