import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, replace } from "formik";

import { BarrioSelector } from "./selectores/BarrioSelector";
import { AuthFormErrorMessage } from "./AuthFormErrorMessage";
import { CustomAlertContext } from "src/components/layout/LayoutPublic";
import { adoptanteFormParameters } from "./parametros/adoptanteFormParameters";
import { UserContext } from "src/components/layout/LayoutPublic";

export const AdoptanteForm = (props) => {
    const navigate = useNavigate();
    const { setCustomAlert } = useContext(CustomAlertContext);
    const { setUser } = useContext(UserContext);

    const registrarAdoptante = async (values, { setSubmitting }) => {
        try {
            const response = await fetch("https://localhost:7277/api/auth/registro/adoptante", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(values)
            });

            if(!response.ok)
                throw new Error("Hubo un problema con la solicitud. Código: " + response.status);

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
			setSubmitting(false);
		}
    }

    return (
        <Formik
        initialValues={adoptanteFormParameters.initialValues}
        validationSchema={adoptanteFormParameters.validations}
        onSubmit={registrarAdoptante}
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
                        type="date"
                        id="fecha_de_nacimiento"
                        name="fechaDeNacimiento"
                        className="form-control"
                        placeholder="Fecha de nacimiento"
                        value={values.fechaDeNacimiento}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <label htmlFor="fecha_de_nacimiento">Fecha de nacimiento</label>
                    { errors.fechaDeNacimiento && touched.fechaDeNacimiento && <AuthFormErrorMessage field={errors.fechaDeNacimiento} /> }
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
                <div className="py-2 ps-1">
                    <div className="form-group row py-2">
                        <label className="col-auto" htmlFor="barrio_selector">Barrio:</label>
                        <div className="col-12 col-md-6 col-xl-4">
                            <BarrioSelector handleChange={handleChange} handleBlur={handleBlur} />
                            { errors.id_Barrio && touched.id_Barrio && <AuthFormErrorMessage field={errors.id_Barrio} /> }
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