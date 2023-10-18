import { Formik, Form } from "formik";
import * as Yup from 'yup';

import FormularioPreAdopcion from "../../usuario/secciones/FormularioPreAdopcion";
import { PreAdopcionParameters } from "src/components/usuario/adoptante/formularioPreAdopcion/PreAdopcionParameters";

const PreAdopcionModal = () => {
    return (
        <div className="modal fade" id="preAdoptionModal" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="exampleModalLabel1" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <Formik
                    initialValues={PreAdopcionParameters.initialValues}
                    validationSchema={PreAdopcionParameters.validationSchema}
                    onSubmit={(values) => console.log(values)}
                >
                <Form id="solicitud_adopcion_form">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="row">
                            <FormularioPreAdopcion mostrarGuardado={false} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div className="row">
                            <div className="col-6">
                                <button className="btn btn-dark" type="button" data-bs-dismiss="modal"><i className="bi bi-arrow-left"></i> Volver atrás</button>
                            </div>
                            <div className="col-6">
                                <button className="btn btn-primary" type="submit" data-bs-target="#startAdoptionModal"><i className="bi bi-check-lg"></i> Guardar y finalizar</button>
                            </div>
                        </div>
                    </div>
                </div>
                </Form>
                </Formik>
            </div>
        </div>
    );
}

export default PreAdopcionModal;