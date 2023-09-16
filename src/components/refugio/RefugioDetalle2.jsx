import React, { useEffect, useRef } from 'react';
import { Outlet, useLocation, useParams, useNavigate } from 'react-router-dom';
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
			document.title = window.$title.concat(' - ', props.title);

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
        <div className="shelter-details-wrapper">
            <div className="row">
                <div className="col-9">
                    <h1 className="display-3">{shelterInfo.name}</h1>
                    <p className="text-muted"><i className="bi bi-geo-alt-fill"></i> Ubicado en {shelterInfo.address}, {shelterInfo.district}</p>
                </div>
                <div className="col-3 text-end">
                    <h1 className="display-3">{shelterInfo.stars} <i className="bi bi-star-fill"></i></h1>
                    <p className="text-muted">500 valoraciones</p>
                </div>
            </div>

            <div className="row">
                <div className="col">
					<ul className="nav nav-pills justify-content-center" id="pills-tab" role="tablist">
						<li className="nav-item" role="presentation">
							<button className="nav-link active" id="pills-animales-tab" data-url={`/refugios/${params.id}/animales`} data-bs-toggle="pill" data-bs-target="#pills-animales" type="button" role="tab" aria-controls="pills-animales" aria-selected="true">Animales</button>
						</li>
						<li className="nav-item" role="presentation">
							<button className="nav-link" id="pills-comentarios-tab" data-url={`/refugios/${params.id}/comentarios`} data-bs-toggle="pill" data-bs-target="#pills-comentarios" type="button" role="tab" aria-controls="pills-comentarios" aria-selected="false">Comentarios</button>
						</li>
						<li className="nav-item" role="presentation">
							<button className="nav-link" id="pills-veterinarias-tab" data-url={`/refugios/${params.id}/veterinarias-asociadas`} data-bs-toggle="pill" data-bs-target="#pills-veterinarias" type="button" role="tab" aria-controls="pills-veterinarias" aria-selected="false">Veterinarias asociadas</button>
						</li>
						<li className="nav-item" role="presentation">
							<button className="nav-link" id="pills-masinformacion-tab" data-url={`/refugios/${params.id}/mas-informacion`} data-bs-toggle="pill" data-bs-target="#pills-masinformacion" type="button" role="tab" aria-controls="pills-masinformacion" aria-selected="false">Más información</button>
						</li>
					</ul>
					<div className="tab-content" id="pills-tabContent">
						<div className={`tab-pane fade ${props.tabActiva === props.tabs.animales ? "show active" : ""}`} id="pills-animales" role="tabpanel" aria-labelledby="pills-animales-tab" tabIndex="0">
							<div className='row thumbnails-wrapper'>
								<Animales pathname={pathname} />
							</div>
						</div>
						<div className={`tab-pane fade ${props.tabActiva === props.tabs.comentarios ? "show active" : ""}`} id="pills-comentarios" role="tabpanel" aria-labelledby="pills-comentarios-tab" tabIndex="0">
                            <div className="row">
                                <Comentarios />
                            </div>
                        </div>
						<div className={`tab-pane fade ${props.tabActiva === props.tabs.veterinariasAsociadas ? "show active" : ""}`} id="pills-veterinarias" role="tabpanel" aria-labelledby="pills-veterinarias-tab" tabIndex="0">
                            <VeterinariasAsociadas />
                        </div>
						<div className={`tab-pane fade ${props.tabActiva === props.tabs.masInformacion ? "show active" : ""}`} id="pills-masinformacion" role="tabpanel" aria-labelledby="pills-masinformacion-tab" tabIndex="0">
                            <MasInformacion shelterInfo={shelterInfo} />
                        </div>
					</div>
				</div>
            </div>
            <Outlet/>
        </div>
    );
}

export default RefugioDetalle2;