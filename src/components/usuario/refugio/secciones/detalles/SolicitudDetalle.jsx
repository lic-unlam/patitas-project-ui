import { Link } from "react-router-dom";

import { useTitlePageSetter } from "src/hooks/useTitlePageSetter";
import PlanDeVacunacion from "src/components/usuario/PlanDeVacunacion";

export const SolicitudDetalle = () => {
    useTitlePageSetter("Solicitud Nº 789");

    return (
        <div id="solicitud_detalle_wrapper">
            <div className="card">
                <div className="card-header title text-center">
                    <img src="/img/usuarios/archivo.png" className="img-fluid" width={48} alt="archivo" /> <span className="align-middle">Solicitud de adopción Nº 789</span>
                </div>
                <div className="card-body fs-5">
                    <div className="row pt-2">
                        <div className="col-12 col-md-6 datos-de-usuario">
                            <h5 className="card-title fs-4 text-center py-2 border-top border-bottom">Datos del adoptante</h5>
                            <div className="row py-4 justify-content-center">
                                <div className="col-auto">
                                    <img src="/img/default_profile_picture.png" width={100} alt="foto_perfil" />
                                </div>
                                <div className="col-auto">
                                    <span className="text-center text-md-start">adoptante.test</span>
                                    <p className="mb-0">adoptante.test@gmail.com</p>
                                    <small className="text-muted fs-6 fst-italic">Registrado el 25/12/2022 14:45</small>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col text-center">
                                    <div className="row">
                                        <div className="col-12 col-xl-6">
                                            <button className="btn btn-primary mb-3 mb-xl-0">Historial de adopciones</button>
                                        </div>
                                        <div className="col-12 col-xl-6">
                                            <button className="btn btn-primary mb-4">Historial de seguimientos</button>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <span>Nombre:</span>
                                            <p>Adoptante</p>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <span>Apellido:</span>
                                            <p>Test</p>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <span>Barrio:</span>
                                            <p>Recoleta</p>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <span>Dirección:</span>
                                            <p>Av. Hipólito Yrigoyen 1849</p>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <span>Fecha de nacimiento:</span>
                                            <p>9/07/1995</p>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <span>Documento:</span>
                                            <p>40.579.842</p>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <span>Teléfono:</span>
                                            <p>5555-5555</p>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <span>Adopciones:</span>
                                            <p title="Exitosas: 10 - Interrumpidas: 2"><i className="bi bi-check-circle-fill text-success"></i> 10 <i className="bi bi-x-circle-fill text-danger ps-2"></i> 2</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <h5 className="card-title fs-4 text-center py-2 border-top border-bottom">Datos del animal</h5>
                            <div className="custom-modal-animal-img-wrapper">
                                <img src="/img/shelter/animals/thumbnail_4.jpg" className="img-fluid" alt="animal_a_adoptar" />
                            </div>
                            <div className="row pt-4 text-center">
                                <div className="col-12 col-md-6">
                                    <span className="fw-bold">Nombre:</span>
                                    <p>Pancho</p>
                                    <span className="fw-bold">Raza:</span>
                                    <p>Gato siamés</p>
                                    <span className="fw-bold">Género:</span>
                                    <p>Macho</p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="d-grid gap-2">
                                        <Link to="/refugios/1/animales/4" className="btn btn-sm btn-primary">Ver ficha completa</Link>
                                        <Link to="/adoptantes/1/mis-turnos?refugio_id=1" className="btn btn-sm btn-success">Turnos</Link>
                                        <Link to="/adoptantes/1/seguimientos?veterinaria_id=1" className="btn btn-sm btn-danger">Seguimiento de vacunación</Link>
                                        <PlanDeVacunacion />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="border-dashed" />
                    <div className="marco-formulario">
                        <h5 className="card-title text-center fs-4 py-1 m-2 border-top border-bottom"><img src="/img/usuarios/pre_adopcion_2.png" className="img-fluid" width={48} alt="formulario_preadopcion_icon" /> Formulario de pre-adopción:</h5>
                        <div id="contenido_formulario_preadopcion">
                            <div className="row justify-content-center">
                                <div className="row">
                                    <div className="col-6 pt-2 text-start"><img src="/img/usuarios/perro.png" width={48} alt="perro" /></div>
                                    <div className="col-6 pt-2 text-end"><img src="/img/usuarios/gato.png" width={48} alt="gato" /></div>
                                </div>
                                <div className="row col-12 col-md-8">
                                    <span>Motivo</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <div className="row py-4 justify-content-center">
                                    <div className="col-12 col-md-6 text-center">
                                        <div className="row">
                                            <div className="col-12 col-md-6">
                                                <span>¿Alguna vez tuvo a cargo alguna mascota?</span>
                                                <p><img src="/img/si.png" className="img-fluid" alt="si_icon" /></p>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <span>¿Posee mascotas actualmente?</span>
                                                <p><img src="/img/no.png" className="img-fluid" alt="no_icon" /></p>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <span>¿Convive con más personas?</span>
                                                <p><img src="/img/si.png" className="img-fluid" alt="si_icon" /></p>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <span>¿Existen veterinarias cerca de su zona?</span>
                                                <p><img src="/img/si.png" className="img-fluid" alt="si_icon" /></p>
                                            </div>
                                            <div className="col-12">
                                                <span>Vivienda</span>
                                                <p className="pt-2">Departamento</p>
                                                <p>3 ambientes</p>
                                                <p>Patio</p>
                                                <p>Balcón</p>
                                                <p>Redes en ventanas a altura</p>
                                            </div>
                                            <div className="col-12">
                                                <span>¿Tiene conocimiento acerca de la ley del maltrato animal?</span>
                                                <p><img src="/img/si.png" className="img-fluid" alt="si_icon" /></p>
                                            </div>
                                            <div className="col-12">
                                                <span>¿Con que frecuencia quedaría solo el animal en el hogar?</span>
                                                <p>Algo frecuente</p>
                                            </div>
                                            <div className="col-12">
                                                <span>¿Si hubiera una emergencia con el animal, ¿tendría alguien a quien recurrir para que lo lleve al veterinario?</span>
                                                <p><img src="/img/si.png" className="img-fluid" alt="si_icon" /></p>
                                            </div>
                                            <div className="col-12">
                                                <span>¿Su remuneración es acorde a los gastos que estima tener para el cuidado del animal?</span>
                                                <p><img src="/img/si.png" className="img-fluid" alt="si_icon" /></p>
                                            </div>
                                            <div className="col-12">
                                                <span>¿Tiene familiares o conocidos que lo aconsejen acerca de la crianza del animal?</span>
                                                <p><img src="/img/si.png" className="img-fluid" alt="si_icon" /></p>
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
                <div className="card-footer text-body-secondary">
                    <form id="aprobar_solicitud">
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
                                <button type="button" className="btn btn-danger"><i className="bi bi-x-lg"></i> Rechazar solicitud</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}