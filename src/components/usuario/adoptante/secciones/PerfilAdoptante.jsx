export const PerfilAdoptante = () => {
    return (
        <div id="perfil_wrapper">
            <div className="card">
                <div className="card-header text-center bg-white">
                    <span className="title">Datos personales</span>
                </div>
                <div className="row g-0">
                    <div className="col-6 ps-3 pt-2"><img src="/img/usuarios/hueso.png" width={48} alt="hueso" /></div>
                    <div className="col-6 pe-3 pt-2 text-end"><img src="/img/usuarios/hueso.png" width={48} alt="hueso" /></div>
                </div>
                <div className="card-body datos-de-usuario">
                    <div className="row justify-content-center">
                        <div className="col-auto">
                            <img src="/img/default_profile_picture.png" width={100} alt="foto_perfil" />
                        </div>
                        <div className="col-auto">
                            <span>adoptante.test</span>
                            <p className="mb-1">adoptante.test@gmail.com</p>
                            <p className="text-muted fst-italic"><small>Registrado el 25/12/2022 14:45</small></p>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <button type="button" className="btn btn-sm btn-outline-dark me-2">Cambiar imágen</button>
                        <button type="button" className="btn btn-sm btn-outline-dark">Cambiar contraseña</button>
                    </div>
                    <div className="row py-4 justify-content-center">
                        <div className="col-12 col-md-6 text-center">
                            <div className="row">
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
                                    <p title="Exitosas: 4 - Interrumpidas: 2"><i className="bi bi-check-circle-fill text-success"></i> 4 <i className="bi bi-x-circle-fill text-danger ps-2"></i> 2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="button" className="btn btn-primary">Modificar datos de perfil</button>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-6 ps-3 pb-2"><img src="/img/usuarios/hueso.png" width={48} alt="hueso" /></div>
                    <div className="col-6 pe-3 pb-2 text-end"><img src="/img/usuarios/hueso.png" width={48} alt="hueso" /></div>
                </div>
            </div>
        </div>
    );
}