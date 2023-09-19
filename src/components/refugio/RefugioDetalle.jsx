import React, { useEffect, useRef } from 'react';
import { Link, Outlet, useLocation, useParams, useNavigate } from 'react-router-dom';
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

    let shelterInfo = shelterDb.find(x => x.id === params.id);

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
                    <h1 className="display-3">{shelterInfo.name}</h1>
                    <p className="text-muted"><i className="bi bi-geo-alt-fill"></i> Ubicado en {shelterInfo.address}, {shelterInfo.district}</p>
                </div>
                <div className="col-12 col-md-3 text-md-end">
                    <h1 className="display-3">{shelterInfo.stars} <i className="bi bi-star-fill"></i></h1>
                    <p className="text-muted">500 valoraciones</p>
                </div>
            </div>

			<div id="refugio_wrapper">
				<ul className="nav nav-underline nav-fill p-4">
					<li className="nav-item">
						<Link to="/refugios/1/animales" className={`nav-link ${location.pathname === "/refugios/1/animales" ? "active" : "" }`}><img src="/img/refugio/animales.png" width={32} alt="animales_icon" /> Animales</Link>
					</li>
					<li className="nav-item">
						<Link to="/refugios/1/comentarios" className={`nav-link ${location.pathname === "/refugios/1/comentarios" ? "active" : "" }`}><img src="/img/refugio/comentarios.png" width={32} alt="comentarios_icon" /> Comentarios</Link>
					</li>
					<li className="nav-item">
						<Link to="/refugios/1/veterinarias-asociadas" className={`nav-link ${location.pathname === "/refugios/1/veterinarias-asociadas" ? "active" : "" }`}><img src="/img/refugio/veterinarias.png" width={32} alt="veterinaria_icon" /> Veterinarias asociadas</Link>
					</li>
					<li className="nav-item">
						<Link to="/refugios/1/mas-informacion" className={`nav-link ${location.pathname === "/refugios/1/mas-informacion" ? "active" : "" }`}><img src="/img/refugio/mas_informacion.png" width={32} alt="mas_informacion_icon" /> Más información</Link>
					</li>
				</ul>
				<Outlet />
			</div>
        </div>
    );
}

export default RefugioDetalle;