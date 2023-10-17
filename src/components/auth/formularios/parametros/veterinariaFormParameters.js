import * as Yup from 'yup';

import { validationMessages } from './validationMessages';

const veterinariaFormValues = {
    nombreDeUsuario: '',
    email: '',
    password: '',
    repetirPassword: '',
    nombre: '',
    razonSocial: '',
    especialidades: '',
    fechaFundacion: '',
    telefono: '',
    telefonoAlternativo: '',
    calle: '',
    altura: '',
    id_Barrio: 0,
    diasDeAtencion: [],
    horaApertura: '',
    horaCierre: '',
    terminosAceptados: false
};

const veterinariaFormSchema = Yup.object().shape({
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
    especialidades: Yup.string()
            .required(validationMessages.FIELD_REQUIRED)
            .max(200, validationMessages.MAX_200_LENGTH),
    fechaFundacion: Yup.date()
            .required(validationMessages.FIELD_REQUIRED),
    telefono: Yup.string()
            .required(validationMessages.FIELD_REQUIRED)
            .max(50, validationMessages.MAX_50_LENGTH),
    telefonoAlternativo: Yup.string()
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

export const veterinariaFormParameters = {
    initialValues: veterinariaFormValues,
    validations: veterinariaFormSchema
}