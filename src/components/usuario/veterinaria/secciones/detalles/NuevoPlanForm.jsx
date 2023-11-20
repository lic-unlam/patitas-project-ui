import { useEffect, useContext, useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

import { validationMessages } from "src/components/auth/formularios/parametros/validationMessages";
import { AuthFormErrorMessage } from "src/components/auth/formularios/AuthFormErrorMessage";
import { UserContext } from "src/components/layout/LayoutPublic";
import Loading from "src/components/layout/Loading";

const initialValues = {
    nombreVacuna: '',
    nroDosisVacuna: 0,
    vacunasDelPlan: []
}

const validationSchema = Yup.object().shape({
    nombreVacuna: Yup.string()
                    .required(validationMessages.FIELD_REQUIRED),
    nroDosisVacuna: Yup.number()
                    .required(validationMessages.FIELD_REQUIRED)
                    .positive(validationMessages.MUST_BE_A_NUMBER)
                    .integer(validationMessages.MUST_BE_A_NUMBER),
    vacunasDelPlan: Yup.array()
                        .min(1, "La lista está vacía.")
});

export const NuevoPlanForm = (props) => {
    const { user } = useContext(UserContext);
    const { solicitudId } = useParams();

    const [ listaDeVacunas, setListaDeVacunas ] = useState([]);
    const [ vacunasDelPlan, setVacunasDelPlan ] = useState([]);
    const [ dosisYEdad, setDosisYEdad ] = useState({
        dosisCombo: [],
        edadIndicada: ''
    });

    const loadListaDeVacunas = useCallback(async () => {
        try {
            const response = await fetch(`https://localhost:7277/api/veterinaria/vacunas/${props.especieId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if(!response.ok) {
                throw new Error("Hubo un problema con la solicitud. Código de error " + response.status);
            }

            const data = await response.json();
            setListaDeVacunas(data);
        }
        catch(error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        loadListaDeVacunas();
    }, [loadListaDeVacunas]);

    const changeEdadIndicada = (event, handleChange) => {
        // llamo al evento del formik
        handleChange(event);

        // busco el nombre de la vacuna elegida en la lista
        let vacuna = listaDeVacunas.find(vacuna => vacuna.nombre === event.target.value);
        
        // cargo el combo de dosis y muestro la leyenda de edad indicada
        if(vacuna)
            setDosisYEdad({
                dosisCombo: [...Array(vacuna.nroDosis)].map((element, index) => index + 1),
                edadIndicada: vacuna.edadIndicada
            });
    }

    const agregarVacunaALaLista = (setFieldValue, vacunasDelPlanActualValue) => {
        let nombreVacunaSelect = document.getElementById('nombre_vacuna');
        let nroDosisVacunaSelect = document.getElementById('cantidad_dosis_vacuna');

        if(nombreVacunaSelect.value && nroDosisVacunaSelect.value)
            setFieldValue("vacunasDelPlan", [
                ...vacunasDelPlanActualValue, {
                    nombreVacuna: nombreVacunaSelect.value,
                    nroDosisVacuna: nroDosisVacunaSelect.value
                }
            ]);
            /*setVacunasDelPlan([
                ...vacunasDelPlan, {
                    nombreVacuna: nombreVacunaSelect.value,
                    nroDosisVacuna: nroDosisVacunaSelect.value
                }
            ]);*/
    }

    const crearPlanDeVacunacion = async (values, actions) => {
        /*if(vacunasDelPlan.length < 1) {
            actions.setFieldError("vacunasDelPlan", "La lista está vacía.");
            return;
        }*/

        actions.validateField("vacunasDelPlan");

        try {
            const response = await fetch(`https://localhost:7277/api/veterinaria/plan-de-vacunacion/${solicitudId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${user.accessToken}`
                },
                body: JSON.stringify(values.vacunasDelPlan)
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

    if(listaDeVacunas.length < 1)
        return <Loading />

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={crearPlanDeVacunacion}
        >
            {({ isSubmitting, handleChange, setFieldValue, values }) => (
                <Form id="nuevo_plan_form" className="card bg-light mt-4">
                    <div className="card-header title">Crear plan de vacunación</div>
                    <div className="card-body">
                        <p>Acá va un texto describiendo la funcionalidad.</p>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <Field as="select" id="nombre_vacuna" name="nombreVacuna" className="form-select" onChange={(event) => changeEdadIndicada(event, handleChange)}>
                                    <option value={""} defaultValue>Seleccione una vacuna...</option>
                                    {
                                        listaDeVacunas.map((vacuna, index) => 
                                            <option value={vacuna.nombre} key={index}>{vacuna.nombre}</option>
                                        )
                                    }
                                </Field>
                                <ErrorMessage name="nombreVacuna">{ message => <AuthFormErrorMessage field={message} /> }</ErrorMessage>
                            </div>
                            <div className="col-12 col-md-6">
                                <Field as="select" id="cantidad_dosis_vacuna" name="nroDosisVacuna" className="form-select">
                                    <option value={0} defaultValue>Elegir cantidad de dosis...</option>
                                    {
                                        dosisYEdad.dosisCombo.map((dosis, index) =>
                                        <option value={dosis} key={index}>{dosis}</option>)
                                    }
                                </Field>
                                <ErrorMessage name="nroDosisVacuna">{ message => <AuthFormErrorMessage field={message} /> }</ErrorMessage>
                            </div>
                            {
                                dosisYEdad.edadIndicada &&
                                <p className="my-2">
                                    <b>Edad indicada:</b> <i>{dosisYEdad.edadIndicada}</i>
                                </p>
                            }
                            <div className="row justify-content-center mb-4">
                                <button type="button" id="agregar_a_la_lista" className="btn btn-dark col-4" onClick={() => agregarVacunaALaLista(setFieldValue, values.vacunasDelPlan)} disabled={isSubmitting}>Agregar a la lista</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div id="vacunas_animal_wrapper">
                                    <h5>Vacunas que el animal ya tiene</h5>
                                    <hr/>
                                    <div id="lista_vacunas_wrapper">
                                        <ul>
                                            <li className="fst-italic">Aún no tiene vacunas registradas.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div id="plan_de_vacunas_wrapper">
                                    <h5>Lista del plan de vacunación</h5>
                                    <hr/>
                                    <div id="lista_del_plan_wrapper">
                                        <ul>
                                            {
                                                values.vacunasDelPlan.length > 0 ?
                                                values.vacunasDelPlan.map((vacuna, index) => 
                                                    <li className="pb-2" key={index}>
                                                        <div>{vacuna.nombreVacuna}</div>
                                                        <div className="fst-italic text-muted">({vacuna.nroDosisVacuna}º dosis)</div>
                                                    </li>
                                                )
                                                : <li className="fst-italic">No has seleccionado ninguna vacuna.</li>
                                            }
                                        </ul>
                                        <ErrorMessage name="vacunasDelPlan">{ message => <AuthFormErrorMessage field={message} /> }</ErrorMessage>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="d-flex gap-2 justify-content-center">
                            <button type="submit" className="btn btn-success" disabled={isSubmitting}>Crear plan</button>
                            <button type="button" className="btn btn-danger" disabled={isSubmitting} onClick={() => props.setShowCrearPlanForm(false)}>Cancelar</button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
}