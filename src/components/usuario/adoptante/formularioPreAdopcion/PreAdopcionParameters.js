import * as Yup from 'yup';

import { PreAdopcionValidations } from "./PreAdopcionValidations";
import { PreAdopcionConstants } from './PreAdopcionConstants';

const initialValues = {
    motivo: '',
    tuvoMascota: '',
    tieneMascotas: '',
    descripcionMascotas: '',
    viveSolo: '',
    tieneVeterinariaCerca: '',
    viveEnCasa: '',
    cantidadDeAmbientes: '',
    hogarTiene: [],
    conoceLeyDeMaltratoAnimal: '',
    frecuenciaAnimalSolo: '',
    tieneConocidosEnCasoDeEmergencia: '',
    tieneSalarioAcordeAGastos: '',
    tieneConocidosQueLoAconsejen: ''
}

const validationSchema = Yup.object().shape({
    motivo: Yup.string()
                .required(PreAdopcionValidations.FIELD_REQUIRED)
                .max(200, PreAdopcionValidations.FIELD_MAX_LENGTH_200),
    tuvoMascota: Yup.boolean()
                .required(PreAdopcionValidations.RADIO_BUTTON_REQUIRED),
    tieneMascotas: Yup.boolean()
                .required(PreAdopcionValidations.RADIO_BUTTON_REQUIRED),
    descripcionMascotas: Yup.string()
                .when("tieneMascotas", {
                    is: (value) => value == true,
                    then: (schema) => schema
                        .max(200, PreAdopcionValidations.FIELD_MAX_LENGTH_200)
                }),
    viveSolo: Yup.boolean()
                .required(PreAdopcionValidations.RADIO_BUTTON_REQUIRED),
    tieneVeterinariaCerca: Yup.boolean()
                .required(PreAdopcionValidations.RADIO_BUTTON_REQUIRED),
    viveEnCasa: Yup.boolean()
                .required(PreAdopcionValidations.RADIO_BUTTON_REQUIRED),
    cantidadDeAmbientes: Yup.number()
                .required(PreAdopcionValidations.RADIO_BUTTON_REQUIRED),
    conoceLeyDeMaltratoAnimal: Yup.boolean()
                .required(PreAdopcionValidations.RADIO_BUTTON_REQUIRED),
    frecuenciaAnimalSolo: Yup.string()
                .required(PreAdopcionValidations.RADIO_BUTTON_REQUIRED)
                .oneOf([
                    PreAdopcionConstants.frecuenciaAnimalSolo.pocoFrecuente,
                    PreAdopcionConstants.frecuenciaAnimalSolo.algoFrecuente,
                    PreAdopcionConstants.frecuenciaAnimalSolo.muyFrecuente
                ], PreAdopcionValidations.FIELD_NOT_VALID),
    tieneConocidosEnCasoDeEmergencia: Yup.boolean()
                .required(PreAdopcionValidations.RADIO_BUTTON_REQUIRED),
    tieneSalarioAcordeAGastos: Yup.boolean()
                .required(PreAdopcionValidations.RADIO_BUTTON_REQUIRED),
    tieneConocidosQueLoAconsejen: Yup.boolean()
                .required(PreAdopcionValidations.RADIO_BUTTON_REQUIRED)
});

export const PreAdopcionParameters = {
    initialValues,
    validationSchema
}