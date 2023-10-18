import { useEffect, useCallback, useContext } from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';

import PreAdopcionModal from './PreAdopcionModal';
import AdoptionProcessStarted from './AdoptionProcessStarted';

import { UserContext } from 'src/components/layout/LayoutPublic';

import { genero } from 'src/utils/constants/refugio';

const AnimalDetalle = (props) => {
    const navigate = useNavigate();
    const { animalId } = useParams();
    let { user } = useContext(UserContext);
    let { state } = useLocation();

    let fecha_ingreso = new Date(state.fechaIngreso).toLocaleDateString();
    let edadAproximada = new Date().getFullYear() - state.nacimiento;

    const closePublication = useCallback(() => {
        navigate('..');
    }, [navigate]); // uso 'useCallback' porque voy a utilizar esta función dentro de useEffect

    useEffect(() => {
        document.title = props.title.concat(' - ', window.$title);

		const goBack = (event) => {
			if((event.key === 'Escape') && !document.querySelector('#preAdoptionModal').classList.contains('show') && !document.querySelector('#startAdoptionModal').classList.contains('show'))
				closePublication();
		}
		
		document.addEventListener("keydown", goBack);
        
        document.body.style.overflow = "hidden";

		return () => {
			document.removeEventListener("keydown", goBack);
            document.body.style.overflow = '';
            //return true;
		}
	}, [closePublication]);

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
                                        <h3>¿Te gustaría adoptarme?</h3>
                                        <h3>¿Quieres verme en persona?</h3>
                                        {user ?
                                        <div>
                                            <button className="btn btn-primary py-2 my-2" type="button" data-bs-toggle="modal" data-bs-target="#preAdoptionModal">Pregunta por mí</button>
                                            <img src="https://cdn-icons-png.flaticon.com/512/3047/3047928.png" className="ps-2" width={50} />
                                        </div>
                                            : <h5 className="pt-2"><Link to="/auth/signin">Crea una cuenta</Link> y conóceme <i className="bi bi-heart-fill align-middle text-danger"></i></h5>}
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
                                <div className="row">
                                    <div className="col-4">
                                        <span>Nombre</span>
                                        <p><img className="img-fluid" width={20} src="/img/huellas.png" alt="huella"/> {state.nombre}</p>
                                    </div>
                                    <div className='col-4'>
                                        <span>Raza</span>
                                        <p><img className="img-fluid" width={20} src="/img/huellas.png" alt="huella"/> {state.raza}</p>
                                    </div>
                                    <div className="col-4">
                                        <span>Edad aproximada</span>
                                        <p><img className="img-fluid" width={20} src="/img/huellas.png" alt="huella"/> {edadAproximada > 0 ? edadAproximada + ((edadAproximada !== 1) ? " años" : " año") : "Menos de un año"}</p>
                                    </div>
                                    <div className="col-4">
                                        <span>Género</span>
                                        <p><img className="img-fluid" width={20} src="/img/huellas.png" alt="huella"/> {state.genero === 'H' ? genero.hembra : genero.macho}</p>
                                    </div>
                                    <div className="col-4">
                                        <span>Peso</span>
                                        <p><img className="img-fluid" width={20} src="/img/huellas.png" alt="huella"/> {state.peso} kg.</p>
                                    </div>
                                    <div className="col-4">
                                        <span>Altura</span>
                                        <p><img className="img-fluid" width={20} src="/img/huellas.png" alt="huella"/> {Math.round(state.altura * 100)} cm.</p>
                                    </div>
                                    <div className="col-4">
                                        <span>Fecha de ingreso</span>
                                        <p><img className="img-fluid" width={20} src="/img/huellas.png" alt="huella"/> {fecha_ingreso}</p>
                                    </div>
                                    <div className="col-4">
                                        <span>Esterilizado</span>
                                        <p><img className="img-fluid" width={20} src="/img/huellas.png" alt="huella"/> {state.esterilizado ? "Si" : "No"}</p>
                                    </div>
                                    <div className="col-4">
                                        <span>Desparasitado</span>
                                        <p><img className="img-fluid" width={20} src="/img/huellas.png" alt="huella"/> {state.desparasitado ? "Si" : "No"}</p>
                                    </div>
                                    <div className="col-4">
                                        <span>Vacunas aplicadas:</span>
                                        { state.vacunas.length > 0 ?
                                        <ul>
                                            {state.vacunas.map((vacuna, index) => <li key={index}>{vacuna}</li>)}
                                        </ul>
                                        : <div>-</div>}
                                    </div>
                                    <div className="col-8">
                                        <span>Situación previa</span>
                                        <p><img className="img-fluid" width={20} src="/img/huellas.png" alt="huella"/> {state.situacionPrevia}</p>
                                    </div>
                                </div>
                                <span>Observaciones:</span>
                                {state.descripcionAdicional ?
                                    <p>
                                        <img className="img-fluid" width={20} src="/img/huellas.png" alt="huella"/> {state.descripcionAdicional}
                                    </p>
                                    : <p>-</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PreAdopcionModal />
            <AdoptionProcessStarted/>
        </>
    );
}

export default AnimalDetalle;