import { Link } from "react-router-dom";

export const MostrarComentario = (props) => {
    const mostrarFormulario = () => {
        props.setTieneComentario(false);
    }

    return (
        <div className="col-12 col-md-6">
            <div className="comment-wrapper py-4">
                <div className="row">
                    <div className="col-auto">
                        <img className="img-fluid nav-profile-picture" src="/img/default_profile_picture.png" alt="profile_picture"/>
                    </div>
                    <div className="col-auto">
                        <Link to="/usuarios/10"><p className="comment-name">adoptante.test</p></Link>
                        <p className="comment-date">27/10/2022 21:47</p>
                    </div>
                    <div>
                        <h4 className="d-inline-block">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star"></i>
                        </h4>
                        <span className="ps-2">Muy recomendable</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </div>
                <p className="text-danger fw-bold fst-italic">Comentario a la espera de aprobación por un administrador.</p>
                <button className="btn btn-dark" onClick={mostrarFormulario}>Editar comentario</button>
                <p className="text-danger fw-bold fst-italic"><i className="bi bi-x-lg fw-bold fs-5"></i> Tu comentario debe ser editado. Motivo: el comentario es muy agresivo.</p>
            </div>
        </div>
    );
}