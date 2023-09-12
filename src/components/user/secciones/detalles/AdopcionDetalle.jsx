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
                        <h5>Fecha de inicio:</h5>
                        <p>20/11/2022 a las 12:00 hs.</p>
                        <h5>Animal que quieres adoptar:</h5>
                        <p>Chispita - Raza Border Collie (Macho)</p>
                        <Link to="/shelter/1/publication/1" className="btn btn-sm btn-primary">Ver ficha</Link>
                        <div className="custom-modal-animal-img-wrapper">
                            <img src="/img/shelter/animals/thumbnail_1.jpg" alt="perro" />
                        </div>
                    </div>
                    <div className="col-5">
                        <h5>Refugio:</h5>
                        <p>San Pedro (Av. del Libertador 4101, Palermo)</p>
                        <h5>Responsable a cargo:</h5>
                        <p>Juan topo</p>
                        <div className="d-grid gap-2">
                            <Link to="/adoptantes/1/mis-turnos?refugio_id=1" className="btn btn-sm btn-block btn-success">Turnos</Link>
                            <button className="btn btn-sm btn-danger">Plan de vacunación</button>
                            <button className="btn btn-sm btn-block btn-dark">Seguimiento de vacunaciones</button>
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