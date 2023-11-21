import { useState, useCallback, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import PlanDeVacunacion from "src/components/usuario/PlanDeVacunacion";
import { CustomModal } from "src/components/layout/CustomModal";
import { scrollToTop } from "src/utils/scrollToTop";
import Loading from "src/components/layout/Loading";
import { UserContext } from "src/components/layout/LayoutPublic";

export const SolicitudDetalle = (props) => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext); // cargo el usuario logueado
    const { solicitudId } = useParams(); // obtengo el id de la solicitud
    const [ solicitudDetalle, setSolicitudDetalle ] = useState({}); // contiene la información de la solicitud

    const [contenidoModal, setContenidoModal] = useState({
        mostrar: false,
        componente: null,
        customButtons: false
    });

    const getSolicitudDetalle = useCallback(async () => {
        try {
            const response = await fetch(`https://localhost:7277/api/refugios/solicitudes/${solicitudId}`, {
                method: "GET",
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

                throw new Error("Hubo un problema con la solicitud. Código: " + response.status);
            }
            
            const data = await response.json();
            setSolicitudDetalle(data); // seteo el estado para poder ver la información de solicitud
        }
        catch(error) {
            console.log(error.message);
        }
    }, [user]);

    useEffect(() => {
        document.title = props.title.concat(' - ', window.$title);

        if (user)
            getSolicitudDetalle();
    }, [getSolicitudDetalle]);

    //const [estadoAdopcion, setEstadoAdopcion] = useState("Pendiente de aprobación");

    if(JSON.stringify(solicitudDetalle) === '{}')
        return (
            <Loading />
        );

    const solicitudAprobada = async (event) => {
        try {
            event.preventDefault();
            const response = await fetch(`https://localhost:7277/api/solicitudes/aprobacion/${solicitudId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${user.accessToken}`
                },
                body: solicitudId
            });
            
            if(!response.ok) {
                if(response.status === 403)
                    navigate("/error/forbidden");

                if(response.status === 401)
                    navigate("/error/unauthorized");

                throw new Error("Hubo un problema con la solicitud. Código: " + response.status);
            }

            setContenidoModal({
                mostrar: true,
                componente: <div>
                                <h4 className="title"><img src="/img/check.png" width={50} alt="check_icon" /> ¡Solicitud de adopción Nº {solicitudDetalle.nroSolicitud} aprobada!</h4>
                                <hr/>
                                <div className="custom-modal-body">
                                    <p className="fs-4">Ahora puedes reservar un turno para la visita de <strong>{solicitudDetalle.nombreUsuario}</strong> al refugio.</p>
                                    <figure>
                                        <img src="/img/shelter/gato_festejando.png" className="img-fluid" width={200} alt="gato_festejando" />
                                    </figure>
                                </div>
                            </div>,
                borderClass: "border-successful",
                buttonClass: "btn-success",
                showConfettis: true,
                customButtons: false
            });
        }
        catch(error) {
            console.log(error.message);
        }
    }

    const mostrarRechazarSolicitudForm = () => {
        setContenidoModal({
            mostrar: true,
            componente: 
                <div>
                    <h5 className="title">Rechazar solicitud</h5>
                    <hr/>
                    <span className="fs-5">¿Está seguro que desea rechazar la solicitud Nº {solicitudDetalle.nroSolicitud} de {solicitudDetalle.nombreUsuario}?</span>
                    <form id="rechazar_solicitud_form" onSubmit={rechazarSolicitud}>
                        <div className="py-4">
                            <label htmlFor="motivo">Motivo del rechazo</label>
                            <textarea id="motivo" name="motivo" className="form-control" placeholder="Máximo 200 caracteres..." autoFocus></textarea>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-6 text-end">
                                <button type="submit" className="btn btn-success">Confirmar</button>
                            </div>
                            <div className="col-6 text-start">
                                <button type="button" className="btn btn-danger" onClick={() => setContenidoModal({})}>Cancelar</button>
                            </div>
                        </div>
                    </form>
                </div>,
            customButtons: true
        });
    }

    const rechazarSolicitud = (event) => {
        event.preventDefault();

        setContenidoModal({
            mostrar: true,
            componente: <div>
                            <h4 className="title">Solicitud de adopción Nº 789 rechazada</h4>
                            <hr/>
                            <h5>adoptante.test será informado del motivo de la cancelación.</h5>
                        </div>,
            customButtons: false
        });
    }

    const cerrarCustomModal = () => {
        scrollToTop();
        //setContenidoModal({});
        window.location.reload();
    }

    const mostrarEstadoDeSolicitud = () => {
        if(solicitudDetalle.adopcionExitosa)
            return <strong className="text-success">{`Concluida el ${solicitudDetalle.fechaFinSolicitud} a las ${solicitudDetalle.horaFinSolicitud} hs.`}</strong>;
        else if(solicitudDetalle.pendienteDeAprobacion)
            return <strong className="text-danger">Pendiente de aprobación</strong>;
        else if(solicitudDetalle.adopcionEnCurso)
            return <strong className="text-primary">En curso{solicitudDetalle.enEtapaDeSeguimiento && " (en etapa de vacunación)"}</strong>;
        else
            return <strong className="text-danger">Cancelada</strong>;
    }

    const MarcaSiNo = ({ seleccionado }) => {
        return (
            (seleccionado)
            ? <p><img src="/img/si.png" className="img-fluid" alt="si_icon" /></p>
            : <p><img src="/img/no.png" className="img-fluid" alt="no_icon" /></p>
        );
    }

    const finalizarProcesoDeAdopcion = async () => {
        try {
            const response = await fetch(`https://localhost:7277/api/solicitudes/${solicitudId}/finalizacion`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${user.accessToken}`
                },
                body: solicitudId
            });
            
            if(!response.ok) {
                if(response.status === 403)
                    navigate("/error/forbidden");

                if(response.status === 401)
                    navigate("/error/unauthorized");

                throw new Error("Hubo un problema con la solicitud. Código: " + response.status);
            }

            setContenidoModal({
                mostrar: true,
                componente: <div>
                                <h4 className="title"><img src="/img/check.png" width={50} alt="check_icon" /> ¡Solicitud de adopción Nº {solicitudDetalle.nroSolicitud} finalizada!</h4>
                                <hr/>
                                <div className="custom-modal-body">
                                    <p className="fs-5">¡Felicitaciones! ¡Has completado exitosamente el proceso de adopción! El usuario "{solicitudDetalle.nombreUsuario}" ha completado el plan de vacunación y el animal ahora está en condiciones de una vida mejor en su nuevo hogar.</p>
                                    <figure>
                                        <img src="/img/shelter/perro_festejando.jpg" className="img-fluid" width={200} alt="perro_festejando" />
                                    </figure>
                                </div>
                            </div>,
                borderClass: "border-successful",
                buttonClass: "btn-success",
                showSchoolConfettis: true,
                customButtons: false
            });
        }
        catch(error) {
            console.log(error.message);
        }
    }

    return (
        <div id="solicitud_detalle_wrapper">
            <div className="card">
                <div className="card-header title text-center">
                    <img src="/img/usuarios/archivo.png" className="img-fluid" width={48} alt="archivo" /> <span className="align-middle">Solicitud de adopción Nº {solicitudDetalle.nroSolicitud}</span>
                </div>
                <h5 className="text-center pt-4">Enviada el {solicitudDetalle.fechaInicioSolicitud} a las {solicitudDetalle.horaInicioSolicitud} hs.</h5>
                <h5 className="text-center pt-2">
                    <span>Estado: {mostrarEstadoDeSolicitud()}</span>
                </h5>
                {
                    solicitudDetalle.planEstaCompleto && !solicitudDetalle.fechaFinSolicitud && !solicitudDetalle.horaFinSolicitud &&
                    <div className="text-center pt-4">
                        <p className="text-success fw-bold">El plan de vacunación está completo.</p>
                        <button className="btn btn-success" onClick={finalizarProcesoDeAdopcion}>Finalizar proceso de adopción</button>
                    </div>
                }

                <div className="py-4">
                    {
                        !solicitudDetalle.aprobada &&
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-6 text-center text-md-end">
                                <button type="submit" className="btn btn-success mb-4 mb-md-0" onClick={solicitudAprobada}><i className="bi bi-check-lg"></i> Aprobar solicitud</button>
                            </div>
                            <div className="col-12 col-md-6 text-center text-md-start">
                                <button type="button" className="btn btn-danger" onClick={mostrarRechazarSolicitudForm}><i className="bi bi-x-lg"></i> Rechazar solicitud</button>
                            </div>
                        </div>
                    }
                    {
                        solicitudDetalle.adopcionEnCurso && !solicitudDetalle.enEtapaDeSeguimiento && !solicitudDetalle.tieneTurnoActivo &&
                        <div className=" text-center py-2">
                            <Link to={`/refugio/solicitudes/${solicitudId}/turnos`} className="btn btn-secondary fs-6" style={{'backgroundColor': 'mediumslateblue'}}><i className="bi bi-clock"></i> Crear nuevo turno</Link>
                        </div>
                    }
                </div>
                <div className="card-body fs-5">
                    <div className="row pt-2">
                        <div className="col-12 col-md-6 datos-de-usuario">
                            <h5 className="card-title title fs-4 text-center py-2 border-bottom">Datos del adoptante</h5>
                            <div className="row py-4 justify-content-center">
                                <div className="col-auto">
                                    <img src="/img/default_profile_picture.png" width={100} alt="foto_perfil" />
                                </div>
                                <div className="col-auto">
                                    <span className="text-center text-md-start">{solicitudDetalle.nombreUsuario}</span>
                                    <p className="mb-0">{solicitudDetalle.emailUsuario}</p>
                                    <small className="text-muted fs-6 fst-italic">Registrado el {solicitudDetalle.fechaRegistroAdoptante} {solicitudDetalle.horaRegistroAdoptante} hs.</small>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col text-center">
                                    <div className="row">
                                        <div className="col-12 col-xl-6">
                                            <button className="btn btn-outline-primary mb-3 mb-xl-0">Historial de adopciones</button>
                                        </div>
                                        <div className="col-12 col-xl-6">
                                            <button className="btn btn-outline-primary mb-4">Historial de seguimientos</button>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <span>Nombre:</span>
                                            <p>{solicitudDetalle.txtNombre}</p>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <span>Apellido:</span>
                                            <p>{solicitudDetalle.txtApellido}</p>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <span>Barrio:</span>
                                            <p>{solicitudDetalle.txtBarrio}</p>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <span>Dirección:</span>
                                            <p>{solicitudDetalle.txtDireccion}</p>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <span>Fecha de nacimiento:</span>
                                            <p>{solicitudDetalle.txtFechaNacimiento}</p>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <span>Documento:</span>
                                            <p>{solicitudDetalle.txtDocumento}</p>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <span>Teléfono:</span>
                                            <p>{solicitudDetalle.txtTelefono}</p>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <span>Adopciones:</span>
                                            <p title={"Exitosas: " + solicitudDetalle.adopcionesExitosas + " - Interrumpidas: " + solicitudDetalle.adopcionesInterrumpidas}>
                                                <i className="bi bi-check-circle-fill text-success"></i> {solicitudDetalle.adopcionesExitosas}
                                                <i className="bi bi-x-circle-fill text-danger ps-2"></i> {solicitudDetalle.adopcionesInterrumpidas}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <h5 className="card-title title fs-4 text-center py-2 border-bottom">Datos del animal</h5>
                            <div className="custom-modal-animal-img-wrapper">
                                <img src={solicitudDetalle.imgAnimal} className="img-fluid" alt="animal_a_adoptar" />
                            </div>
                            <div className="row pt-4 text-center">
                                <div className="col-12 col-md-6">
                                    <span className="fw-bold">Nombre:</span>
                                    <p>{solicitudDetalle.nombreAnimal}</p>
                                    <span className="fw-bold">Raza:</span>
                                    <p>{solicitudDetalle.razaAnimal}</p>
                                    <span className="fw-bold">Género:</span>
                                    <p>{solicitudDetalle.generoAnimal}</p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="d-grid gap-2">
                                        <Link to={`/refugios/${solicitudDetalle.id_Refugio}/animales/${solicitudDetalle.id_Animal}`} className="btn btn-sm btn-primary">Ver ficha completa</Link>
                                        <Link to="/refugio/turnos" hidden={!solicitudDetalle.snTurnos} className="btn btn-sm btn-turnos">Turnos</Link>
                                        <Link to="/refugio/seguimientos" hidden={!solicitudDetalle.snSeguimiento} className="btn btn-sm btn-seguimiento">Seguimiento de vacunación</Link>
                                        {solicitudDetalle.snPlanVacunacion && <PlanDeVacunacion />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="border-dashed" />
                    <div className="marco-formulario">
                        <h5 className="card-title text-center fs-4 py-1 m-2 border-top border-bottom"><img src="/img/usuarios/pre_adopcion_2.png" className="img-fluid" width={48} alt="formulario_preadopcion_icon" /> Formulario de pre-adopción</h5>
                        <div id="contenido_formulario_preadopcion">
                            <div className="row justify-content-center">
                                <div className="row">
                                    <div className="col-6 pt-2 text-start"><img src="/img/usuarios/perro.png" width={48} alt="perro" /></div>
                                    <div className="col-6 pt-2 text-end"><img src="/img/usuarios/gato.png" width={48} alt="gato" /></div>
                                </div>
                                <div className="row col-12 col-md-8">
                                    <span>Motivo</span>
                                    <p>{solicitudDetalle.txtMotivo}</p>
                                </div>
                                <div className="row py-4 justify-content-center">
                                    <div className="col-12 col-md-6 text-center">
                                        <div className="row">
                                            <div className="col-12 col-md-6">
                                                <span>¿Alguna vez tuvo a cargo alguna mascota?</span>
                                                <MarcaSiNo seleccionado={solicitudDetalle.snTuvoMascota} />
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <span>¿Posee mascotas actualmente?</span>
                                                <MarcaSiNo seleccionado={solicitudDetalle.snTieneMascotas} />
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <span>¿Convive con más personas?</span>
                                                <MarcaSiNo seleccionado={!solicitudDetalle.snViveSolo} />
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <span>¿Existen veterinarias cerca de su zona?</span>
                                                <MarcaSiNo seleccionado={solicitudDetalle.snTieneVeterinariaCerca} />
                                            </div>
                                            <div className="col-12">
                                                <span>Vivienda</span>
                                                <p className="pt-2">{(solicitudDetalle.snViveEnDepartamento) ? "Departamento" : ((solicitudDetalle.snViveEnCasa) ? "Casa" : "")}</p>
                                                <p>{solicitudDetalle.cantidadAmbientes} ambientes</p>
                                                {solicitudDetalle.snTienePatio && <p>Patio</p>}
                                                {solicitudDetalle.snTieneBalcon && <p>Balcón</p>}
                                                {solicitudDetalle.snTieneRedEnVentanas && <p>Redes en ventanas a altura</p>}
                                            </div>
                                            <div className="col-12">
                                                <span>¿Tiene conocimiento acerca de la Ley 14.346 referida al maltrato animal?</span>
                                                <MarcaSiNo seleccionado={solicitudDetalle.snConoceLeyMaltratoAnimal} />
                                            </div>
                                            <div className="col-12">
                                                <span>¿Con que frecuencia dejaría solo al animal en el hogar?</span>
                                                <p>{solicitudDetalle.frecuenciaAnimalSolo}</p>
                                            </div>
                                            <div className="col-12">
                                                <span>¿Si hubiera una emergencia con el animal, ¿tendría alguien a quien recurrir para que lo lleve al veterinario?</span>
                                                <MarcaSiNo seleccionado={solicitudDetalle.snTieneConocidosEnCasoDeEmergencia} />
                                            </div>
                                            <div className="col-12">
                                                <span>¿Su remuneración es acorde a los gastos que estima tener para el cuidado del animal?</span>
                                                <MarcaSiNo seleccionado={solicitudDetalle.snTieneSalarioAcordeAGastos} />
                                            </div>
                                            <div className="col-12">
                                                <span>¿Tiene familiares o conocidos que lo aconsejen acerca de la crianza del animal?</span>
                                                <MarcaSiNo seleccionado={solicitudDetalle.snTieneConocidosQueLoAconsejen} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 pb-2 text-start"><img src="/img/usuarios/gato.png" width={48} alt="gato" /></div>
                                        <div className="col-6 pb-2 text-end"><img src="/img/usuarios/perro.png" width={48} alt="perro" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                {/*<div className="card-footer text-body-secondary">
                    <form id="aprobar_solicitud" onSubmit={solicitudAprobada}>
                        <h5 className="text-center pt-4">Seleccione una fecha y hora para reservar un turno:</h5>
                        <div className="row justify-content-center py-4">
                            <div className="col-12 col-md-auto">
                                <input id="fecha_turno" name="fechaTurno" className="form-control form-control-lg" type="date" />
                            </div>
                            <div className="col-12 col-md-auto">
                                <input id="hora_turno" name="horaTurno" className="form-control form-control-lg" type="time" />
                            </div>
                        </div>
                        <p className="fw-bold text-center">Nota: la aprobación de una solicitud de adopción REQUIERE reservar un turno para la visita del adoptante al refugio.</p>
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-6 text-center text-md-end">
                                <button type="submit" className="btn btn-success mb-4 mb-md-0"><i className="bi bi-check-lg"></i> Aprobar solicitud</button>
                            </div>
                            <div className="col-12 col-md-6 text-center text-md-start">
                                <button type="button" className="btn btn-danger" onClick={mostrarRechazarSolicitudForm}><i className="bi bi-x-lg"></i> Rechazar solicitud</button>
                            </div>
                        </div>
                    </form>
                </div>*/}
            </div>
            { contenidoModal.mostrar && 
                <CustomModal onCloseCustomModal={cerrarCustomModal} customButtons={contenidoModal.customButtons} borderClass={contenidoModal.borderClass} buttonClass={contenidoModal.buttonClass} showSchoolConfettis={contenidoModal.showSchoolConfettis}>
                    { contenidoModal.componente }
                </CustomModal>
            }
        </div>
    );
}