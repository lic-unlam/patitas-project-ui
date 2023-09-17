export const CrearComentario = (props) => {
    return (
        <div id="comentar_wrapper" className="row justify-content-center">
            <div className="col">
                <div className="card">
                    <h5 className="card-header fw-bold">Cuentános tu experiencia</h5>
                    <div className="card-body">
                        <h5 className="card-title">¿Sabías que tus comentarios son una forma muy importante de apoyar a los refugios?</h5>
                        <p className="card-text">Al hacerlo, estás ayudando a mejorar su trabajo y atraer más visitantes. Te invitamos a que dejes un comentario y valoración sobre tu experiencia en el camino de la adopción responsable:</p>
                        <div className="row align-items-center">
                            <div className="col-12 col-md-9">
                                <form onSubmit={props.agregarComentario}>
                                    <div className="mb-3">
                                        <i className={`bi ${ props.descripcionEstrella.nroEstrella >= 1 ? "bi-star-fill" : "bi-star" } pe-2 fs-4`} data-nro="1" onMouseOver={props.mostrarDescripcionEstrella} onMouseLeave={props.limpiarDescripcionEstrella}></i>
                                        <i className={`bi ${ props.descripcionEstrella.nroEstrella >= 2 ? "bi-star-fill" : "bi-star" } pe-2 fs-4`} data-nro="2" onMouseOver={props.mostrarDescripcionEstrella} onMouseLeave={props.limpiarDescripcionEstrella}></i>
                                        <i className={`bi ${ props.descripcionEstrella.nroEstrella >= 3 ? "bi-star-fill" : "bi-star" } pe-2 fs-4`} data-nro="3" onMouseOver={props.mostrarDescripcionEstrella} onMouseLeave={props.limpiarDescripcionEstrella}></i>
                                        <i className={`bi ${ props.descripcionEstrella.nroEstrella >= 4 ? "bi-star-fill" : "bi-star" } pe-2 fs-4`} data-nro="4" onMouseOver={props.mostrarDescripcionEstrella} onMouseLeave={props.limpiarDescripcionEstrella}></i>
                                        <i className={`bi ${ props.descripcionEstrella.nroEstrella >= 5 ? "bi-star-fill" : "bi-star" } pe-2 fs-4`} data-nro="5" onMouseOver={props.mostrarDescripcionEstrella} onMouseLeave={props.limpiarDescripcionEstrella}></i>
                                        <span className="ps-3">{props.descripcionEstrella.leyenda}</span>
                                    </div>
                                    <div className="mb-3">
                                        <textarea id="comentario" name="comentario" className="form-control" placeholder="Máximo 300 caracteres..."></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-dark">Dejar un comentario</button>
                                </form>
                            </div>
                            <div className="col-12 col-md-3">
                                <img className="img-fluid" width={200} src="/img/posts/gato-trabajando-portatil.avif" alt="gato_escribiendo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}