import { Link, Outlet } from "react-router-dom";

const MisSeguimientos = () => {
    return (
        <div id="mis_turnos_wrapper">
            <div className="row justify-content-center mb-4">
                <label className="col-auto my-auto">Filtrar por: </label>
                <div className="col-10 col-md-4">
                    <select className="form-select" aria-label="Default select example">
                        <option defaultValue>Todas las veterinarias...</option>
                        <option value="1">Cuidados peludos</option>
                        <option value="2">El Arca de Noé</option>
                        <option value="3">El Paraíso de los Animales</option>
                    </select>
                </div>
            </div>
            <h5 className="title">Reservas para vacunación pendientes</h5>
            <hr/>
            <div className="list-group">
                <Link to="/adoptantes/1/seguimientos/1" className="list-group-item list-group-item-action">Veterinaria "El Arca de Noé" ➔ Fecha reservada: 20/11/2022 a las 12:00 hs. <span style={{'color': 'forestgreen', 'fontStyle': 'italic'}}><i className="bi bi-check-lg h5 align-middle"></i> Asistencia confirmada</span></Link>
            </div>
            <h5 className="title pt-4">Reservas concluidas</h5>
            <hr/>
            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action">Refugio "San Pedro" ➔ Fecha programada: 20/11/2022 a las 12:00 hs.</a>
                <a href="#" className="list-group-item list-group-item-action">Refugio "San Pedro" ➔ Fecha programada: 20/11/2022 a las 12:00 hs. <span style={{'color': 'mediumvioletred', 'fontStyle': 'italic'}}><i className="bi bi-clock h5 align-middle"></i> Pedido de reprogramación enviado</span></a>
                <a href="#" className="list-group-item list-group-item-action">Refugio "San Pedro" ➔ Fecha programada: 20/11/2022 a las 12:00 hs.</a>
                <a href="#" className="list-group-item list-group-item-action">Refugio "San Pedro" ➔ Fecha programada: 20/11/2022 a las 12:00 hs. <span style={{'color': 'red', 'fontStyle': 'italic'}}><i className="bi bi-x h5 align-middle"></i> No asistió</span></a>
            </div>
            <Outlet/>
        </div>
    );
}

export default MisSeguimientos;