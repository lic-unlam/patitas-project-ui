import { Link, Outlet } from "react-router-dom";

const MisTurnos = () => {
    return (
        <div id="mis_turnos_wrapper">
            <h5 className="title">Turnos activos</h5>
            <hr/>
            <div className="list-group">
                <Link to="/adoptantes/1/mis-turnos/1" className="list-group-item list-group-item-action">Refugio "San Pedro" - Fecha programada: 20/11/2022 a las 12:00 hs.</Link>
                <Outlet/>
            </div>
            <h5 className="title pt-4">Turnos pasados</h5>
            <hr/>
            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action">Refugio "San Pedro" - Fecha programada: 20/11/2022 a las 12:00 hs.</a>
                <a href="#" className="list-group-item list-group-item-action">Refugio "San Pedro" - Fecha programada: 20/11/2022 a las 12:00 hs.</a>
                <a href="#" className="list-group-item list-group-item-action">Refugio "San Pedro" - Fecha programada: 20/11/2022 a las 12:00 hs.</a>
                <a href="#" className="list-group-item list-group-item-action">Refugio "San Pedro" - Fecha programada: 20/11/2022 a las 12:00 hs.</a>
            </div>
        </div>
    );
}

export default MisTurnos;