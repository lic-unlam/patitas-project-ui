import { useEffect, useCallback, useContext, useState } from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';

import PreAdopcionModal from './PreAdopcionModal';
import AdoptionProcessStarted from './AdoptionProcessStarted';

import { UserContext } from 'src/components/layout/LayoutPublic';

import { genero } from 'src/utils/constants/refugio';

const AnimalDetalle = (props) => {
    const navigate = useNavigate();
    const { animalId } = useParams(); // obtengo el id del animal desde la url
    let { user } = useContext(UserContext); // datos del estado del usuario
    
    // los datos del animal obtenidos desde la API en el componente padre y pasados como 'state' al redireccionarse a este componente
    let { state } = useLocation();

    // formateo los datos recibidos de fecha de ingreso y nacimiento para presentarlos
    let fecha_ingreso = new Date(state.fechaIngreso).toLocaleDateString();
    let edadAproximada = new Date().getFullYear() - state.nacimiento;

    const closePublication = useCallback(() => {
        navigate('..');
    }, [navigate]); // uso 'useCallback' porque voy a utilizar esta función dentro de useEffect

    const goBack = useCallback((event) => {
        if((event.key === 'Escape') && !document.querySelector('#preAdoptionModal').classList.contains('show') && !document.querySelector('#startAdoptionModal').classList.contains('show'))
            closePublication();
    }, [closePublication]);

    useEffect(() => {
        document.title = props.title.concat(' - ', window.$title);
		document.addEventListener("keydown", goBack);
        document.body.style.overflow = "hidden";

		return () => {
			document.removeEventListener("keydown", goBack);
            document.body.style.overflow = '';
		}
	}, [goBack]);

    return (
        <>
            <div className="overlay"></div>
            <div className="post-wrapper">
                <div className="row">
                    <div className="col-6 text-center">
                        <img className="img-fluid post-image" src={`/img/shelter/animals/thumbnail_${animalId}.jpg`} alt="post_image"/>
                    </div>
                    <div className="col-6">
                        <div className="post-content">
                            <div className="row">
                                <div className="col-10">
                                    <div className="request-adoption">
                                        {state.solicitudActiva ?
                                        <h3>Ya tienes una <Link to="/usuario/mis-adopciones">solicitud activa</Link> para adoptar a {state.nombre}.<img src="/img/check.png" width={50} className="d-inline" alt="check" /></h3> :
                                        <>
                                            <h3>¿Te gustaría adoptarme?</h3>
                                            <h3>¿Quieres verme en persona?</h3>
                                            {user ?
                                            <div>
                                                <button className="btn btn-primary py-2 my-2" type="button" data-bs-toggle="modal" data-bs-target="#preAdoptionModal">Pregunta por mí</button>
                                                <img src="/img/shelter/perro_gato_corazon.png" className="ps-2" width={50} />
                                            </div>
                                                : <h5 className="pt-2"><Link to="/auth/signin">Crea una cuenta</Link> y conóceme <i className="bi bi-heart-fill align-middle text-danger"></i></h5>}
                                        </>
                                        }
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="close-button">
                                        <button className="btn" type="button" title="Cerrar" onClick={closePublication}>
                                            <i className="bi bi-x"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="animal-information">
                                <div className="row align-items-center">
                                    <div className="col-4">
                                        <span className="info-title">Nombre</span>
                                    </div>
                                    <div className="col-8">
                                        <span className="info-content">{state.nombre}</span>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4">
                                        <span className="info-title">Raza</span>
                                    </div>
                                    <div className="col-8">
                                        <span className="info-content">{state.raza}</span>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4">
                                        <span className="info-title">Edad aproximada</span>
                                    </div>
                                    <div className="col-8">
                                        <span className="info-content">{edadAproximada > 0 ? edadAproximada + ((edadAproximada !== 1) ? " años" : " año") : "Menos de un año"}</span>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4">
                                        <span className="info-title">Género</span>
                                    </div>
                                    <div className="col-8">
                                        <span className="info-content">{state.genero === 'H' ? genero.hembra : genero.macho}</span>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4">
                                        <span className="info-title">Peso</span>
                                    </div>
                                    <div className="col-8">
                                        <span className="info-content">{state.peso} kg.</span>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4">
                                        <span className="info-title">Altura</span>
                                    </div>
                                    <div className="col-8">
                                        <span className="info-content">{Math.round(state.altura * 100)} cm.</span>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4">
                                        <span className="info-title">Fecha de ingreso</span>
                                    </div>
                                    <div className="col-8">
                                        <span className="info-content">{fecha_ingreso}</span>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4">
                                        <span className="info-title">Esterilizado</span>
                                    </div>
                                    <div className="col-8">
                                        <span className="info-content">{state.esterilizado ? "Si" : "No"}</span>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4">
                                        <span className="info-title">Desparasitado</span>
                                    </div>
                                    <div className="col-8">
                                        <span className="info-content">{state.desparasitado ? "Si" : "No"}</span>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4">
                                        <span className="info-title">Situación previa</span>
                                    </div>
                                    <div className="col-8">
                                        <span className="info-content">{state.situacionPrevia}</span>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4">
                                        <span className="info-title">Vacunas aplicadas</span>
                                    </div>
                                    <div className="col-8">
                                        <span className="info-content">{state.vacunas.length > 0 ? state.vacunas.join(", ") : "-"}</span>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4">
                                        <span className="info-title">Observaciones</span>
                                    </div>
                                    <div className="col-8">
                                        <span className="info-content">{state.descripcionAdicional ? state.descripcionAdicional : "-"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PreAdopcionModal />
            <AdoptionProcessStarted animalData={state} />
        </>
    );
}

export default AnimalDetalle;