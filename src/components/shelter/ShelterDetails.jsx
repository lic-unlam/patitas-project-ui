import {Outlet,useLocation,useParams} from 'react-router-dom';
import Gallery from './sections/Gallery';
import Comments from './sections/Comments';
import AssociatedVeterinarians from './sections/AssociatedVeterinarians';
import MoreInformation from './sections/MoreInformation';

import shelterDb from '../helpers/sheltersDb.json';

function ShelterDetails(props) {
	const location = useLocation();
    const {pathname} = location;
    const params = useParams();

    let shelterInfo = shelterDb.find(x => x.id === params.id);

    return (
        <div className="shelter-details-wrapper">
            <div className="row">
                <div className="col-6">
                    <h1 className="display-3">{shelterInfo.name}</h1>
                    <p className="text-muted"><i className="bi bi-geo-alt-fill"></i> Ubicado en {shelterInfo.address}, {shelterInfo.district}</p>
                </div>
                <div className="col-6 text-end">
                    <h1 className="display-3">{shelterInfo.stars} <i className="bi bi-star-fill"></i></h1>
                    <p className="text-muted">500 valoraciones</p>
                </div>
            </div>

            <div className="row">
                <div className="col">
					<ul className="nav nav-pills justify-content-center" id="pills-tab" role="tablist">
						<li className="nav-item" role="presentation">
							<button className="nav-link active" id="pills-animal-tab" data-bs-toggle="pill" data-bs-target="#pills-animal" type="button" role="tab" aria-controls="pills-animal" aria-selected="true">Animales</button>
						</li>
						<li className="nav-item" role="presentation">
							<button className="nav-link" id="pills-comment-tab" data-bs-toggle="pill" data-bs-target="#pills-comment" type="button" role="tab" aria-controls="pills-comment" aria-selected="false">Comentarios</button>
						</li>
						<li className="nav-item" role="presentation">
							<button className="nav-link" id="pills-veterinary-tab" data-bs-toggle="pill" data-bs-target="#pills-veterinary" type="button" role="tab" aria-controls="pills-veterinary" aria-selected="false">Veterinarias asociadas</button>
						</li>
						<li className="nav-item" role="presentation">
							<button className="nav-link" id="pills-moreinfo-tab" data-bs-toggle="pill" data-bs-target="#pills-moreinfo" type="button" role="tab" aria-controls="pills-moreinfo" aria-selected="false">Más información</button>
						</li>
					</ul>
					<div className="tab-content" id="pills-tabContent">
						<div className="tab-pane fade show active" id="pills-animal" role="tabpanel" aria-labelledby="pills-animal-tab" tabIndex="0">
							<div className='row thumbnails-wrapper'>
								<Gallery pathname={pathname}/>
							</div>
						</div>
						<div className="tab-pane fade" id="pills-comment" role="tabpanel" aria-labelledby="pills-comment-tab" tabIndex="0">
                            <div className="row">
                                <Comments/>
                            </div>
                        </div>
						<div className="tab-pane fade" id="pills-veterinary" role="tabpanel" aria-labelledby="pills-veterinary-tab" tabIndex="0">
                            <AssociatedVeterinarians/>
                        </div>
						<div className="tab-pane fade" id="pills-moreinfo" role="tabpanel" aria-labelledby="pills-moreinfo-tab" tabIndex="0">
                            <MoreInformation shelterInfo={shelterInfo}/>
                        </div>
					</div>
				</div>
            </div>
            <Outlet/>
        </div>
    );
}

export default ShelterDetails;