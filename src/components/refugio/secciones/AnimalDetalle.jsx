import { useEffect, useCallback, useContext, useState } from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';

import PreAdopcionModal from './PreAdopcionModal';
import AdoptionProcessStarted from './AdoptionProcessStarted';
import { UserContext } from 'src/components/layout/LayoutPublic';
import { genero } from 'src/utils/constants/refugio';
import Loading from 'src/components/layout/Loading';

const AnimalDetalle = (props) => {
    const navigate = useNavigate();
    const { id, animalId } = useParams(); // obtengo el id del refugio y el animal desde la url
    let { user } = useContext(UserContext); // datos del estado del usuario
    const [ animalDetalle, setAnimalDetalle ] = useState({});
    
    // los datos del animal obtenidos desde la API en el componente padre y pasados como 'state' al redireccionarse a este componente
    //let { state } = useLocation();

    // formateo los datos recibidos de fecha de ingreso y nacimiento para presentarlos
    //let fecha_ingreso = new Date(state.fechaIngreso).toLocaleDateString();
    //let edadAproximada = new Date().getFullYear() - state.nacimiento;

    const closePublication = useCallback(() => {
        navigate('..');
    }, [navigate]); // uso 'useCallback' porque voy a utilizar esta función dentro de useEffect

    const goBack = useCallback((event) => {
        if((event.key === 'Escape') && !document.querySelector('#preAdoptionModal').classList.contains('show') && !document.querySelector('#startAdoptionModal').classList.contains('show'))
            closePublication();
    }, [closePublication]);

    const getAnimalDetalle = useCallback(async () => {
        try {
            let requestOptions = { method: "GET" };
            let token = localStorage.getItem("userData");

            if(token) {
                token = JSON.parse(token);

                requestOptions = {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token.accessToken}`
                    }
                }
            }
            
            const response = await fetch(`https://localhost:7277/api/refugios/${id}/animales/${animalId}`, requestOptions);
        
            if(!response.ok)
                throw new Error("Hubo un problema con la solicitud. Código: " + response.status);

            const data = await response.json();
            setAnimalDetalle(data);
        }
        catch(error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        document.title = props.title.concat(' - ', window.$title);
		document.addEventListener("keydown", goBack);
        document.body.style.overflow = "hidden";
        getAnimalDetalle();

		return () => {
			document.removeEventListener("keydown", goBack);
            document.body.style.overflow = '';
		}
	}, [goBack, getAnimalDetalle]);

    if(Object.keys(animalDetalle).length <= 0)
        return <>
            <div className="overlay"></div>
            <Loading />
        </>

    return (
        <>
            <div className="overlay"></div>
            <div className="post-wrapper">
                <div className="row">
                    <div className="col-6 text-center">
                        <img className="img-fluid post-image" src={animalDetalle.fotografia} alt="post_image"/>
                    </div>
                    <div className="col-6">
                        <div className="post-content">
                            <div className="row">
                                <div className="col-10">
                                    <div className="request-adoption">
                                        {animalDetalle.solicitudActiva ?
                                        <h3>Ya tienes una <Link to="/adoptante/mis-adopciones">solicitud activa</Link> para adoptar a {animalDetalle.nombre}.<img src="/img/check.png" width={50} className="d-inline" alt="check" /></h3> :
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
                                        <span className="info-content">{animalDetalle.nombre}</span>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4">
                                        <span className="info-title">Raza</span>
                                    </div>
                                    <div className="col-8">
                                        <span className="info-content">{animalDetalle.raza}</span>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4">
                                        <span className="info-title">Edad aproximada</span>
                                    </div>
                                    <div className="col-8">
                                        <span className="info-content">{animalDetalle.edad > 0 ? animalDetalle.edad + ((animalDetalle.edad !== 1) ? " años" : " año") : "Menos de un año"}</span>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4">
                                        <span className="info-title">Género</span>
                                    </div>
                                    <div className="col-8">
                                        <span className="info-content">{animalDetalle.genero === 'H' ? genero.hembra : genero.macho}</span>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4">
                                        <span className="info-title">Peso</span>
                                    </div>
                                    <div className="col-8">
                                        <span className="info-content">{animalDetalle.peso} kg.</span>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4">
                                        <span className="info-title">Altura</span>
                                    </div>
                                    <div className="col-8">
                                        <span className="info-content">{Math.round(animalDetalle.altura * 100)} cm.</span>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4">
                                        <span className="info-title">Fecha de ingreso</span>
                                    </div>
                                    <div className="col-8">
                                        <span className="info-content">{animalDetalle.fechaIngreso}</span>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4">
                                        <span className="info-title">Esterilizado</span>
                                    </div>
                                    <div className="col-8">
                                        <span className="info-content">{animalDetalle.esterilizado ? "Si" : "No"}</span>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4">
                                        <span className="info-title">Desparasitado</span>
                                    </div>
                                    <div className="col-8">
                                        <span className="info-content">{animalDetalle.desparasitado ? "Si" : "No"}</span>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4">
                                        <span className="info-title">Situación previa</span>
                                    </div>
                                    <div className="col-8">
                                        <span className="info-content">{animalDetalle.situacionPrevia}</span>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4">
                                        <span className="info-title">Vacunas aplicadas</span>
                                    </div>
                                    <div className="col-8">
                                        <span className="info-content">{animalDetalle.vacunas.length > 0 ? animalDetalle.vacunas.join(", ") : "-"}</span>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4">
                                        <span className="info-title">Observaciones</span>
                                    </div>
                                    <div className="col-8">
                                        <span className="info-content">{animalDetalle.descripcionAdicional ? animalDetalle.descripcionAdicional : "-"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PreAdopcionModal />
            <AdoptionProcessStarted refugioId={id} />
        </>
    );
}

export default AnimalDetalle;