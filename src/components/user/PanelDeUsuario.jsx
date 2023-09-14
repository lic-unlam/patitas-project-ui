import React, { useEffect, useRef } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import PreAdoptionForm from "./PreAdoptionForm";
import MisAdopciones from "./MisAdopciones";
import MisTurnos from "./MisTurnos";
import MisSeguimientos from "./MisSeguimientos";

const PanelDeUsuario = (props) => {
	const location = useLocation();
	const { pathname } = location; // obtengo el path actual
	//const params = useParams();
	const navigate = useNavigate();
	const cargado = useRef(false);

	useEffect(() => {
		if(!cargado.current) {
			cargado.current = true;
			const tabButtons = document.querySelectorAll('button[data-bs-toggle="pill"]');
			tabButtons.forEach((tabButton) => tabButton.addEventListener('show.bs.tab', (event) => cambiarUrl(event)));

			return () => tabButtons.forEach((tabButton) => tabButton.removeEventListener('show.bs.tab', (event) => cambiarUrl(event)));
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
							<button className={`nav-link ${props.seccionActiva === props.tabs.datosPersonales ? "active" : ""}`} id={`pills-${props.tabs.datosPersonales}-tab`} data-bs-toggle="pill" data-bs-target={`#pills-${props.tabs.datosPersonales}`} type="button" role="tab"><i className="bi bi-person-fill"></i> Datos personales</button>
						</li>
						<li className="nav-item" role="presentation">
							<button className={`nav-link ${props.seccionActiva === props.tabs.formularioPreAdopcion ? "active" : ""}`} id={`pills-${props.tabs.formularioPreAdopcion}-tab`} data-bs-toggle="pill" data-bs-target={`#pills-${props.tabs.formularioPreAdopcion}`} type="button" role="tab"><i className="bi bi-file-text-fill"></i> Formulario de pre-adopción</button>
						</li>
						<li className="nav-item" role="presentation">
							<button className={`nav-link ${props.seccionActiva === props.tabs.misAdopciones ? "active" : ""}`} id={`pills-${props.tabs.misAdopciones}-tab`} data-bs-toggle="pill" data-bs-target={`#pills-${props.tabs.misAdopciones}`} type="button" role="tab"><i className="bi bi-house-heart-fill"></i> Mis adopciones</button>
						</li>
						<li className="nav-item" role="presentation">
							<button className={`nav-link ${props.seccionActiva === props.tabs.misTurnos ? "active" : ""}`} id={`pills-${props.tabs.misTurnos}-tab`} data-bs-toggle="pill" data-bs-target={`#pills-${props.tabs.misTurnos}`} type="button" role="tab"><i className="bi bi-gear-fill"></i> Mis turnos</button>
						</li>
						<li className="nav-item" role="presentation">
							<button className={`nav-link ${props.seccionActiva === props.tabs.seguimientos ? "active" : ""}`} id={`pills-${props.tabs.seguimientos}-tab`} data-bs-toggle="pill" data-bs-target={`#pills-${props.tabs.seguimientos}`} type="button" role="tab"><i className="bi bi-gear-fill"></i> Seguimientos</button>
						</li>
					</ul>
					<div className="tab-content" id="pills-tabContent">
						<div className={`tab-pane fade ${props.seccionActiva === props.tabs.datosPersonales ? "show active" : ""}`} id={`pills-${props.tabs.datosPersonales}`} role="tabpanel">
							<div className='row thumbnails-wrapper'>
								<p>Datos personales</p>
							</div>
						</div>
						<div className={`tab-pane fade ${props.seccionActiva === props.tabs.formularioPreAdopcion ? "show active" : ""}`} id={`pills-${props.tabs.formularioPreAdopcion}`} role="tabpanel">
                            <div className="row">
                                <PreAdoptionForm />
                            </div>
                        </div>
						<div className={`tab-pane fade ${props.seccionActiva === props.tabs.misAdopciones ? "show active" : ""}`} id={`pills-${props.tabs.misAdopciones}`} role="tabpanel">
                            <MisAdopciones />
                        </div>
						<div className={`tab-pane fade ${props.seccionActiva === props.tabs.misTurnos ? "show active" : ""}`} id={`pills-${props.tabs.misTurnos}`} role="tabpanel">
                            <MisTurnos />
                        </div>
						<div className={`tab-pane fade ${props.seccionActiva === props.tabs.seguimientos ? "show active" : ""}`} id={`pills-${props.tabs.seguimientos}`} role="tabpanel">
                            <MisSeguimientos />
                        </div>
					</div>
				</div>
            </div>
        </div>
    );
}

export default PanelDeUsuario;