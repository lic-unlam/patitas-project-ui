import { Formik, Form } from "formik";
import * as Yup from 'yup';

import FormularioPreAdopcion from "../../usuario/secciones/FormularioPreAdopcion";

const initialValues = {
    motivo: '',
    tuvoMascota: '',
    tieneMascotas: '',
    descripcionMascotas: '',
    viveSolo: '',
    tieneVeterinariaCerca: '',
    viveEnCasa: '',
    cantidadDeAmbientes: '',
    tienePatio: null,
    tieneBalcon: null,
    tieneRedEnVentanas: null,
    conoceLeyDeMaltratoAnimal: null,
    frecuenciaAnimalSolo: "",
    tieneConocidosEnCasoDeEmergencia: null,
    tieneSalarioAcordeAGastos: null,
    tieneConocidosQueLoAconsejen: null
}

const validationSchema = Yup.object().shape({
    motivo: Yup.string()
                .required("Este campo es obligatorio."),
    tuvoMascota: Yup.boolean()
                .required("Debe seleccionar una opción."),
    tieneMascotas: Yup.boolean()
                .required("Debe seleccionar una opción."),
    viveSolo: Yup.boolean()
                .required("Debe seleccionar una opción."),
    tieneVeterinariaCerca: Yup.boolean()
                .required("Debe seleccionar una opción."),
    viveEnCasa: Yup.boolean()
                .required("Debe seleccionar una opción."),
    cantidadDeAmbientes: Yup.number()
                .required("Debe seleccionar una opción.")
});

const PreAdopcionModal = () => {
    return (
        <div className="modal fade" id="preAdoptionModal" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="exampleModalLabel1" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
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