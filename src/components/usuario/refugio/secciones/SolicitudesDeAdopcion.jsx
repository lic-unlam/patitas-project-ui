import { useState, useCallback, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { UserContext } from "src/components/layout/LayoutPublic";
import { SolicitudTarjeta } from "../../adoptante/secciones/tarjetas/SolicitudTarjeta";
import Loading from "src/components/layout/Loading";
import { roles } from "src/utils/constants/user";

export const SolicitudesDeAdopcion = (props) => {
    const { user } = useContext(UserContext); // datos del estado del usuario
    const [solicitudes, setSolicitudes] = useState(null);
    const navigate = useNavigate();
    const sinRegistros = <div className="text-center pt-2 pb-4">
                            <span className="p-2 text-muted">No hay registros que mostrar.</span>
                        </div>;

    const loadSolicitudesDeAdopcion = useCallback(async () => {
        try {
            if(!user)
                throw new Error("No hay usuario logueado.");

            const response = await fetch("https://localhost:7277/api/solicitudes-adopcion/refugio", {
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
        loadSolicitudesDeAdopcion();
    }, [user]);

    if(!solicitudes)
        return <Loading />

    return (
        <div id="solicitudes_de_adopcion_wrapper">
            <hr/>
            <h5 className="title text-center">Procesos de adopción en curso</h5>
            <hr/>
            
            <div className="list-group">
                {
                    solicitudes.adopcionesEnCurso.length > 0 ?
                    <SolicitudTarjeta solicitudes={solicitudes.adopcionesEnCurso} verificarExistenciaTurno={true} rol={roles.refugio} />
                    : sinRegistros
                }
            </div>

            <hr/>
            <h5 className="title text-center">Solicitudes pendientes de aprobación</h5>
            <hr/>

            <div className="list-group">
                {
                    solicitudes.pendientesDeAprobacion.length > 0 ?
                    <SolicitudTarjeta solicitudes={solicitudes.pendientesDeAprobacion} rol={roles.refugio} />
                    : sinRegistros
                }
            </div>

            <hr/>
            <h5 className="title text-center">Adopciones exitosas</h5>
            <hr/>

            <div className="list-group">
                {
                    solicitudes.adopcionesExitosas.length > 0 ?
                    <SolicitudTarjeta solicitudes={solicitudes.adopcionesExitosas} rol={roles.refugio} />
                    : sinRegistros
                }
            </div>

            <hr/>
            <h5 className="title text-center">Adopciones canceladas</h5>
            <hr/>

            <div className="list-group">
                {
                    solicitudes.adopcionesCanceladas.length > 0 ?
                    <SolicitudTarjeta solicitudes={solicitudes.adopcionesCanceladas} rol={roles.refugio} />
                    : sinRegistros
                }
            </div>
        </div>
    );
}