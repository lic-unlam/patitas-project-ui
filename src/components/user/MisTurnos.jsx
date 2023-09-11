import { Link, Outlet } from "react-router-dom";

const MisTurnos = () => {
    return (
        <div id="mis_turnos_wrapper">
            <h5 className="title">Turnos activos</h5>
            <hr/>
            <div className="list-group">
                <Link to="/adoptantes/1/mis-turnos/1" className="list-group-item list-group-item-action">Refugio "San Pedro" - Fecha programada: 20/11/2022 a las 12:00 hs. <span style={{'color': 'forestgreen', 'fontStyle': 'italic'}}><i className="bi bi-check-lg h5 align-middle"></i> Asistencia confirmada</span></Link>
            </div>
            <h5 className="title pt-4">Turnos pasados</h5>
            <hr/>
            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action">Refugio "San Pedro" - Fecha programada: 20/11/2022 a las 12:00 hs.</a>
                <a href="#" className="list-group-item list-group-item-action">Refugio "San Pedro" - Fecha programada: 20/11/2022 a las 12:00 hs. <span style={{'color': 'mediumvioletred', 'fontStyle': 'italic'}}><i className="bi bi-clock h5 align-middle"></i> Pedido de reprogramación enviado</span></a>
                <a href="#" className="list-group-item list-group-item-action">Refugio "San Pedro" - Fecha programada: 20/11/2022 a las 12:00 hs.</a>
                <a href="#" className="list-group-item list-group-item-action">Refugio "San Pedro" - Fecha programada: 20/11/2022 a las 12:00 hs. <span style={{'color': 'red', 'fontStyle': 'italic'}}><i className="bi bi-x h5 align-middle"></i> No asistió</span></a>
            </div>
            <Outlet/>
        </div>
    );
}

export default MisTurnos;