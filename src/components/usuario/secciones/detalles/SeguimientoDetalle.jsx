import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { flushSync } from 'react-dom';

import { CustomModal } from "../../../layout/CustomModal";
import Modal from "../../modal/Modal";
import { CancelarAdopcion } from "../../modal/popups/CancelarAdopcion";
import { ConfirmarAsistencia } from "../../modal/popups/ConfirmarAsistencia";
import { ReprogramarTurno } from "../../modal/popups/ReprogramarTurno";
import PlanDeVacunacion from "../../PlanDeVacunacion";

export const SeguimientoDetalle = () => {
    const [modalActivo, setModalActivo] = useState(''); // por defecto el modal no se carga al DOM
    const accionesModal = {
        confirmarAsistencia: "Confirmar asistencia",
        reprogramarTurno: "Reprogramar turno",
        cancelarAdopcion: "Cancelar adopción"
    }

    const handleModal = (accion) => {
        flushSync(() => {
            setModalActivo(accion); // flushSync me permite actualizar el dom virtual de React antes de seguir con las sentencias
        });
        new bootstrap.Modal(document.querySelector("#modal_popup")).show(); // llamo manualmente al modal
    }

    return (
        <CustomModal>
            <h4 className="title">Reserva para vacunación en la veterinaria "<Link to="/refugios/1">El Arca de Noé</Link>"</h4>
            <hr/>
            <Link to="/adoptantes/1/mis-adopciones/1" className="d-block mb-4">Ver solicitud de adopción</Link>
            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <PlanDeVacunacion />
                </div>
            </div>
            <p className="card-text pt-2 mb-1">Se te ha reservado un turno para la aplicación de la vacuna del Parvovirus (1º dosis) a "Chispita" en la siguiente fecha:</p>
            <p><b>20/11/2022 a las 12:00 hs.</b></p>
            <button type="button" className="btn btn-danger me-0 me-md-4 my-2" data-bs-target="#modal_popup" onClick={() => handleModal(accionesModal.cancelarAdopcion)}>
                <i className="bi bi-x-lg"></i> Cancelar adopción
            </button>
            <button type="button" className="btn btn-success me-0 me-md-4 my-2" data-bs-target="#modal_popup" onClick={() => handleModal(accionesModal.confirmarAsistencia)}>
                <i className="bi bi-check-lg"></i> Confirmo asistencia
            </button>
            <button type="button" className="btn btn-warning my-2" data-bs-target="#modal_popup" onClick={() => handleModal(accionesModal.reprogramarTurno)}>
                <i className="bi bi-clock"></i> Reprogramar turno
            </button>
            <span style={{'color': 'forestgreen', 'fontStyle': 'italic'}} className="d-block"><i className="bi bi-check-lg h2 align-middle"></i> Asistencia confirmada</span>
            <span style={{'color': 'mediumvioletred', 'fontStyle': 'italic'}} className="d-block"><i className="bi bi-clock h2 align-middle"></i> Pedido de reprogramación enviado</span>
            <span style={{'color': 'crimson', 'fontStyle': 'italic'}} className="fw-bold">Has cancelado la adopción. Motivo: me arrepentí de lo que quería hacer</span>
            <small className="d-block pt-3 pb-2 px-4"><i>Nota: en caso de no asistir el día indicado, la veterinaria y/o refugio se contactará contigo via telefónica y/o email. Tenga en cuenta que cumplir con el plan de vacunación es indispensable para completar el proceso de adopción.</i></small>

            {modalActivo === accionesModal.confirmarAsistencia &&
            <Modal title={accionesModal.confirmarAsistencia} ocultarModal={setModalActivo} element={<ConfirmarAsistencia/>}></Modal>}
            {modalActivo === accionesModal.reprogramarTurno &&
            <Modal title={accionesModal.reprogramarTurno} ocultarModal={setModalActivo} element={<ReprogramarTurno/>}></Modal>}
            {modalActivo === accionesModal.cancelarAdopcion &&
            <Modal title={accionesModal.cancelarAdopcion} ocultarModal={setModalActivo} element={<CancelarAdopcion/>}></Modal>}
        </CustomModal>
    );
}