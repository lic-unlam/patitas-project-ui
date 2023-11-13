import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Formik, Form } from "formik";

import { UserContext } from "src/components/layout/LayoutPublic";

import FormularioPreAdopcion from "../../usuario/secciones/FormularioPreAdopcion";
import { PreAdopcionParameters } from "src/components/usuario/adoptante/formularioPreAdopcion/PreAdopcionParameters";

const PreAdopcionModal = () => {
    let { user } = useContext(UserContext);
    const { id, animalId } = useParams();

    const crearSolicitudDeAdopcion = async (values, actions) => {
        try {
            if(!user)
                throw new Error("No hay usuario logueado.");

            const response = await fetch("https://localhost:7277/api/solicitudes-adopcion", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${user.accessToken}`
                },
                body: JSON.stringify({
                    formularioPreAdopcionDTO: values,
                    animalId: animalId,
                    refugioId: id
                })
            });

            if(!response.ok)
                throw new Error("Hubo un problema con la solicitud. Código de error " + response.status);
            
            actions.resetForm();
            new bootstrap.Modal(document.querySelector("#startAdoptionModal")).show(); // llamo manualmente al modal
        }
        catch(error) {
            console.log(error.message);
        }
        finally {
            actions.setSubmitting(false);
        }
    }

    return (
        <div className="modal fade" id="preAdoptionModal" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="exampleModalLabel1" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <Formik
                    initialValues={PreAdopcionParameters.initialValues}
                    validationSchema={PreAdopcionParameters.validationSchema}
                    onSubmit={crearSolicitudDeAdopcion}
                >
                {({ isSubmitting }) => (
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
                                    <button className="btn btn-primary" type="submit" data-bs-target="#startAdoptionModal" disabled={isSubmitting}>Enviar solicitud</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
                )}
                </Formik>
            </div>
        </div>
    );
}

export default PreAdopcionModal;