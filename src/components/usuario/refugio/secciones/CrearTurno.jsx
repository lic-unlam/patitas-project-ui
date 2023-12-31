import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

import { validationMessages } from "src/components/auth/formularios/parametros/validationMessages";
import { AuthFormErrorMessage } from "src/components/auth/formularios/AuthFormErrorMessage";
import { CustomAlertContext } from "src/components/layout/LayoutPublic";
import { UserContext } from "src/components/layout/LayoutPublic";

export const CrearTurno = (props) => {
    const { solicitudId } = useParams();
    const { setCustomAlert } = useContext(CustomAlertContext);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const getListaDeHoras = () => {
        let horas = [];

        for(let i = 9; i <= 12; i++) {
            let horaConZeroALaIzquierda = String(i).padStart(2, '0');
            horas.push(horaConZeroALaIzquierda);
        }

        return horas;
    }

    const getListaDeMinutos = () => {
        let minutos = [];

        for(let i = 0; i <= 59; i = i+15) {
            let minutoConZeroALaIzquierda = String(i).padStart(2, '0');
            minutos.push(minutoConZeroALaIzquierda);
        }

        return minutos;
    }

    let listaDeHoras = getListaDeHoras();
    let listaDeMinutos = getListaDeMinutos();

    const turnoInitialValues = {
        fechaTurno: '',
        horaTurno: '',
        minutoTurno: ''
    }

    const turnoSchema = Yup.object().shape({
        fechaTurno: Yup.date().required(validationMessages.FIELD_REQUIRED),
        horaTurno: Yup.number()
                .required(validationMessages.FIELD_REQUIRED)
                .typeError(validationMessages.MUST_BE_A_NUMBER)
                .integer(validationMessages.HOUR_NOT_VALID),
        minutoTurno: Yup.number()
                .required(validationMessages.FIELD_REQUIRED)
                .typeError(validationMessages.MUST_BE_A_NUMBER)
                .integer(validationMessages.HOUR_NOT_VALID)
    });

    const crearTurnoSubmit = async (values, actions) => {
        try {
            if(!user)
                throw new Error("No hay usuario logueado.");

            const response = await fetch("https://localhost:7277/api/turnos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${user.accessToken}`
                },
                body: JSON.stringify({
                    fecha: values.fechaTurno,
                    hora: values.horaTurno,
                    minuto: values.minutoTurno,
                    solicitudDeAdopcionId: solicitudId
                })
            });

            if(!response.ok)
                throw new Error("Hubo un problema con la solicitud. Código de error " + response.status);

            // agregar validación para que no crear un turno en la misma fecha y hora
            
            actions.resetForm();
            setCustomAlert({
                mostrar: true,
                tipo: "success",
                mensaje: `El turno para la solicitud Nº ${solicitudId} ha sido creado exitosamente.`
            });

            navigate(`/refugio/solicitudes/${solicitudId}`, {
                replace: true
            });
            //new bootstrap.Modal(document.querySelector("#startAdoptionModal")).show(); // llamo manualmente al modal
        }
        catch(error) {
            console.log(error.message);
        }
        finally {
            actions.setSubmitting(false);
        }
    }

    const cancelarCreacionDeTurno = () => {
        navigate(`/refugio/solicitudes/${solicitudId}`, {
            replace: true
        });
    }

    return (
        <div id="crear_turno_wrapper">
            <h1 className="title fs-1"><img src="/img/clock.png" className="img-fluid" width={80} alt="reloj" /> Crear nuevo turno</h1>
            <div className="row justify-content-center">
                <div className="col-12 col-md-7">
                    <div className="card">
                        <div className="card-header title text-center">Turno para la solicitud Nº {solicitudId}</div>
                        <div className="card-body">
                            <Formik
                                initialValues={turnoInitialValues}
                                validationSchema={turnoSchema}
                                onSubmit={crearTurnoSubmit}
                            >
                                {({ isSubmitting }) => (
                                <Form id="nuevo_turno_form">
                                    <p>Adoptante: adoptante.test@gmail.com</p>
                                    <p>Animal a adoptar: Max</p>
                                    <div className="row my-4">
                                        <label htmlFor="fecha_turno" className="col-sm-4 col-form-label my-auto">Fecha a programar:</label>
                                        <div className="col-sm-8">
                                            <Field type="date" id="fecha_turno" name="fechaTurno" className="form-control form-control-lg"></Field>
                                            <ErrorMessage name="fechaTurno">{message => <AuthFormErrorMessage field={message} />}</ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <label htmlFor="hora_turno" className="col-sm-4 col-form-label my-auto">Horario a programar:</label>
                                        <div className="col-sm-4">
                                            <Field as="select" id="hora_turno" name="horaTurno" className="form-select" aria-label="Hora del turno">
                                                <option defaultValue>Horas</option>
                                                {listaDeHoras.map((hora, index) => <option value={hora} key={index}>{hora}</option>)}
                                            </Field>
                                            <ErrorMessage name="horaTurno">{message => <AuthFormErrorMessage field={message} />}</ErrorMessage>
                                        </div>
                                        <div className="col-sm-4">
                                            <Field as="select" id="minuto_turno" name="minutoTurno" className="form-select" aria-label="Minutos del turno">
                                                <option defaultValue>Minutos</option>
                                                {listaDeMinutos.map((minuto, index) => <option value={minuto} key={index}>{minuto}</option>)}
                                            </Field>
                                            <ErrorMessage name="minutoTurno">{message => <AuthFormErrorMessage field={message} />}</ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-success me-2" disabled={isSubmitting}>Programar turno</button>
                                        <button type="button" className="btn btn-danger" onClick={cancelarCreacionDeTurno}>Cancelar</button>
                                    </div>
                                </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}