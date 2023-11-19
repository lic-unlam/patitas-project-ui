import { useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

import { validationMessages } from "src/components/auth/formularios/parametros/validationMessages";
import { AuthFormErrorMessage } from "src/components/auth/formularios/AuthFormErrorMessage";

export const RegistrarAsistencia = (props) => {
    const { turnoId } = useParams();

    const marcarAsistencia = async (values, actions) => {
        try {
            const response = await fetch("https://localhost:7277/api/refugios/turnos", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${props.userData.accessToken}`
                },
                body: JSON.stringify({
                    turnoId: turnoId,
                    informeDeVisita: values.informeDeVisita
                })
            });

            if(!response.ok) {
                if(response.status === 403)
                    navigate("/error/forbidden");

                if(response.status === 401)
                    navigate("/error/unauthorized");
                
                throw new Error("Hubo un problema con la solicitud. Código de error " + response.status);
            }

            window.location.reload();
        }
        catch(error) {
            console.log(error);
        }
        finally {
            actions.setSubmitting(false);
        }
    }

    return (
        <Formik
            initialValues={{ informeDeVisita: '' }}
            validationSchema={
                Yup.object().shape({
                    informeDeVisita: Yup.string()
                    .required(validationMessages.FIELD_REQUIRED)
                    .max(200, validationMessages.MAX_200_LENGTH)
                })
            }
            onSubmit={marcarAsistencia}
        >
            {({ isSubmitting }) => (
            <Form id="informe_visita_form" className="card bg-light mt-4 p-4">
                <label className="pb-2" htmlFor="informe_de_visita">Escribe un breve informe de la visita:</label>
                <div className="row justify-content-center">
                    <div className="col-9 mb-3">
                        <Field as="textarea" id="informe_de_visita" name="informeDeVisita" className="form-control" placeholder="Máximo 200 caracteres..." rows={4} autoFocus />
                        <ErrorMessage name="informeDeVisita">{ message => <AuthFormErrorMessage field={message} /> }</ErrorMessage>
                    </div>
                </div>
                <div className="d-flex gap-2 justify-content-center">
                    <button type="submit" className="btn btn-success" disabled={isSubmitting}>Registrar asistencia</button>
                    <button type="button" className="btn btn-danger" disabled={isSubmitting} onClick={() => props.setShowRegistrarAsistenciaForm(false)}>Cancelar</button>
                </div>
            </Form>
            )}
        </Formik>
    );
}