import React, { useState } from "react";
import { Link } from "react-router-dom";

export const AprobarComentarios = () => {
    const [ comentarios, setComentarios ] = useState([
        {
            id: 8,
            aprobado: false
        },
        {
            id: 10,
            aprobado: false
        }
    ]);

    const aprobarComentario = (comentarioId) => {
        let comentarioAprobado = comentarios.find((comentario) => comentario.id === comentarioId);
        comentarioAprobado.aprobado = true;
        setComentarios([...comentarios]); // para que react actualice el estado es necesario usar el spread operator (shallow copy) del objeto por más que haya mantenido la referencia entre el objeto "comentarios" y el objeto que retorna el método find
    }

    return (
        <div id="aprobar_comentarios">
            {comentarios.map((comentario, index) => {
            return (<div className="comment-wrapper" key={index}>
                <div className="row align-items-center mb-1">
                    <div className="col-auto">
                        <img className="img-fluid nav-profile-picture" src="/img/default_profile_picture.png" alt="profile_picture"/>
                    </div>
                    <div className="col-auto">
                        <Link to="/usuarios/10"><p className="comment-name">adoptante.test</p></Link>
                        <span className="comment-date">27/10/2022 21:47</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
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
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </div>
                {comentario.aprobado ? <p className="text-success fw-bold"><i className="bi bi-check-lg fs-2 align-middle"></i> Comentario (Nº {comentario.id}) aprobado</p> :
                <div className="acciones-aprobar-comentario">
                    <button className="btn btn-success me-2" onClick={() => aprobarComentario(comentario.id)}>Aprobar comentario</button>
                    <button className="btn btn-dark">Ir al refugio</button>
                </div>}
            </div>
            )
        })}
        </div>
    );
}