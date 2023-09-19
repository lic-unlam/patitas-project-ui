export const SolicitudDetalle = () => {
    return (
        <div id="solicitud_detalle_wrapper">
            <div className="card text-center">
                <div className="card-header title">
                    Solicitud de adopción Nº 789
                </div>
                <div className="card-body">
                    <h5 className="card-title">Datos del adoptante:</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    <hr className="border-dashed" />
                    <h5 className="card-title">Formulario de pre-adopción:</h5>
                </div>
                <div className="card-footer text-body-secondary">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 text-md-end">
                            <button className="btn btn-success mb-4 mb-md-0"><i className="bi bi-check-lg"></i> Aprobar solicitud</button>
                        </div>
                        <div className="col-12 col-md-6 text-md-start">
                            <button className="btn btn-danger"><i className="bi bi-x-lg"></i> Rechazar solicitud</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}