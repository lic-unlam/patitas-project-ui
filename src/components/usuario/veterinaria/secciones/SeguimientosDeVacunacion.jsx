import { useState, useCallback, useEffect, useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import { UserContext } from "src/components/layout/LayoutPublic";
import { SeguimientoTarjeta } from "./SeguimientoTarjeta";
import Loading from "src/components/layout/Loading";
import { roles } from "src/utils/constants/user";

const SeguimientosDeVacunacion = (props) => {
    const [ turnos, setTurnos ] = useState(null);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const sinRegistros = <div className="text-center pt-2 pb-4">
                            <span className="p-2 text-muted">No hay citas para vacunaciones que mostrar.</span>
                        </div>;

    const loadTurnos = useCallback(async () => {
        try {
            const response = await fetch("https://localhost:7277/api/seguimientos/veterinaria", {
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
        <div id="seguimientos_wrapper">
            {/*<div className="row justify-content-center mb-4">
                <label className="col-auto my-auto">Filtrar por: </label>
                <div className="col-10 col-md-4">
                    <select className="form-select" aria-label="Default select example">
                        <option defaultValue>Todas las veterinarias...</option>
                        <option value="1">Cuidados peludos</option>
                        <option value="2">El Arca de Noé</option>
                        <option value="3">El Paraíso de los Animales</option>
                    </select>
                </div>
            </div>*/}

            <h5 className="title">Reservas para vacunación pendientes</h5>
            <hr/>

            <div className="list-group">
                {
                    turnos.citasActivas.length > 0 ?
                    <SeguimientoTarjeta turnos={turnos.citasActivas} rol={roles.veterinaria} />
                    : sinRegistros
                }
            </div>
            
            <h5 className="title pt-4">Reservas concluidas</h5>
            <hr/>

            <div className="list-group">
                {
                    turnos.citasPasadas.length > 0 ?
                    <SeguimientoTarjeta turnos={turnos.citasPasadas} rol={roles.veterinaria} desactivada={true} />
                    : sinRegistros
                }
            </div>
            <Outlet/>
        </div>
    );
}

export default SeguimientosDeVacunacion;