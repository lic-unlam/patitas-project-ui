import React, { useEffect, useRef } from 'react';
import { Link, Outlet, useLocation, useParams, useNavigate, useLoaderData } from 'react-router-dom';
import Animales from './secciones/Animales';
import Comentarios from './secciones/Comentarios';
import VeterinariasAsociadas from './secciones/VeterinariasAsociadas';
import MasInformacion from './secciones/MasInformacion';

import shelterDb from '../helpers/sheltersDb.json';

const RefugioDetalle = (props) => {
	const location = useLocation();
    const {pathname} = location;
    const params = useParams();
    const navigate = useNavigate();
    const cargado = useRef(false);
	const refugio = useLoaderData();

    useEffect(() => {
		if(!cargado.current) {
			cargado.current = true;
			let regExp = new RegExp("/", "gi"); // g: buscar todas las ocurrencias, i: no sensible a mayúsculas
			
			if(location.pathname.match(regExp).length === 2)
				navigate(`/refugios/${params.id}/animales`, {
					replace: true
				});
		}
	}, []);

    return (
        <div className="shelter-details-wrapper">
            <div className="row">
                <div className="col-12 col-md-9">
                    <h1 className="display-3">{refugio.infoBasica.nombre}</h1>
                    <p className="text-muted"><i className="bi bi-geo-alt-fill"></i> Ubicado en {refugio.infoBasica.direccion}, {refugio.infoBasica.barrio}</p>
                </div>
                <div className="col-12 col-md-3 text-md-end">
                    <h1 className="display-3">{refugio.infoBasica.puntaje} <i className="bi bi-star-fill"></i></h1>
                    <p className="text-muted">{refugio.infoBasica.cantidadDeComentarios} {refugio.infoBasica.cantidadDeComentarios === 1 ? "valoración" : "valoraciones"}</p>
                </div>
            </div>

			<div id="refugio_wrapper">
				<ul className="nav nav-underline nav-fill p-4">
					<li className="nav-item">
						<Link to={`/refugios/${params.id}/animales`} className={`nav-link ${location.pathname === `/refugios/${params.id}/animales` ? "active" : "" }`}><img src="/img/refugio/animales.png" width={32} alt="animales_icon" /> Animales</Link>
					</li>
					<li className="nav-item">
						<Link to={`/refugios/${params.id}/comentarios`} className={`nav-link ${location.pathname === `/refugios/${params.id}/comentarios` ? "active" : "" }`}><img src="/img/refugio/comentarios.png" width={32} alt="comentarios_icon" /> Comentarios</Link>
					</li>
					<li className="nav-item">
						<Link to={`/refugios/${params.id}/veterinarias-asociadas`} className={`nav-link ${location.pathname === `/refugios/${params.id}/veterinarias-asociadas` ? "active" : "" }`}><img src="/img/refugio/veterinarias.png" width={32} alt="veterinaria_icon" /> Veterinarias asociadas</Link>
					</li>
					<li className="nav-item">
						<Link to={`/refugios/${params.id}/mas-informacion`} className={`nav-link ${location.pathname === `/refugios/${params.id}/mas-informacion` ? "active" : "" }`}><img src="/img/refugio/mas_informacion.png" width={32} alt="mas_informacion_icon" /> Más información</Link>
					</li>
				</ul>
				<Outlet context={{refugio}} />
			</div>
        </div>
    );
}

export default RefugioDetalle;