import { Link } from "react-router-dom";
import { CustomModal } from "../../../layout/CustomModal";

export const AdopcionDetalle = () => {
    return (
            <CustomModal>
                <h4 className="title">Solicitud de adopción Nº 789</h4>
                <hr/>
                <p style={{'color': 'crimson', 'fontStyle': 'italic'}} className="align-text-bottom"><i className="bi bi-exclamation-diamond-fill h5 align-middle"></i> Pendiente de aprobación</p>
                <div className="row">
                    <div className="col-7">
                        <span className="fs-6 fw-bold">Fecha de inicio:</span>
                        <p>20/11/2022 a las 12:00 hs.</p>
                        <span className="fs-6 fw-bold">Animal que quieres adoptar:</span>
                        <p>Chispita - Raza Border Collie (Macho)</p>
                        <Link to="/refugios/1/publication/1" className="btn btn-sm btn-primary">Ver ficha</Link>
                        <div className="custom-modal-animal-img-wrapper">
                            <img src="/img/shelter/animals/thumbnail_1.jpg" alt="perro" />
                        </div>
                    </div>
                    <div className="col-5">
                        <span className="fs-6 fw-bold">Refugio:</span>
                        <p>San Pedro (Av. del Libertador 4101, Palermo)</p>
                        <span className="fs-6 fw-bold">Responsable a cargo:</span>
                        <p>Juan topo</p>
                        <div className="d-grid gap-2">
                            <Link to="/adoptantes/1/mis-turnos?refugio_id=1" className="btn btn-sm btn-block btn-success">Turnos</Link>
                            <Link to="/adoptantes/1/seguimientos?veterinaria_id=1" className="btn btn-sm btn-block btn-danger">Seguimiento de vacunación</Link>
                            <button className="btn btn-sm btn-dark mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Ver plan de vacunación 🠋</button>
                            <div className="collapse" id="collapseExample">
                                <div className="card card-body">
                                    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                </div>
                            </div>
                        </div>
                        {/*<p className="pt-4">Vacunas que ya tiene: Antirrábica (1 dosis), Antirrábica (2 dosis), Antirrábica (3 dosis), Antirrábica (4 dosis)</p>*/}
                        {/*<ul>
                            <li>Antirrábica (1 dosis)</li>
                            <li>Antirrábica (2 dosis)</li>
                            <li>Antirrábica (3 dosis)</li>
                            <li>Antirrábica (4 dosis)</li>
                        </ul>*/}
                    </div>
                </div>
            </CustomModal>
    );
}