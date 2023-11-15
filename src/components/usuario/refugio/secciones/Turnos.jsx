import { useState, useCallback, useEffect, useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import { UserContext } from "src/components/layout/LayoutPublic";
import { TurnoTarjeta } from "../../TurnoTarjeta";
import Loading from "src/components/layout/Loading";
import { roles } from "src/utils/constants/user";

const Turnos = (props) => {
    const [ turnos, setTurnos ] = useState(null);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const sinRegistros = <div className="text-center pt-2 pb-4">
                            <span className="p-2 text-muted">No hay turnos que mostrar.</span>
                        </div>;

    const loadTurnos = useCallback(async () => {
        try {
            if(!user)
                throw new Error("No hay usuario logueado.");

            const response = await fetch("https://localhost:7277/api/turnos/refugio", {
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
        loadTurnos();
    }, [user]);

    if(!turnos)
        return <Loading />

    return (
        <div id="turnos_wrapper">
            <h5 className="title">Turnos activos</h5>
            <hr/>
            
            <div className="list-group">
                {
                    turnos.turnosActivos.length > 0 ?
                    <TurnoTarjeta turnos={turnos.turnosActivos} rol={roles.refugio} />
                    : sinRegistros
                }
            </div>
            
            <h5 className="title pt-4">Turnos pasados</h5>
            <hr/>
            
            <div className="list-group">
                {
                    turnos.turnosPasados.length > 0 ?
                    <TurnoTarjeta turnos={turnos.turnosPasados} rol={roles.refugio} />
                    : sinRegistros
                }
            </div>
            <Outlet/>
        </div>
    );
}

export default Turnos;