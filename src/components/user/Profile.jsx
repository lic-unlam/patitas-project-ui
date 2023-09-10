import PreAdoptionForm from "./PreAdoptionForm";
import MisAdopciones from "./MisAdopciones";
import MisTurnos from "./MisTurnos";

function Profile() {
    return (
        <div className="profile-wrapper">
            <div className="row">
                <div className="col">
					<ul className="nav nav-pills justify-content-center" id="pills-tab" role="tablist">
						<li className="nav-item" role="presentation">
							<button className="nav-link" id="pills-personal-tab" data-bs-toggle="pill" data-bs-target="#pills-personal" type="button" role="tab" aria-controls="pills-personal" aria-selected="true"><i className="bi bi-person-fill"></i> Datos personales</button>
						</li>
						<li className="nav-item" role="presentation">
							<button className="nav-link active" id="pills-adoption-tab" data-bs-toggle="pill" data-bs-target="#pills-adoption" type="button" role="tab" aria-controls="pills-adoption" aria-selected="false"><i className="bi bi-file-text-fill"></i> Formulario de pre-adopción</button>
						</li>
						<li className="nav-item" role="presentation">
							<button className="nav-link" id="pills-settings-tab" data-bs-toggle="pill" data-bs-target="#pills-settings" type="button" role="tab" aria-controls="pills-settings" aria-selected="false"><i className="bi bi-house-heart-fill"></i> Mis adopciones</button>
						</li>
						<li className="nav-item" role="presentation">
							<button className="nav-link" id="pills-settings-tab" data-bs-toggle="pill" data-bs-target="#pills-mis-turnos" type="button" role="tab" aria-controls="pills-settings" aria-selected="false"><i className="bi bi-gear-fill"></i> Mis turnos</button>
						</li>
						<li className="nav-item" role="presentation">
							<button className="nav-link" id="pills-settings-tab" data-bs-toggle="pill" data-bs-target="#pills-settings" type="button" role="tab" aria-controls="pills-settings" aria-selected="false"><i className="bi bi-gear-fill"></i> Seguimientos</button>
						</li>
					</ul>
					<div className="tab-content" id="pills-tabContent">
						<div className="tab-pane fade" id="pills-personal" role="tabpanel" aria-labelledby="pills-personal-tab" tabIndex="0">
							<div className='row thumbnails-wrapper'>
								<p>Datos personales</p>
							</div>
						</div>
						<div className="tab-pane fade show active" id="pills-adoption" role="tabpanel" aria-labelledby="pills-adoption-tab" tabIndex="0">
                            <div className="row">
                                <PreAdoptionForm/>
                            </div>
                        </div>
						<div className="tab-pane fade" id="pills-settings" role="tabpanel" aria-labelledby="pills-settings-tab" tabIndex="0">
                            <MisAdopciones/>
                        </div>
						<div className="tab-pane fade" id="pills-mis-turnos" role="tabpanel" aria-labelledby="pills-settings-tab" tabIndex="0">
                            <MisTurnos/>
                        </div>
					</div>
				</div>
            </div>
        </div>
    );
}

export default Profile;