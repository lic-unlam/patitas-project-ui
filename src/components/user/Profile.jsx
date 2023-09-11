import React, { useEffect, useRef } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import PreAdoptionForm from "./PreAdoptionForm";
import MisAdopciones from "./MisAdopciones";
import MisTurnos from "./MisTurnos";

const Profile = (props) => {
	const location = useLocation();
	const { pathname } = location; // obtengo el path actual
	//const params = useParams();
	const navigate = useNavigate();
	const cargado = useRef(false);

	const secciones = {
		perfil: "perfil",
		formularioPreAdopcion: "formulario-pre-adopcion",
		misAdopciones: "mis-adopciones",
		misTurnos: "mis-turnos",
		seguimientos: "seguimientos"
	}

	useEffect(() => {
		if(!cargado.current) {
			cargado.current = true;
			const tabs = document.querySelectorAll('button[data-bs-toggle="pill"]');

			tabs.forEach((tab) => tab.addEventListener('show.bs.tab', (event) => cambiarUrl(event)));

			return () => tabs.forEach((tab) => tab.removeEventListener('show.bs.tab', (event) => cambiarUrl(event)));
		}
	}, []);

	const cambiarUrl = (event) => {
		const buttonId = event.target.id;
		const tab = buttonId.substring(buttonId.indexOf('-') + 1, buttonId.lastIndexOf('-'));
		const toUrl = pathname.substring(0, pathname.lastIndexOf('/') + 1) + tab;
		navigate(toUrl);
	}

    return (
        <div className="profile-wrapper">
            <div className="row">
                <div className="col">
					<ul className="nav nav-pills nav-fill" id="pills-tab" role="tablist">
						<li className="nav-item" role="presentation">
							<button className={`nav-link ${props.seccionActiva === secciones.perfil ? "active" : ""}`} id={`pills-${secciones.perfil}-tab`} data-bs-toggle="pill" data-bs-target={`#pills-${secciones.perfil}`} type="button" role="tab"><i className="bi bi-person-fill"></i> Datos personales</button>
						</li>
						<li className="nav-item" role="presentation">
							<button className={`nav-link ${props.seccionActiva === secciones.formularioPreAdopcion ? "active" : ""}`} id={`pills-${secciones.formularioPreAdopcion}-tab`} data-bs-toggle="pill" data-bs-target={`#pills-${secciones.formularioPreAdopcion}`} type="button" role="tab"><i className="bi bi-file-text-fill"></i> Formulario de pre-adopción</button>
						</li>
						<li className="nav-item" role="presentation">
							<button className={`nav-link ${props.seccionActiva === secciones.misAdopciones ? "active" : ""}`} id={`pills-${secciones.misAdopciones}-tab`} data-bs-toggle="pill" data-bs-target={`#pills-${secciones.misAdopciones}`} type="button" role="tab"><i className="bi bi-house-heart-fill"></i> Mis adopciones</button>
						</li>
						<li className="nav-item" role="presentation">
							<button className={`nav-link ${props.seccionActiva === secciones.misTurnos ? "active" : ""}`} id={`pills-${secciones.misTurnos}-tab`} data-bs-toggle="pill" data-bs-target={`#pills-${secciones.misTurnos}`} type="button" role="tab"><i className="bi bi-gear-fill"></i> Mis turnos</button>
						</li>
						<li className="nav-item" role="presentation">
							<button className={`nav-link ${props.seccionActiva === secciones.seguimientos ? "active" : ""}`} id={`pills-${secciones.seguimientos}-tab`} data-bs-toggle="pill" data-bs-target={`#pills-${secciones.seguimientos}`} type="button" role="tab"><i className="bi bi-gear-fill"></i> Seguimientos</button>
						</li>
					</ul>
					<div className="tab-content" id="pills-tabContent">
						<div className={`tab-pane fade ${props.seccionActiva === secciones.perfil ? "show active" : ""}`} id={`pills-${secciones.perfil}`} role="tabpanel">
							<div className='row thumbnails-wrapper'>
								<p>Datos personales</p>
							</div>
						</div>
						<div className={`tab-pane fade ${props.seccionActiva === secciones.formularioPreAdopcion ? "show active" : ""}`} id={`pills-${secciones.formularioPreAdopcion}`} role="tabpanel">
                            <div className="row">
                                <PreAdoptionForm/>
                            </div>
                        </div>
						<div className={`tab-pane fade ${props.seccionActiva === secciones.misAdopciones ? "show active" : ""}`} id={`pills-${secciones.misAdopciones}`} role="tabpanel">
                            <MisAdopciones/>
                        </div>
						<div className={`tab-pane fade ${props.seccionActiva === secciones.misTurnos ? "show active" : ""}`} id={`pills-${secciones.misTurnos}`} role="tabpanel">
                            <MisTurnos/>
                        </div>
						<div className={`tab-pane fade ${props.seccionActiva === secciones.seguimientos ? "show active" : ""}`} id={`pills-${secciones.seguimientos}`} role="tabpanel">
                            Seguimientos
                        </div>
					</div>
				</div>
            </div>
        </div>
    );
}

export default Profile;