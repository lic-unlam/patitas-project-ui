import { useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import PreAdopcionModal from './PreAdopcionModal';
import AdoptionProcessStarted from './AdoptionProcessStarted';

const AnimalDetalle = (props) => {
    const navigate = useNavigate();
    const { animalId } = useParams();

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
            return true;
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
                                <div className="col-10">
                                    <div className="request-adoption">
                                        <h4>¿Te gustaría adoptarme?</h4>
                                        <h4>¿Quieres verme en persona?</h4>
                                        <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#preAdoptionModal">Pregunta por mí</button>
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
                                        <p><img className="img-fluid" width={20} src="/img/huellas.png" alt="huella"/> Chispita</p>
                                    </div>
                                    <div className='col-4'>
                                        <span>Raza</span>
                                        <p><img className="img-fluid" width={20} src="/img/huellas.png" alt="huella"/> Golden Retriever</p>
                                    </div>
                                    <div className="col-4">
                                        <span>Edad aproximada</span>
                                        <p><img className="img-fluid" width={20} src="/img/huellas.png" alt="huella"/> 4 meses</p>
                                    </div>
                                    <div className="col-4">
                                        <span>Género</span>
                                        <p><img className="img-fluid" width={20} src="/img/huellas.png" alt="huella"/> Macho</p>
                                    </div>
                                    <div className="col-4">
                                        <span>Peso</span>
                                        <p><img className="img-fluid" width={20} src="/img/huellas.png" alt="huella"/> 10 kg.</p>
                                    </div>
                                    <div className="col-4">
                                        <span>Altura</span>
                                        <p><img className="img-fluid" width={20} src="/img/huellas.png" alt="huella"/> 35cm.</p>
                                    </div>
                                    <div className="col-4">
                                        <span>Fecha de ingreso</span>
                                        <p><img className="img-fluid" width={20} src="/img/huellas.png" alt="huella"/> 14/09/2023</p>
                                    </div>
                                    <div className="col-4">
                                        <span>Esterilizado</span>
                                        <p><img className="img-fluid" width={20} src="/img/huellas.png" alt="huella"/> Si</p>
                                    </div>
                                    <div className="col-4">
                                        <span>Desparasitado</span>
                                        <p><img className="img-fluid" width={20} src="/img/huellas.png" alt="huella"/> Si</p>
                                    </div>
                                    <div className="col-4">
                                        <span>Vacunas aplicadas:</span>
                                        <ul>
                                            <li>Rabia</li>
                                            <li>Moquillo</li>
                                            <li>Parvovirus</li>
                                        </ul>
                                    </div>
                                    <div className="col-8">
                                        <span>Situación previa</span>
                                        <p><img className="img-fluid" width={20} src="/img/huellas.png" alt="huella"/> El perro fue traído a nosotros por un vecino porque hacía meses que rondaba su zona y dormía en la vereda.</p>
                                    </div>
                                </div>
                                <span>Observaciones:</span>
                                <p><img className="img-fluid" width={20} src="/img/huellas.png" alt="huella"/> Presentaba signos de mala alimentación y bajo peso para su edad. También presentaba algunas raspaduras superficiales que fueron tratadas inmediatamente.</p>
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