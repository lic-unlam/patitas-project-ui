import React, { useEffect, useRef } from "react";
import { useLocation, useParams, useNavigate, Link } from "react-router-dom";

import { PerfilAdoptante } from "./adoptante/secciones/PerfilAdoptante";
import FormularioPreAdopcion from "./secciones/FormularioPreAdopcion";
import MisAdopciones from "./secciones/MisAdopciones";
import MisTurnos from "./secciones/MisTurnos";
import MisSeguimientos from "./secciones/MisSeguimientos";

const PanelDeUsuario = (props) => {
	//const { id } = useParams(); // id del usuario logueado
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

	const cargarSeccion = (seccion) => {
		switch(seccion) {
			case props.tabs.datosPersonales:
				return <PerfilAdoptante title="Datos personales" />
			case props.tabs.misAdopciones:
				return <MisAdopciones title="Mis adopciones" />
			case props.tabs.misTurnos:
				return <MisTurnos title="Mis turnos" />
			case props.tabs.misSeguimientos:
				return <MisSeguimientos title="Mis seguimientos" />
			default:
				break;
		}
	}

    return (
		<div id="profile-wrapper">
			<ul className="nav nav-underline nav-fill p-4">
				<li className="nav-item">
					<Link to={`/adoptante/${props.tabs.datosPersonales}`} className={`nav-link ${(props.seccionActiva === props.tabs.datosPersonales) ? "active" : "" }`}><img src="/img/usuarios/perfil.png" width={32} alt="datos_personales_icon" /> Datos personales</Link>
				</li>
				<li className="nav-item">
					<Link to={`/adoptante/${props.tabs.misAdopciones}`} className={`nav-link ${(props.seccionActiva === props.tabs.misAdopciones) ? "active" : "" }`}><img src="/img/usuarios/perro_corazon.png" width={32} alt="mis_adopciones_icon" /> Mis adopciones</Link>
				</li>
				<li className="nav-item">
					<Link to={`/adoptante/${props.tabs.misTurnos}`} className={`nav-link ${(props.seccionActiva === props.tabs.misTurnos) ? "active" : "" }`}><img src="/img/usuarios/turnos.png" width={32} alt="mis_turnos_icon" /> Mis turnos</Link>
				</li>
				<li className="nav-item">
					<Link to={`/adoptante/${props.tabs.misSeguimientos}`} className={`nav-link ${(props.seccionActiva === props.tabs.misSeguimientos) ? "active" : "" }`}><img src="/img/usuarios/jeringa.png" width={32} alt="mis_seguimientos_icon" /> Mis seguimientos</Link>
				</li>
			</ul>
			{/*<Outlet context={{refugio}} />*/}
			{cargarSeccion(props.seccionActiva)}
		</div>
    );
}

export default PanelDeUsuario;