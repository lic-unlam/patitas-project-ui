import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

import shelterDb from '../helpers/sheltersDb.json';

const ExplorarRefugios = (props) => {
    useEffect(() => {
        document.title = window.$title.concat(' - ', props.title);
    }, []);

    const sheltersLoop = (district, isMyDistrict) => {
        let sheltersToShow = [], shelters = [];

        if(isMyDistrict)
            sheltersToShow = shelterDb.filter(shelter => shelter.district === district);
        else
            sheltersToShow = shelterDb.filter(shelter => shelter.district !== district);

        sheltersToShow.forEach((shelter, index) => {
            shelters.push(
                <div className="col-12 col-md-6" key={index}>
                    <Link to={`/refugios/${shelter.id}`}>
                    <div className="card shelter-card mb-3">
                        <div className="row g-0">
                            <div className="col-2">
                                <img className="img-fluid rounded-start" width={100} src="/img/shelter/shelter.png" alt="refugio"/>
                            </div>
                            <div className="col-10">
                                <div className="card-body">
                                    <span className="list-group-item list-group-item-action" aria-current="true">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1 title">{shelter.name}</h5>
                                            <span className="stars">{shelter.stars} <i className="bi bi-star-fill"></i></span>
                                        </div>
                                        <p className="mb-1 text-muted location">{shelter.address}, {shelter.district}</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
            );
        });

        return shelters;
    }

    return (
        <div className="shelters-wrapper">
            <h1><i className="bi bi-geo-alt-fill"></i> Refugios encontrados en tu zona: Palermo</h1>
            <div className="row pb-4">{sheltersLoop('Palermo', true)}</div>
            <h2>Nuestros refugios asociados</h2>
            <div className="form-group row pb-4">
                <label className="col-auto my-auto">Filtrar por barrio porteño:</label>
                <div className="col-12 col-md-2">
                    <select id="barrio_selector" className="form-select form-select-sm" aria-label="Seleccionar barrio porteño">
                        <option value="0" defaultValue>Todos</option>
                        <option value="1">Recoleta</option>
                        <option value="2">Congreso</option>
                        <option value="3">Puerto Madero</option>
                        <option value="4">Caballito</option>
                    </select>
                </div>
            </div>
            <div className="row">{sheltersLoop('Palermo', false)}</div>
        </div>
    );
}

export default ExplorarRefugios;