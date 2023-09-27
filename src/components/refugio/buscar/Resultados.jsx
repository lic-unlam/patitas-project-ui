import { Link } from 'react-router-dom';
import shelterDb from '../../helpers/sheltersDb.json';

export const Resultados = () => {
    return (
        <div id="resultados_de_refugios_wrapper" className="py-4">
            <h5 className="text-center pb-4">La búsqueda ha arrojado 10 resultados.</h5>
            <div className="row">
            {
                shelterDb.map((shelter, index) =>
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
                )
            }
            </div>
        </div>
    );
}