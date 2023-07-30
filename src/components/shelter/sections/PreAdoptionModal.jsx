import PreAdoptionForm from "../../user/PreAdoptionForm";

function PreAdoptionModal() {
    return (
        <div className="modal fade" id="preAdoptionModal" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="exampleModalLabel1" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="row">
                            <PreAdoptionForm/>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div className="row">
                            <div className="col-6">
                                <button className="btn btn-secondary" type="button" data-bs-dismiss="modal"><i className="bi bi-arrow-left"></i> Volver atrás</button>
                            </div>
                            <div className="col-6">
                                <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#startAdoptionModal"><i className="bi bi-check-lg"></i> Guardar y finalizar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PreAdoptionModal;