import { useState, useCallback, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { CustomModal } from "../../../layout/CustomModal";
import PlanDeVacunacion from "../../PlanDeVacunacion";
import Loading from "src/components/layout/Loading";
import { UserContext } from "src/components/layout/LayoutPublic";

export const AdopcionDetalle = () => {
    const [ adopcionDetalle, setAdopcionDetalle ] = useState({}); // contiene la información de la adopción
    const { solicitudId } = useParams(); // obtengo el id de la solicitud
    const { user } = useContext(UserContext); // cargo el usuario logueado

    const getAdopcionDetalle = useCallback(async () => {
        try {
            if(!user)
                throw new Error("No hay usuario logueado.");

            const response = await fetch(`https://localhost:7277/api/adoptante/solicitudes/${solicitudId}`, {
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
            setAdopcionDetalle(data); // seteo el estado para poder ver la información de adopción
        }
        catch(error) {
            console.log(error.message);
        }
    }, []);

    useEffect(() => {
        getAdopcionDetalle();
    }, [getAdopcionDetalle]);

    if(JSON.stringify(adopcionDetalle) === '{}')
        return (
            <CustomModal>
                <Loading />
            </CustomModal>
        );

    return (
            <CustomModal>
                <h4 className="title">Solicitud de adopción Nº {adopcionDetalle.nroSolicitud}</h4>
                <hr/>
                <p style={{'color': 'crimson', 'fontStyle': 'italic'}} className="align-text-bottom" hidden={adopcionDetalle.snAprobada}>
                    <i className="bi bi-exclamation-diamond-fill h5 align-middle"></i> Pendiente de aprobación
                </p>
                <div className="row">
                    <div className="col-12 col-md-7">
                        <span className="fs-6 fw-bold">Fecha de inicio:</span>
                        <p>{adopcionDetalle.fechaInicio} a las {adopcionDetalle.horaInicio} hs.</p>
                        <span className="fs-6 fw-bold">Animal que quieres adoptar:</span>
                        <p>{adopcionDetalle.nombreAnimal} - Raza {adopcionDetalle.razaAnimal} ({adopcionDetalle.generoAnimal === 'M' ? "Macho" : "Hembra"})</p>
                        <Link to={`/refugios/${adopcionDetalle.refugioId}/animales/${adopcionDetalle.animalId}`} className="btn btn-sm btn-primary">Ver ficha</Link>
                        <div className="custom-modal-animal-img-wrapper">
                            <img src={adopcionDetalle.imgAnimal} alt="animal_a_adoptar" />
                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                        <span className="fs-6 fw-bold">Refugio:</span>
                        <p>{adopcionDetalle.nombreRefugio} ({adopcionDetalle.direccionRefugio}, {adopcionDetalle.barrioRefugio})</p>
                        <span className="fs-6 fw-bold">Responsable a cargo:</span>
                        <p>{adopcionDetalle.txtResponsable}</p>
                        <div className="d-grid gap-2">
                            <Link to="/adoptante/mis-turnos" hidden={!adopcionDetalle.snTurnos} className="btn btn-sm btn-block btn-success">Turnos</Link>
                            <Link to={adopcionDetalle.lnkSeguimiento} hidden={!adopcionDetalle.snSeguimiento} className="btn btn-sm btn-block btn-danger">Seguimiento de vacunación</Link>
                            <Link to={adopcionDetalle.lnkCalificarRefugio} hidden={!adopcionDetalle.snCalificarRefugio} className="btn btn-sm btn-block btn-warning">Calificar refugio</Link>
                            {adopcionDetalle.snPlanVacunacion && <PlanDeVacunacion />}
                        </div>
                    </div>
                </div>
            </CustomModal>
    );
}