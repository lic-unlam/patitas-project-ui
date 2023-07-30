import {Link} from 'react-router-dom';

function Notifications() {
    return (
        <div className="notifications-wrapper">
            <h1>Notificaciones de refugios</h1>
            <h3><i className="bi bi-eye-slash"></i> Solicitudes pendientes</h3>
            <div className="card notification text-center">
                <div className="card-body">
                    <h5 className="card-title">El <Link to="/shelter/1">Refugio San Pedro</Link> ha respondido tu solicitud de adopción (Nº 150)</h5>
                    <img className="img-fluid" width={100} src="/img/clock.png" alt="clock"/>
                    <p className="card-text pt-2">Se te ha reservado un turno para visitar el refugio en la siguiente fecha:</p>
                    <p><b>20/11/2022 a las 12:00 hs.</b></p>
                    <button type="button" className="btn btn-danger me-4"><i className="bi bi-x-lg"></i> Cancelar adopción</button>
                    <button type="button" className="btn btn-primary me-4"><i className="bi bi-check-lg"></i> Confirmo asistencia</button>
                    <button type="button" className="btn btn-secondary"><i className="bi bi-clock"></i> Reprogramar cita</button>
                    <small className="d-block pt-4 pb-2"><i>Nota: en caso de no asistir el día indicado, el refugio se contactará contigo via telefónica y/o email.</i></small>
                </div>
                <div className="card-footer text-muted"><small>Mensaje recibido el 5/11/2022 21:30 hs.</small></div>
            </div>

            <h3><i className="bi bi-eye"></i> Solicitudes confirmadas</h3>
            <div className="card notification text-center">
                <div className="card-body">
                    <img className="img-fluid" width={80} src="/img/check.png" alt="check"/>
                    <h5 className="card-title">Visita confirmada</h5>
                    <p className="card-text pt-2">Has confirmado tu asistencia para visitar el <Link to="/shelter/1">Refugio San Pedro</Link> en la siguiente fecha:</p>
                    <p><b>20/11/2022 a las 12:00 hs.</b></p>
                </div>
                <div className="card-footer text-muted"><small>Visita confirmada el 5/11/2022 21:45 hs.</small></div>
            </div>
        </div>
    );
}

export default Notifications;