export const AdopcionVinculadaDetalle = (props) => {
    return (
        <div id="adopcion_detalle_wrapper">
            <h1 className="card bg-light py-1 title text-center">Adopción Nº 1</h1>
            <div className="text-center py-4">
                <button className="btn btn-seguimiento">Crear plan de vacunación</button>
            </div>
            <div className="row">
                <div className="col-6">
                    <h4>Adoptante</h4>
                    <div className="row">
                        <div className="col-auto">
                            <img src="/img/default_profile_picture.png" width={150} alt="foto_perfil" />
                        </div>
                        <div className="col-8">
                            <p>correo</p>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <h4>Refugio</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <h4>Animal</h4>
                </div>
                <div className="col-6">
                    <h4>Plan de vacunación</h4>
                </div>
            </div>
        </div>
    );
}