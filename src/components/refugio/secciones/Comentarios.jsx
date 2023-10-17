import React, { useEffect, useState, useContext } from 'react';
import { Link, useOutletContext } from 'react-router-dom';

import CustomAlert from '../../layout/CustomAlert';
import { ProhibidoComentario } from './comentarios/ProhibidoComentario';
import { CrearComentario } from './comentarios/CrearComentario';
import { MostrarComentario } from './comentarios/MostrarComentario';

import { UserContext } from 'src/components/layout/LayoutPublic';
import { CustomAlertContext } from 'src/components/layout/LayoutPublic';

const Comentarios = (props) => {
    let { user, setUser } = useContext(UserContext);
    let { customAlert, setCustomAlert } = useContext(CustomAlertContext);
    const [descripcionEstrella, setDescripcionEstrella] = useState({ nroEstrella: 0, leyenda: "" });
    const [tieneComentario, setTieneComentario] = useState(false);

    const [ contenidoAlert, setContenidoAlert ] = useState({
        mostrar: false,
        tipo: "",
        mensaje: ""
    });

    const { comentarios } = props;

    // valoraciones: excelente, muy recomendable, buen lugar, poco recomendable, un desastre
    const leyendasAlReves = ['Un desastre', 'Poco recomendable', 'Buen lugar', 'Muy recomendable', 'Excelente'];

    useEffect(() => {
        document.title = props.title.concat(' - ', window.$title);
        
        if(props.sesionExpirada) {
            setUser(null, localStorage.removeItem('userData'));
            setCustomAlert({
                mostrar: true,
                tipo: "danger",
                mensaje: <span>Sesión expirada. <strong><Link to="/auth/signin" className="text-dark">Acceda</Link></strong> para poder comentar.</span>
            });
        }
    }, []);

    const dibujarEstrellas = (cantidadDeEstrellas) => {
        let estrellas = [];
        for(let i = 1; i <= cantidadDeEstrellas; i++) {
            estrellas.push(<i className="bi bi-star-fill" key={i}></i>);
        }

        return estrellas;
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

    const mostrarOProhibirComentario = () => {
        if(user.puedeComentar) {
            {!tieneComentario ? <CrearComentario
                descripcionEstrella={descripcionEstrella}
                mostrarDescripcionEstrella={mostrarDescripcionEstrella}
                limpiarDescripcionEstrella={limpiarDescripcionEstrella}
                agregarComentario={agregarComentario}
                /> :
                <MostrarComentario setTieneComentario={setTieneComentario} />}
        }
        else
            return <ProhibidoComentario />
    }

    return (
        <>
        {contenidoAlert.mostrar && <CustomAlert tipo={contenidoAlert.tipo} ocultarAlert={ocultarAlert}>{contenidoAlert.mensaje}</CustomAlert>}
        {user && mostrarOProhibirComentario()}
        {comentarios.length > 0 ?
        <>
            <div id="ordenar_comentarios" className="form-group row py-2">
                <label className="col-auto my-auto">Ordenar por:</label>
                <div className="col-12 col-md-3 pt-2 pt-md-0">
                    <select id="ordenar_comentarios_select" className="form-select" aria-label="Ordenar por...">
                        <option value="0" defaultValue>Más recientes</option>
                        <option value="1">Más antiguos</option>
                    </select>
                </div>
            </div>
            <div id="comentarios_wrapper" className="row pt-4">
                {comentarios.map((comentario, index) =>
                    <div className="col-12 col-md-6" key={index}>
                        <div className="comment-wrapper">
                            <div className="row">
                                <div className="col-auto">
                                    <img className="img-fluid nav-profile-picture" src={comentario.fotoDePerfil || $defaultProfilePicture} alt="profile_picture"/>
                                </div>
                                <div className="col-auto">
                                    <Link to={`/usuarios/${comentario.id_Adoptante}`}><p className="comment-name">{comentario.nombreDeUsuario}</p></Link>
                                    <p className="comment-date">{new Date(comentario.fechaCreacion).toLocaleString('es-ES')}</p>
                                </div>
                                <div>
                                    <h4 className="d-inline-block">{dibujarEstrellas(comentario.nro_Estrellas)}</h4>
                                    {<span className="ps-2">{comentario.descripcionEstrella}</span>}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>{comentario.descripcion}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </> : <div className="text-center">
                    <h4>Este refugio aún no tiene comentarios.</h4>
                </div>}
        </>
    );
}

export default Comentarios;