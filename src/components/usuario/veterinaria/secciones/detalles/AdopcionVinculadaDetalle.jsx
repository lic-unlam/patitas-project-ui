import { useState, useCallback, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";

import { UserContext } from "src/components/layout/LayoutPublic";
import { NuevoPlanForm } from "./NuevoPlanForm";
import Loading from "src/components/layout/Loading";

export const AdopcionVinculadaDetalle = (props) => {
    const { user } = useContext(UserContext);
    const { solicitudId } = useParams();

    const [ solicitudDetalle, setSolicitudDetalle ] = useState({});
    const [ showCrearPlanForm, setShowCrearPlanForm ] = useState(false);

    const getSolicitudDetalle = useCallback(async () => {
        try {
            const response = await fetch(`https://localhost:7277/api/veterinaria/solicitudes/${solicitudId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${user.accessToken}`
                }
            });
            
            if(!response.ok) {
                if(response.status === 403)
                    navigate("/error/forbidden");

                if(response.status === 401)
                    navigate("/error/unauthorized");

                throw new Error("Hubo un problema con la solicitud. Código: " + response.status);
            }
            
            const data = await response.json();
            setSolicitudDetalle(data); // seteo el estado para poder ver la información de solicitud
        }
        catch(error) {
            console.log(error.message);
        }
    }, [user]);

    useEffect(() => {
        document.title = props.title.concat(' - ', window.$title);

        if (user)
            getSolicitudDetalle();
    }, [getSolicitudDetalle]);

    const checkShowCrearPlanForm = () => {
        if(showCrearPlanForm)
            return <NuevoPlanForm setShowCrearPlanForm={setShowCrearPlanForm} especieId={solicitudDetalle.id_Especie} />;
        else
            return (
                <div className="text-center py-4">
                    <p>Esta solicitud aún no tiene definido un plan de vacunación.</p>
                    <button className="btn btn-seguimiento" onClick={() => setShowCrearPlanForm(true)}>Crear plan de vacunación</button>
                </div>
            );
    }

    const checkIfFaltaCompletar = () => {
        let faltaCompletar = solicitudDetalle.itemsVacunaDelPlan.find((item) => item.fechaDeAplicacion === null);
        
        if(faltaCompletar)
            return true;

        return false;
    }

    const getPlanillaDeVacunas = () => {
        return (
            <div id="planilla_de_vacunas_wrapper">
                {
                    checkIfFaltaCompletar() &&
                    <div className="text-center pt-2 pb-4">
                        {
                            solicitudDetalle.hayCitaProgramada ?
                            <h5 className="border border-4 rounded p-4">Existe una cita para vacunación programada. <b><Link to="/veterinaria/seguimientos-de-vacunacion">Consulte la sección de seguimientos.</Link></b></h5>
                            : <Link to={`/veterinaria/solicitudes/${solicitudId}/citas`} className="btn btn-warning">Crear cita para vacunación</Link>
                        }
                    </div>
                }

                {
                    solicitudDetalle.itemsVacunaDelPlan.map((item, index) =>
                        <div className="row justify-content-center py-2" key={index}>
                            <div className="col-12 col-md-6 fs-5">
                                <div>{item.nombreVacuna}</div>
                                <div className="fst-italic text-muted">({item.nroDosisAAplicar}º dosis)</div>
                            </div>
                            <div className="col-12 col-md-2 fs-5">
                                <img src={`/img/${item.fechaDeAplicacion ? "si" : "no"}.png`} className="img-fluid" width={50} alt="si_no_imagen" />
                            </div>
                        </div>
                    )
                }
                
                <p className="card bg-light fst-italic text-center p-3 my-4">Una vez que el adoptante complete todas las vacunas, se dará por finalizado el proceso de adopción.</p>
            </div>
        );
    }

    if(JSON.stringify(solicitudDetalle) === '{}')
        return (
            <Loading />
        );

    return (
        <div id="adopcion_detalle_wrapper">
            <h1 className="card bg-light py-1 title text-center">Adopción Nº {solicitudId}</h1>
            {
                !solicitudDetalle.faltanVacunas &&
                <div className="text-center p-4">
                    <h4 className="text-success fw-bold">Se completó el plan de vacunación correctamente.</h4>
                </div>
            }
            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <h5 className="card-title title fs-4 text-center py-2 border-bottom">Datos del animal</h5>
                    <div className="custom-modal-animal-img-wrapper">
                        <img src={solicitudDetalle.imgAnimal} className="img-fluid" alt="animal_a_adoptar" />
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 text-center fs-5">
                            <div className="py-4">
                                <Link to={`/refugios/${solicitudDetalle.id_Refugio}/animales/${solicitudDetalle.id_Animal}`} className="btn btn-primary">Ver ficha completa</Link>
                            </div>
                            <span className="fw-bold">Nombre:</span>
                            <p>{solicitudDetalle.nombreAnimal}</p>
                            <span className="fw-bold">Raza:</span>
                            <p>{solicitudDetalle.razaAnimal}</p>
                            <span className="fw-bold">Género:</span>
                            <p>{solicitudDetalle.generoAnimal}</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <h5 className="card-title title fs-4 text-center py-2 border-bottom">Plan de vacunación</h5>
                    {
                        solicitudDetalle.existeListaDeVacunas ?
                        getPlanillaDeVacunas()
                        : checkShowCrearPlanForm()
                    }
                </div>
            </div>
            {/*<div className="row">
                <div className="col-6">
                    <h4>Adoptante</h4>
                    <div className="row">
                        <div className="col-auto">
                            <img src="/img/default_profile_picture.png" width={150} alt="foto_perfil" />
                        </div>
                        <div className="col-8">
                            <p>correo</p>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <h4>Refugio</h4>
                </div>
            </div>*/}
        </div>
    );
}