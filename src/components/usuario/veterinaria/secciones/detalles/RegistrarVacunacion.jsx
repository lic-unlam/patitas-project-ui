import { useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

import { validationMessages } from "src/components/auth/formularios/parametros/validationMessages";
import { AuthFormErrorMessage } from "src/components/auth/formularios/AuthFormErrorMessage";

export const RegistrarVacunacion = (props) => {
    const { seguimientoId } = useParams();

    const marcarAsistencia = async (values, actions) => {
        try {
            const response = await fetch("https://localhost:7277/api/veterinaria/seguimientos", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${props.userData.accessToken}`
                },
                body: JSON.stringify({
                    seguimientoId: seguimientoId
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
        <div>Falta completar</div>
    );
}