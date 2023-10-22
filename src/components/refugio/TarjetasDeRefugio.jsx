import { Link } from "react-router-dom";

import Loading from "../layout/Loading";

export const TarjetasDeRefugio = (props) => {
    const { refugios } = props;

    if(refugios === undefined)
        return (
            <Loading />
        );

    if(refugios.length < 1)
        return (
                <div className="text-center text-muted">
                    <h5>No hay refugios disponibles.</h5>
                </div>
        );

    return (
        <div className="row tarjetas-de-refugio-wrapper">
            {refugios.map((refugio, index) => (
                <div className="col-12 col-md-6" key={index}>
                    <Link to={`/refugios/${refugio.id}`}>
                    <div className="card shelter-card mb-3">
                        <div className="row g-0">
                            <div className="col-2">
                                <img className="img-fluid rounded-start" width={100} src="/img/shelter/shelter.png" alt="refugio"/>
                            </div>
                            <div className="col-10">
                                <div className="card-body">
                                    <span className="list-group-item list-group-item-action" aria-current="true">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1 title">{refugio.nombre}</h5>
                                            <span className="stars">{refugio.puntaje} <i className="bi bi-star-fill"></i></span>
                                        </div>
                                        <p className="mb-1 text-muted location">{refugio.direccion}, {refugio.barrio}</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}