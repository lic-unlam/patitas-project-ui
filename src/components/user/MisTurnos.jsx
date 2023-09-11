import { Link } from "react-router-dom";

const MisTurnos = () => {
    return (
        <div id="mis_turnos_wrapper">
            <h5>Turnos activos</h5>
            <hr/>
            <div className="list-group">
                <Link to="/adoptantes/1/turnos/1" className="list-group-item list-group-item-action">Refugio "San Pedro" - Fecha programada: 20/11/2022 a las 12:00 hs.</Link>
            </div>
            <h5 className="pt-4">Turnos pasados</h5>
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