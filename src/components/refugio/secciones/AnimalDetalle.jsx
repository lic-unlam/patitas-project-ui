import { useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import PreAdopcionModal from './PreAdopcionModal';
import AdoptionProcessStarted from './AdoptionProcessStarted';

const AnimalDetalle = (props) => {
    const navigate = useNavigate();
    const { animalId } = useParams();

    const closePublication = useCallback(() => {
        document.body.style.overflow = '';
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
		}
	}, [navigate,closePublication]);

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
                                <div className="col-9">
                                    <div className="request-adoption">
                                        <h4>¿Te gustaría adoptarme? ¿Quieres verme en persona?</h4>
                                        <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#preAdoptionModal">Pregunta por mí</button>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="close-button">
                                        <button className="btn" type="button" title="Cerrar" onClick={closePublication}>
                                            <i className="bi bi-x"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="information">
                                <span>Nombre:</span>
                                <p><img className="img-fluid" width={20} src="/img/huellas.png" alt="huella"/> Chispita</p>
                                <span>Edad aproximada:</span>
                                <p><img className="img-fluid" width={20} src="/img/huellas.png" alt="huella"/> 4 años</p>
                                <span>Situación previa:</span>
                                <p><img className="img-fluid" width={20} src="/img/huellas.png" alt="huella"/> En la calle</p>
                                <span>Vacunas aplicadas:</span>
                                <ul>
                                    <li>Rabia</li>
                                    <li>Moquillo</li>
                                    <li>Parvovirus</li>
                                </ul>
                                <span>Raza:</span>
                                <p><img className="img-fluid" width={20} src="/img/huellas.png" alt="huella"/> Labrador</p>
                                <span>Altura:</span>
                                <p><img className="img-fluid" width={20} src="/img/huellas.png" alt="huella"/> 60cm.</p>
                                <span>Esterilizado</span>
                                <p><img className="img-fluid" width={20} src="/img/huellas.png" alt="huella"/> Si</p>
                                <span>Desparasitado</span>
                                <p><img className="img-fluid" width={20} src="/img/huellas.png" alt="huella"/> Si</p>
                                <p>Observaciones:</p>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
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