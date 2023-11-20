import { useState, useCallback, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { UserContext } from "src/components/layout/LayoutPublic";
import { SolicitudTarjeta } from "../../adoptante/secciones/tarjetas/SolicitudTarjeta";
import Loading from "src/components/layout/Loading";
import { roles } from "src/utils/constants/user";

export const AdopcionesVinculadas = (props) => {
    const { user } = useContext(UserContext); // datos del estado del usuario
    const [solicitudes, setSolicitudes] = useState(null);
    const navigate = useNavigate();
    const sinRegistros = <div className="text-center pt-2 pb-4">
                            <span className="p-2 text-muted">No hay registros que mostrar.</span>
                        </div>;

    const loadSolicitudesVinculadas = useCallback(async () => {
        try {
            const response = await fetch("https://localhost:7277/api/solicitudes/veterinaria", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${user.accessToken}`
                }
            });

            if(!response.ok) {
                if(response.status === 403)
                    navigate("/error/forbidden");

                if(response.status === 401)
                    navigate("/error/unauthorized");
                
                throw new Error("Hubo un problema con la solicitud. Código de error " + response.status);
            }
            
            const data = await response.json();
            setSolicitudes(data);
        }
        catch(error) {
            console.log(error.message);
        }
    }, [user]);

    useEffect(() => {
        document.title = props.title.concat(' - ', window.$title);

        if(user)
            loadSolicitudesVinculadas();
    }, [loadSolicitudesVinculadas]);

    if(!solicitudes)
        return <Loading />

    return (
        <div id="solicitudes_vinculadas_wrapper">
            <h5 className="title text-center">Solicitudes activas</h5>
            <hr />

            <div className="list-group">
                {
                    solicitudes.solicitudesActuales.length > 0 ?
                    <SolicitudTarjeta solicitudes={solicitudes.solicitudesActuales} verificarExistenciaTurno={true} rol={roles.veterinaria} />
                    : sinRegistros
                }
            </div>

            <h5 className="title text-center">Solicitudes pasadas</h5>
            <hr />

            <div className="list-group">
                {
                    solicitudes.solicitudesPasadas.length > 0 ?
                    <SolicitudTarjeta solicitudes={solicitudes.solicitudesPasadas} rol={roles.veterinaria} />
                    : sinRegistros
                }
            </div>
        </div>
    );
}