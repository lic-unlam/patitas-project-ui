import * as Yup from 'yup';

const adoptanteFormValues = {
    nombreDeUsuario: '',
    email: '',
    password: '',
    repetirPassword: '',
    fechaDeNacimiento: '',
    id_Barrio: 0,
    terminosAceptados: false
};

const adoptanteFormSchema = Yup.object().shape({
    nombreDeUsuario: Yup.string()
                        .required("Este campo es obligatorio.")
                        .min(6, "Mínimo 6 caracteres.")
                        .max(50, "Máximo 50 caracteres."),
    email: Yup.string()
            .required("Este campo es obligatorio.")
            .max(50, "Máximo 50 caracteres.")
            .email("El email no es válido."),
    password: Yup.string()
                .required("Este campo es obligatorio.")
                .min(6, "Mínimo 6 caracteres.")
                .max(50, "Máximo 50 caracteres."),
    repetirPassword: Yup.string()
                        .required("Este campo es obligatorio.")
                        .oneOf([Yup.ref('password'), null], "Las contraseñas no coinciden."),
    fechaDeNacimiento: Yup.date()
                        .required("Este campo es obligatorio."),
    id_Barrio: Yup.number()
                .required("Este campo es obligatorio.")
                .positive("Barrio no válido.")
                .integer("Barrio no válido."),
    terminosAceptados: Yup.bool()
                        .required("Este campo es obligatorio.")
                        .isTrue("Debe aceptar los términos y condiciones para continuar.")
});

export const adoptanteFormParameters = {
    initialValues: adoptanteFormValues,
    validations: adoptanteFormSchema
}