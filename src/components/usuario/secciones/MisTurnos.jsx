import { useState, useCallback, useEffect, useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import { UserContext } from "src/components/layout/LayoutPublic";
import { TurnoTarjeta } from "../TurnoTarjeta";
import Loading from "src/components/layout/Loading";
import { roles } from "src/utils/constants/user";

const MisTurnos = (props) => {
    const navigate = useNavigate();
    const [ turnos, setTurnos ] = useState(null);
    const { user } = useContext(UserContext);
    const sinRegistros = <div className="text-center pt-2 pb-4">
                            <span className="p-2 text-muted">No hay turnos que mostrar.</span>
                        </div>;

    const loadTurnos = useCallback(async () => {
        try {
            const response = await fetch("https://localhost:7277/api/turnos/adoptante", {
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
            setTurnos(data);
        }
        catch(error) {
            console.log(error.message);
        }
    }, [user]);

    useEffect(() => {
        document.title = props.title.concat(' - ', window.$title);

        if(user)
            loadTurnos();
    }, [loadTurnos]);

    if(!turnos)
        return <Loading />

    return (
        <div id="mis_turnos_wrapper">
            <div className="row pb-4">
                <div className="col-12 col-md-6">
                    <div className="row">
                        <label className="col-auto my-auto">Filtrar por: </label>
                        <div className="col-10 col-md-7">
                            <select className="form-select" aria-label="Filtrar por refugios">
                                <option defaultValue>Todos los refugios...</option>
                                <option value="1">San Pedro</option>
                                <option value="2">Santuario animal</option>
                                <option value="3">Cuidado animal</option>
                            </select>
                        </div>
                    </div>
                </div>
                {user.rol === roles.refugio && <div className="col-12 col-md-6">
                    <div className="d-flex justify-content-start justify-content-md-end pt-4 pt-md-0">
                        <button className="btn btn-primary">Crear nuevo turno</button>
                    </div>
                </div>}
            </div>

            <h5 className="title">Turnos activos</h5>
            <hr/>
            
            <div className="list-group">
                {
                    turnos.turnosActivos.length > 0 ?
                    <TurnoTarjeta turnos={turnos.turnosActivos} rol={roles.adoptante} />
                    : sinRegistros
                }
            </div>
            
            <h5 className="title pt-4">Turnos pasados</h5>
            <hr/>
            
            <div className="list-group">
                {
                    turnos.turnosPasados.length > 0 ?
                    <TurnoTarjeta turnos={turnos.turnosPasados} rol={roles.adoptante} />
                    : sinRegistros
                }
            </div>
            <Outlet/>
        </div>
    );
}

export default MisTurnos;