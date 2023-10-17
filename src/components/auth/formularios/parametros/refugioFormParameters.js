import * as Yup from 'yup';

import { validationMessages } from './validationMessages';

const refugioFormValues = {
    nombreDeUsuario: '',
    email: '',
    password: '',
    repetirPassword: '',
    nombre: '',
    razonSocial: '',
    nombreResponsable: '',
    apellidoResponsable: '',
    telefono: '',
    calle: '',
    altura: '',
    id_Barrio: 0,
    diasDeAtencion: [],
    horaApertura: '',
    horaCierre: '',
    terminosAceptados: false
};

const refugioFormSchema = Yup.object().shape({
    nombreDeUsuario: Yup.string()
                        .required(validationMessages.FIELD_REQUIRED)
                        .min(6, validationMessages.MIN_6_LENGTH)
                        .max(50, validationMessages.MAX_50_LENGTH),
    email: Yup.string()
            .required(validationMessages.FIELD_REQUIRED)
            .max(50, validationMessages.MAX_50_LENGTH)
            .email(validationMessages.EMAIL_NOT_VALID),
    password: Yup.string()
                .required(validationMessages.FIELD_REQUIRED)
                .min(6, validationMessages.MIN_6_LENGTH)
                .max(50, validationMessages.MAX_50_LENGTH),
    repetirPassword: Yup.string()
                        .required(validationMessages.FIELD_REQUIRED)
                        .oneOf([Yup.ref('password'), null], validationMessages.PASSWORDS_MISMATCH),
    nombre: Yup.string()
            .required(validationMessages.FIELD_REQUIRED)
            .max(50, validationMessages.MAX_50_LENGTH),
    razonSocial: Yup.string()
            .required(validationMessages.FIELD_REQUIRED)
            .max(50, validationMessages.MAX_50_LENGTH),
    nombreResponsable: Yup.string()
            .required(validationMessages.FIELD_REQUIRED)
            .max(50, validationMessages.MAX_50_LENGTH),
    apellidoResponsable: Yup.string()
            .required(validationMessages.FIELD_REQUIRED)
            .max(50, validationMessages.MAX_50_LENGTH),
    telefono: Yup.string()
            .required(validationMessages.FIELD_REQUIRED)
            .max(50, validationMessages.MAX_50_LENGTH),
    calle: Yup.string()
            .required(validationMessages.FIELD_REQUIRED)
            .max(46, validationMessages.MAX_46_LENGTH),
    altura: Yup.number()
            .required(validationMessages.FIELD_REQUIRED)
            .typeError(validationMessages.MUST_BE_A_NUMBER)
            .min(1, validationMessages.ALTURA_RANGE_NUMBER)
            .max(9999, validationMessages.ALTURA_RANGE_NUMBER),
    diasDeAtencion: Yup.array()
                .required(validationMessages.FIELD_REQUIRED)
                .min(1, validationMessages.DIAS_DE_ATENCION_REQUIRED),
    horaApertura: Yup.string()
            .required(validationMessages.FIELD_REQUIRED)
            .max(2, validationMessages.HOUR_NOT_VALID),
    horaCierre: Yup.string()
            .required(validationMessages.FIELD_REQUIRED)
            .max(2, validationMessages.HOUR_NOT_VALID),
    id_Barrio: Yup.number()
                .required(validationMessages.FIELD_REQUIRED)
                .positive(validationMessages.BARRIO_NOT_VALID)
                .integer(validationMessages.BARRIO_NOT_VALID),
    terminosAceptados: Yup.bool()
                        .required(validationMessages.FIELD_REQUIRED)
                        .isTrue(validationMessages.TERMS_NOT_ACCEPTED)
});

export const refugioFormParameters = {
    initialValues: refugioFormValues,
    validations: refugioFormSchema
}