import React, { useState } from "react";
import { flushSync } from 'react-dom';
import { Link } from "react-router-dom";
import Modal from "./modal/Modal";
import { CancelarAdopcion } from "./modal/popups/CancelarAdopcion";
import { ConfirmarAsistencia } from "./modal/popups/ConfirmarAsistencia";
import { ReprogramarTurno } from "./modal/popups/ReprogramarTurno";

export const TurnoDetalle = () => {
    const accionesModal = {
        confirmarAsistencia: "Confirmar asistencia",
        reprogramarTurno: "Reprogramar turno",
        cancelarAdopcion: "Cancelar adopción"
    }

    const [modalActivo, setModalActivo] = useState(''); // por defecto el modal no se carga al DOM

    const handleModal = (accion) => {
        flushSync(() => {
            setModalActivo(accion); // flushSync me permite actualizar el dom virtual de React antes de seguir con las sentencias
        });
        new bootstrap.Modal(document.querySelector("#modal_popup")).show(); // llamo manualmente al modal
    }

    return (
        <div className="card mb-2 text-center">
            <div className="card-body">
                <h5 className="card-title">Turno pendiente para visitar el refugio "<Link to="/shelter/1">San Pedro</Link>"</h5>
                <button className="btn btn-sm btn-success">Ver solicitud de adopción</button>
                <p className="card-text pt-2 mb-1">Se te ha reservado un turno para visitar el refugio en la siguiente fecha:</p>
                <p><b>20/11/2022 a las 12:00 hs.</b></p>
                <button type="button" className="btn btn-danger me-4" data-bs-target="#modal_popup" onClick={() => handleModal(accionesModal.cancelarAdopcion)}>
                    <i className="bi bi-x-lg"></i> Cancelar adopción
                </button>
                <button type="button" className="btn btn-primary me-4" data-bs-target="#modal_popup" onClick={() => handleModal(accionesModal.confirmarAsistencia)}>
                    <i className="bi bi-check-lg"></i> Confirmo asistencia
                </button>
                <button type="button" className="btn btn-secondary" data-bs-target="#modal_popup" onClick={() => handleModal(accionesModal.reprogramarTurno)}>
                    <i className="bi bi-clock"></i> Reprogramar turno
                </button>
                <span style={{'color': 'forestgreen', 'fontStyle': 'italic'}} className="d-block"><i className="bi bi-check-lg h2 align-middle"></i> Asistencia confirmada</span>
                <span style={{'color': 'brown', 'fontStyle': 'italic'}}><i className="bi bi-clock h2 align-middle"></i> Solicitud de reprogramación enviada</span>
                <small className="d-block pt-3 pb-2"><i>Nota: en caso de no asistir el día indicado, el refugio se contactará contigo via telefónica y/o email.</i></small>
            </div>
            {modalActivo === accionesModal.confirmarAsistencia &&
            <Modal title={accionesModal.confirmarAsistencia} ocultarModal={setModalActivo} element={<ConfirmarAsistencia/>}></Modal>}
            {modalActivo === accionesModal.reprogramarTurno &&
            <Modal title={accionesModal.reprogramarTurno} ocultarModal={setModalActivo} element={<ReprogramarTurno/>}></Modal>}
            {modalActivo === accionesModal.cancelarAdopcion &&
            <Modal title={accionesModal.cancelarAdopcion} ocultarModal={setModalActivo} element={<CancelarAdopcion/>}></Modal>}
        </div>
    );
}