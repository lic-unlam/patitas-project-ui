import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";

import { BarrioSelector } from "./selectores/BarrioSelector";
import { DiasDeAtencionSelector } from "./selectores/DiasDeAtencionSelector";
import { HorarioSelector } from "./selectores/HorarioSelector";
import { refugioFormParameters } from "./parametros/refugioFormParameters";
import { AuthFormErrorMessage } from "./AuthFormErrorMessage";

import { UserContext } from "src/components/layout/LayoutPublic";
import { CustomAlertContext } from "src/components/layout/LayoutPublic";

export const RefugioForm = (props) => {
    const { setUser } = useContext(UserContext);
    const { setCustomAlert } = useContext(CustomAlertContext);
    const navigate = useNavigate();
    const [listaDeHoras, setListaDeHoras] = useState([]);

    useEffect(() => {
        setListaDeHoras(props.getListaDeHoras());
    }, []);

    const registrarRefugio = async (values, formikBag) => {
        try {
            const response = await fetch("https://localhost:7277/api/auth/registro/refugio", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({...values, diasDeAtencion: values.diasDeAtencion.join(", ")})
            });

            if(!response.ok) {
                if(response.status === 409)
                    throw new Error(await response.text());
                
                throw new Error("Hubo un problema con la solicitud. Código: " + response.status);
            }

            const data = await response.json();

            setCustomAlert({
                mostrar: true,
                tipo: "success",
                mensaje: <span>{data.resultado} <strong>{data.bienvenida}</strong></span>
            }, navigate("/refugios", {
                replace: true
            }));

            setUser(data.loginResponse, localStorage.setItem('userData', JSON.stringify(data.loginResponse)));
        }
        catch(error) {
            setCustomAlert({
                mostrar: true,
                tipo: "danger",
                mensaje: <span>{error.message}</span>
            });
        }
        finally {
			formikBag.setSubmitting(false);
		}
    }

    return (
        <Formik
        initialValues={refugioFormParameters.initialValues}
        validationSchema={refugioFormParameters.validations}
        onSubmit={registrarRefugio}
        >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form id="register_form" onSubmit={handleSubmit}>
                <div className="form-floating py-2">
                    <input
                        type="text"
                        id="nombre_de_usuario"
                        name="nombreDeUsuario"
                        className="form-control"
                        placeholder="Nombre de usuario"
                        value={values.nombreDeUsuario}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <label htmlFor="nombre_de_usuario">Nombre de usuario</label>
                    { errors.nombreDeUsuario && touched.nombreDeUsuario && <AuthFormErrorMessage field={errors.nombreDeUsuario} /> }
                </div>
                <div className="form-floating py-2">
                    <input
                        type="text"
                        id="email"
                        name="email"
                        autoComplete="false"
                        className="form-control"
                        placeholder="Correo electrónico"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <label htmlFor="email">Correo electrónico</label>
                    { errors.email && touched.email && <AuthFormErrorMessage field={errors.email} /> }
                </div>
                <div className="form-floating py-2">
                    <input
                        type="text"
                        id="password"
                        name="password"
                        className="form-control"
                        placeholder="Contraseña"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <label htmlFor="password">Contraseña</label>
                    { errors.password && touched.password && <AuthFormErrorMessage field={errors.password} /> }
                </div>
                <div className="form-floating py-2">
                    <input
                        type="text"
                        id="repetir_password"
                        name="repetirPassword"
                        className="form-control"
                        placeholder="Repetir contraseña"
                        value={values.repetirPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <label htmlFor="repetir_password">Repetir contraseña</label>
                    { errors.repetirPassword && touched.repetirPassword && <AuthFormErrorMessage field={errors.repetirPassword} /> }
                </div>
                <div className="form-floating py-2">
                    <input
                        type="text"
                        id="nombre_refugio"
                        name="nombre"
                        className="form-control"
                        placeholder="Nombre del refugio"
                        value={values.nombre}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <label htmlFor="nombre_refugio">Nombre del refugio</label>
                    { errors.nombre && touched.nombre && <AuthFormErrorMessage field={errors.nombre} /> }
                </div>
                <div className="form-floating py-2">
                    <input
                        type="text"
                        id="razon_social"
                        name="razonSocial"
                        className="form-control"
                        placeholder="Razón social"
                        value={values.razonSocial}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <label htmlFor="razon_social">Razón social</label>
                    { errors.razonSocial && touched.razonSocial && <AuthFormErrorMessage field={errors.razonSocial} /> }
                </div>
                <div className="form-floating py-2">
                    <input
                        type="text"
                        id="nombre_responsable"
                        name="nombreResponsable"
                        className="form-control"
                        placeholder="Nombre del responsable a cargo"
                        value={values.nombreResponsable}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <label htmlFor="nombre_responsable">Nombre del responsable a cargo</label>
                    { errors.nombreResponsable && touched.nombreResponsable && <AuthFormErrorMessage field={errors.nombreResponsable} /> }
                </div>
                <div className="form-floating py-2">
                    <input
                        type="text"
                        id="apellido_responsable"
                        name="apellidoResponsable"
                        className="form-control"
                        placeholder="Apellido del responsable a cargo"
                        value={values.apellidoResponsable}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <label htmlFor="apellido_responsable">Apellido del responsable a cargo</label>
                    { errors.apellidoResponsable && touched.apellidoResponsable && <AuthFormErrorMessage field={errors.apellidoResponsable} /> }
                </div>
                <div className="form-floating py-2">
                    <input
                        type="text"
                        id="telefono"
                        name="telefono"
                        className="form-control"
                        placeholder="Teléfono"
                        value={values.telefono}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <label htmlFor="telefono">Teléfono</label>
                    { errors.telefono && touched.telefono && <AuthFormErrorMessage field={errors.telefono} /> }
                </div>
                <div className="py-2">
                    <div className="row">
                        <div className="col-6">
                            <div className="form-floating">
                                <input
                                    type="text"
                                    id="calle"
                                    name="calle"
                                    className="form-control"
                                    placeholder="Calle"
                                    value={values.calle}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <label htmlFor="calle">Calle</label>
                                { errors.calle && touched.calle && <AuthFormErrorMessage field={errors.calle} /> }
                            </div>
                        </div>
                        <div className="col-4 col-xl-3">
                            <div className="form-floating">
                                <input
                                    type="text"
                                    id="altura"
                                    name="altura"
                                    className="form-control"
                                    placeholder="Altura"
                                    value={values.altura}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <label htmlFor="altura">Altura</label>
                                { errors.altura && touched.altura && <AuthFormErrorMessage field={errors.altura} /> }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-2 ps-1">
                    <div className="form-group row py-2">
                        <label className="col-auto" htmlFor="barrio_selector">Barrio:</label>
                        <div className="col-12 col-md-6 col-xl-4">
                            <BarrioSelector handleChange={handleChange} handleBlur={handleBlur} />
                            { errors.id_Barrio && touched.id_Barrio && <AuthFormErrorMessage field={errors.id_Barrio} /> }
                        </div>
                    </div>
                </div>
                <div className="py-2">
                    <DiasDeAtencionSelector handleChange={handleChange} handleBlur={handleBlur} />
                    { errors.diasDeAtencion && touched.diasDeAtencion && <AuthFormErrorMessage field={errors.diasDeAtencion} /> }
                </div>
                <div className="py-2">
                    <div className="form-group row py-2">
                        <label className="col-auto" htmlFor="hora_apertura_selector">Hora de apertura:</label>
                        <div className="col-12 col-md-6 col-xl-4">
                            <HorarioSelector
                                id="hora_apertura_selector"
                                name="horaApertura"
                                listaDeHoras={listaDeHoras}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                            />
                            { errors.horaApertura && touched.horaApertura && <AuthFormErrorMessage field={errors.horaApertura} /> }
                        </div>
                    </div>
                </div>
                <div className="py-2">
                    <div className="form-group row py-2">
                        <label className="col-auto" htmlFor="hora_cierre_selector">Hora de cierre:</label>
                        <div className="col-12 col-md-6 col-xl-4">
                            <HorarioSelector
                                id="hora_cierre_selector"
                                name="horaCierre"
                                listaDeHoras={listaDeHoras}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                            />
                            { errors.horaCierre && touched.horaCierre && <AuthFormErrorMessage field={errors.horaCierre} /> }
                        </div>
                    </div>
                </div>
                <div className="pt-2 pb-4 form-check text-start">
                    <input
                        type="checkbox"
                        id="terminos_aceptados"
                        name="terminosAceptados"
                        className="form-check-input"
                        value={values.terminosAceptados}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <label className="form-check-label" htmlFor="terminos_aceptados">Comprendo y acepto los <Link to="/auth/terminos-y-condiciones">términos y condiciones</Link>.</label>
                    { errors.terminosAceptados && touched.terminosAceptados && <AuthFormErrorMessage field={errors.terminosAceptados} /> }
                </div>
                <div className="pb-2">
                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Crea tu cuenta</button>
                </div>
            </form>
            )}
        </Formik>
    );
}