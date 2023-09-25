import React, { useEffect, useRef } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

import { PerfilAdoptante } from "./adoptante/secciones/PerfilAdoptante";
import FormularioPreAdopcion from "./secciones/FormularioPreAdopcion";
import MisAdopciones from "./secciones/MisAdopciones";
import MisTurnos from "./secciones/MisTurnos";
import MisSeguimientos from "./secciones/MisSeguimientos";

const PanelDeUsuario = (props) => {
	const { id } = useParams(); // id del usuario logueado
	const location = useLocation();
	const { pathname } = location; // obtengo el path actual
	const navigate = useNavigate();
	const cargado = useRef(false); // para evitar que el useEffect se ejecute dos veces por el strict mode de React

	useEffect(() => {
		if(!cargado.current) {
			cargado.current = true;
			const tabButtons = document.querySelectorAll('button[data-bs-toggle="pill"]');
			tabButtons.forEach((tabButton) =>
				tabButton.addEventListener(
					'show.bs.tab',
					(event) => navigate(event.target.dataset.url)
				)
			);

			return () => tabButtons.forEach((tabButton) =>
				tabButton.removeEventListener(
					'show.bs.tab',
					(event) => navigate(event.target.dataset.url)
				)
			);
		}
	}, []);

    return (
        <div className="profile-wrapper">
            <div className="row">
                <div className="col">
					<ul className="nav nav-pills nav-fill" id="pills-tab" role="tablist">
						<li className="nav-item" role="presentation">
							<button className={`nav-link ${props.seccionActiva === props.tabs.datosPersonales ? "active" : ""}`} id={`pills-${props.tabs.datosPersonales}-tab`} data-url={`/adoptantes/${id}/${props.tabs.datosPersonales}`} data-bs-toggle="pill" data-bs-target={`#pills-${props.tabs.datosPersonales}`} type="button" role="tab"><img src="/img/usuarios/perfil.png" width={32} alt="datos_personales_icon" /> Datos personales</button>
						</li>
						<li className="nav-item" role="presentation">
							<button className={`nav-link ${props.seccionActiva === props.tabs.formularioPreAdopcion ? "active" : ""}`} id={`pills-${props.tabs.formularioPreAdopcion}-tab`} data-url={`/adoptantes/${id}/${props.tabs.formularioPreAdopcion}`} data-bs-toggle="pill" data-bs-target={`#pills-${props.tabs.formularioPreAdopcion}`} type="button" role="tab"><img src="/img/usuarios/pre_adopcion_2.png" width={32} alt="pre_adopcion_icon" /> Formulario pre-adopción</button>
						</li>
						<li className="nav-item" role="presentation">
							<button className={`nav-link ${props.seccionActiva === props.tabs.misAdopciones ? "active" : ""}`} id={`pills-${props.tabs.misAdopciones}-tab`} data-url={`/adoptantes/${id}/${props.tabs.misAdopciones}`} data-bs-toggle="pill" data-bs-target={`#pills-${props.tabs.misAdopciones}`} type="button" role="tab"><img src="/img/usuarios/perro_corazon.png" width={32} alt="mis_adopciones_icon" /> Mis adopciones</button>
						</li>
						<li className="nav-item" role="presentation">
							<button className={`nav-link ${props.seccionActiva === props.tabs.misTurnos ? "active" : ""}`} id={`pills-${props.tabs.misTurnos}-tab`} data-url={`/adoptantes/${id}/${props.tabs.misTurnos}`} data-bs-toggle="pill" data-bs-target={`#pills-${props.tabs.misTurnos}`} type="button" role="tab"><img src="/img/usuarios/turnos.png" width={32} alt="mis_turnos_icon" /> Mis turnos</button>
						</li>
						<li className="nav-item" role="presentation">
							<button className={`nav-link ${props.seccionActiva === props.tabs.seguimientos ? "active" : ""}`} id={`pills-${props.tabs.seguimientos}-tab`} data-url={`/adoptantes/${id}/${props.tabs.seguimientos}`} data-bs-toggle="pill" data-bs-target={`#pills-${props.tabs.seguimientos}`} type="button" role="tab"><img src="/img/usuarios/jeringa.png" width={32} alt="seguimientos_icon" /> Seguimientos</button>
						</li>
					</ul>
					<div className="tab-content" id="pills-tabContent">
						<div className={`tab-pane fade ${props.seccionActiva === props.tabs.datosPersonales ? "show active" : ""}`} id={`pills-${props.tabs.datosPersonales}`} role="tabpanel">
							<div className="row">
								<PerfilAdoptante />
							</div>
						</div>
						<div className={`tab-pane fade ${props.seccionActiva === props.tabs.formularioPreAdopcion ? "show active" : ""}`} id={`pills-${props.tabs.formularioPreAdopcion}`} role="tabpanel">
                            <div className="row">
                                <FormularioPreAdopcion mostrarGuardado={true} />
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