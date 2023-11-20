import { useState, useEffect, useContext, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

import { UserContext } from "src/components/layout/LayoutPublic";
import { validationMessages } from "src/components/auth/formularios/parametros/validationMessages";
import { AuthFormErrorMessage } from "src/components/auth/formularios/AuthFormErrorMessage";

export const MarcarSolicitudParaSeguimiento = (props) => {
    const navigate = useNavigate();
    const { solicitudId, refugioId, setShowMarcarParaSeguimientoForm } = props;
    const { user } = useContext(UserContext);
    const [ comboVeterinarias, setComboVeterinarias ] = useState([]);

    const habilitarSeguimiento = async (values, actions) => {
        try {
            const response = await fetch(`https://localhost:7277/api/solicitudes/${solicitudId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${user.accessToken}`
                },
                body: JSON.stringify(values.nombreVeterinaria)
            });

            if(!response.ok) {
                if(response.status === 403)
                    navigate("/error/forbidden");

                if(response.status === 401)
                    navigate("/error/unauthorized");
                
                throw new Error("Hubo un problema con la solicitud. Código de error " + response.status);
            }

            navigate(`/refugio/solicitudes/${solicitudId}`);
        }
        catch(error) {
            console.log(error);
        }
        finally {
            actions.setSubmitting(false);
        }
    }
    
    const loadVeterinariasParaSeguimiento = useCallback(async () => {
        try {
            const response = await fetch(`https://localhost:7277/api/refugios/${refugioId}/eleccion-veterinarias`, {
                method: "GET"
            });

            if(!response.ok) {
                throw new Error("Hubo un problema con la solicitud. Código de error " + response.status);
            }

            const data = await response.json();
            setComboVeterinarias(data); // array de nombres de veterinarias asociadas
        }
        catch(error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        loadVeterinariasParaSeguimiento();
    }, [loadVeterinariasParaSeguimiento]);


    return (
            <Formik
                initialValues={{ nombreVeterinaria: '' }}
                validationSchema={
                    Yup.object().shape({
                        nombreVeterinaria: Yup.string()
                        .required(validationMessages.FIELD_REQUIRED)
                    })
                }
                onSubmit={habilitarSeguimiento}
            >
                {({ isSubmitting }) => (
                <Form id="marcar_para_seguimiento_form" className="card bg-light mt-4 p-4">
                    <label className="pb-2" htmlFor="nombre_veterinaria">Selecciona una de las veterinarias asociadas para realizar el seguimiento de vacunaciones del animal:</label>
                    <div className="row justify-content-center pb-4">
                        <div className="col-6">
                            <Field as="select" id="nombre_veterinaria" name="nombreVeterinaria" className="form-select">
                                <option defaultValue>Elegir veterinaria...</option>
                                {
                                comboVeterinarias.map((opcionVeterinaria, index) =>
                                    <option value={opcionVeterinaria} key={index}>{opcionVeterinaria}</option>
                                )}
                            </Field>
                            <ErrorMessage name="nombreVeterinaria">{ message => <AuthFormErrorMessage field={message} /> }</ErrorMessage>
                        </div>
                    </div>
                    <div className="d-flex gap-2 justify-content-center">
                        <button type="submit" className="btn btn-warning" disabled={isSubmitting}>Enviar solicitud a seguimiento</button>
                        <button type="button" className="btn btn-danger" disabled={isSubmitting} onClick={() => setShowMarcarParaSeguimientoForm(false)}>Cancelar</button>
                    </div>
                </Form>
                )}
            </Formik>
    );
}