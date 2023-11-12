import React, { useEffect } from 'react';
import { Link, Outlet, useLocation, useParams, useNavigate, useLoaderData } from 'react-router-dom';

import { secciones } from 'src/utils/constants/refugio';
import NotFound from '../errors/NotFound';

import Animales from './secciones/Animales';
import Comentarios from './secciones/Comentarios';
import VeterinariasAsociadas from './secciones/VeterinariasAsociadas';
import MasInformacion from './secciones/MasInformacion';

import shelterDb from '../helpers/sheltersDb.json';

const RefugioDetalle = (props) => {
	//const location = useLocation();
    //const {pathname} = location;
    const params = useParams();
    const navigate = useNavigate();
	const refugio = useLoaderData();

	const cargarSeccion = (seccion) => {
		switch(seccion) {
			/*case secciones.animales:
				return <Animales animales={refugio.animales} title="Animales en el refugio" />*/
			case secciones.comentarios:
				return <Comentarios comentarios={refugio.comentarios} sesionExpirada={refugio.sesionExpirada} title="Comentarios del refugio" />
			case secciones.veterinariasAsociadas:
				return <VeterinariasAsociadas veterinarias={refugio.veterinariasAsociadas} title="Veterinarias asociadas del refugio" />
			case secciones.masInformacion:
				return <MasInformacion shelterDb={shelterDb} refugio={refugio} title="Más información del refugio" />
			default:
				return <Animales animales={refugio.animales} title="Animales en el refugio" />
		}
	}

	if(refugio.error) {
		return <NotFound message={refugio.error} />
	}

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
						<Link to={`/refugios/${params.id}/${secciones.animales}`} className={`nav-link ${(!params.seccion || params.seccion === secciones.animales) ? "active" : "" }`}><img src="/img/refugio/animales.png" width={32} alt="animales_icon" /> Animales</Link>
					</li>
					<li className="nav-item">
						<Link to={`/refugios/${params.id}/${secciones.comentarios}`} className={`nav-link ${(params.seccion === secciones.comentarios) ? "active" : "" }`}><img src="/img/refugio/comentarios.png" width={32} alt="comentarios_icon" /> Comentarios</Link>
					</li>
					<li className="nav-item">
						<Link to={`/refugios/${params.id}/${secciones.veterinariasAsociadas}`} className={`nav-link ${(params.seccion === secciones.veterinariasAsociadas) ? "active" : "" }`}><img src="/img/refugio/veterinarias.png" width={32} alt="veterinaria_icon" /> Veterinarias asociadas</Link>
					</li>
					<li className="nav-item">
						<Link to={`/refugios/${params.id}/${secciones.masInformacion}`} className={`nav-link ${(params.seccion === secciones.masInformacion) ? "active" : "" }`}><img src="/img/refugio/mas_informacion.png" width={32} alt="mas_informacion_icon" /> Más información</Link>
					</li>
				</ul>
				{/*<Outlet context={{refugio}} />*/}
				{cargarSeccion(params.seccion)}
			</div>
        </div>
    );
}

export default RefugioDetalle;