import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import CustomAlert from '../../layout/CustomAlert';
import { ProhibidoComentario } from './comentarios/ProhibidoComentario';
import { CrearComentario } from './comentarios/CrearComentario';
import { MostrarComentario } from './comentarios/MostrarComentario';

const Comentarios = (props) => {
    const [descripcionEstrella, setDescripcionEstrella] = useState({ nroEstrella: 0, leyenda: "" });
    const [tieneComentario, setTieneComentario] = useState(false);

    const [ contenidoAlert, setContenidoAlert ] = useState({
        mostrar: false,
        tipo: "",
        mensaje: ""
    });

    // valoraciones: excelente, muy recomendable, buen lugar, poco recomendable, un desastre
    const leyendasAlReves = ['Un desastre', 'Poco recomendable', 'Buen lugar', 'Muy recomendable', 'Excelente'];

    useEffect(() => {
        document.title = props.title.concat(' - ', window.$title);
    }, []);

    function comments_loop() {
        let comments = [];
        const estrellas = [5,4,3,2,1];
        const leyendas = ['Excelente', 'Muy recomendable', 'Buen lugar', 'Poco recomendable', 'Un desastre'];

        for(let i = 0;i < 10;i++) {
            let stars_llenas = [];
            if(i < estrellas.length) {
                for(let j = 0; j < estrellas[i]; j++) {
                    stars_llenas.push(<i className="bi bi-star-fill" key={j}></i>);
                }

                for(let k = estrellas[i]; k < 5; k++) {
                    stars_llenas.push(<i className="bi bi-star" key={k}></i>);
                }
            }
            else {
                for(let j = 0; j < estrellas[1]; j++) {
                    stars_llenas.push(<i className="bi bi-star-fill" key={j}></i>);
                }

                for(let k = estrellas[1]; k < 5; k++) {
                    stars_llenas.push(<i className="bi bi-star" key={k}></i>);
                }
            }

            comments.push(
                <div className="col-12 col-md-6" key={i}>
                    <div className="comment-wrapper">
                        <div className="row">
                            <div className="col-auto">
                                <img className="img-fluid nav-profile-picture" src="/img/default_profile_picture.png" alt="profile_picture"/>
                            </div>
                            <div className="col-auto">
                                <Link to="/usuarios/10"><p className="comment-name">adoptante.test</p></Link>
                                <p className="comment-date">27/10/2022 21:47</p>
                            </div>
                            <div>
                                <h4 className="d-inline-block">{stars_llenas}</h4>
                                <span className="ps-2">{(i < leyendas.length) ? leyendas[i] : leyendas[1]}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return comments;
    }

    const mostrarDescripcionEstrella = (event) => {
        const nroEstrella = event.target.dataset.nro;
        setDescripcionEstrella({ nroEstrella: nroEstrella, leyenda: leyendasAlReves[nroEstrella - 1] });
    }

    const limpiarDescripcionEstrella = () => setDescripcionEstrella("");

    const agregarComentario = (event) => {
        event.preventDefault();
        
        setContenidoAlert({
            mostrar: true,
            tipo: "success",
            mensaje: <span><strong>¡Gracias por dejar tu comentario!</strong> Se mostrará una vez que haya sido aprobado por un administrador.</span>
        });

        setTieneComentario(true);
    }

    const ocultarAlert = () => {
        setContenidoAlert({ mostrar: false });
    }

    return (
        <>
        {contenidoAlert.mostrar && <CustomAlert tipo={contenidoAlert.tipo} ocultarAlert={ocultarAlert}>{contenidoAlert.mensaje}</CustomAlert>}
        <ProhibidoComentario />
        {!tieneComentario ? <CrearComentario
            descripcionEstrella={descripcionEstrella}
            mostrarDescripcionEstrella={mostrarDescripcionEstrella}
            limpiarDescripcionEstrella={limpiarDescripcionEstrella}
            agregarComentario={agregarComentario}
        /> :
        <MostrarComentario setTieneComentario={setTieneComentario} />}
        {/*<div id="comentar_wrapper" className="row justify-content-center">
            <div className="col">
                <div className="card">
                    <h5 className="card-header fw-bold">Cuentános tu experiencia</h5>
                    <div className="card-body">
                        <h5 className="card-title">¿Sabías que tus comentarios son una forma muy importante de apoyar a los refugios?</h5>
                        <p className="card-text">Al hacerlo, estás ayudando a mejorar su trabajo y atraer más visitantes. Te invitamos a que dejes un comentario y valoración sobre tu experiencia en el camino de la adopción responsable:</p>
                        <div className="row align-items-center">
                            <div className="col-12 col-md-9">
                                <form onSubmit={agregarComentario}>
                                    <div className="mb-3">
                                        <i className={`bi ${ descripcionEstrella.nroEstrella >= 1 ? "bi-star-fill" : "bi-star" } pe-2 fs-4`} data-nro="1" onMouseOver={mostrarDescripcionEstrella} onMouseLeave={limpiarDescripcionEstrella}></i>
                                        <i className={`bi ${ descripcionEstrella.nroEstrella >= 2 ? "bi-star-fill" : "bi-star" } pe-2 fs-4`} data-nro="2" onMouseOver={mostrarDescripcionEstrella} onMouseLeave={limpiarDescripcionEstrella}></i>
                                        <i className={`bi ${ descripcionEstrella.nroEstrella >= 3 ? "bi-star-fill" : "bi-star" } pe-2 fs-4`} data-nro="3" onMouseOver={mostrarDescripcionEstrella} onMouseLeave={limpiarDescripcionEstrella}></i>
                                        <i className={`bi ${ descripcionEstrella.nroEstrella >= 4 ? "bi-star-fill" : "bi-star" } pe-2 fs-4`} data-nro="4" onMouseOver={mostrarDescripcionEstrella} onMouseLeave={limpiarDescripcionEstrella}></i>
                                        <i className={`bi ${ descripcionEstrella.nroEstrella >= 5 ? "bi-star-fill" : "bi-star" } pe-2 fs-4`} data-nro="5" onMouseOver={mostrarDescripcionEstrella} onMouseLeave={limpiarDescripcionEstrella}></i>
                                        <span className="ps-3">{descripcionEstrella.leyenda}</span>
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
    </div>*/}
        <hr/>
        <div id="comentarios_wrapper" className="row pt-4">
            {comments_loop()}
        </div>
        </>
    );
}

export default Comentarios;