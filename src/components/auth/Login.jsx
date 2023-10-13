import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { UserContext } from '../layout/LayoutPublic';
import { useFetch } from 'src/hooks/useFetch';

const loginSchema = Yup.object().shape({
	loginEmail: Yup.string().required("Este campo es obligatorio."),
	loginPassword: Yup.string().required("Este campo es obligatorio.")
});

function Login(props) {
	const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

	const login = async (values, { setSubmitting, setFieldError }) => {
		try {
			const response = await fetch("https://localhost:7277/api/auth/login", {
				method: "POST",
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify({
					email: values.loginEmail,
					password: values.loginPassword
				})
			});

			if(!response.ok) {
				if(response.status === 404) {
					setFieldError("userNotFoundError", await response.text());
					return;
				}

				throw new Error("Hubo un problema con la solicitud. Código: " + response.status);
			}

			const data = await response.json();
			setUser(data, localStorage.setItem('userData', JSON.stringify(data)));
				
			navigate('/refugios', {
				replace: true
			});
		}
		catch(error) {
			console.log(error.message);
		}
		finally {
			setSubmitting(false);
		}
	}

	return (
		<div id="login_wrapper" className="card">
			<div className="card-body">
				<Formik
					initialValues={{
						loginEmail: '',
						loginPassword: '',
						userNotFoundError: ''
					}}
					validationSchema={loginSchema}
					onSubmit={login}
				>
					{({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
					<form id="login_form" onSubmit={handleSubmit}>
						<legend>Accede a tu cuenta</legend>
						<div className="form-floating py-2">
							<input 
								type="text"
								className="form-control"
								id="login_email"
								name="loginEmail"
								placeholder="Correo electrónico"
								value={values.loginEmail}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							<label htmlFor="login_email">Correo electrónico</label>
							{ errors.loginEmail && touched.loginEmail && <div className="text-danger">{errors.loginEmail}</div> }
						</div>
						<div className="form-floating pt-2 pb-4">
							<input 
								type="text"
								className="form-control"
								id="login_password"
								name="loginPassword"
								placeholder="Contraseña"
								value={values.loginPassword}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							<label htmlFor="login_password">Contraseña</label>
							{ errors.loginPassword && touched.loginPassword && <div className="text-danger">{errors.loginPassword}</div> }
						</div>
						<div className="form-floating pb-2">
							<button type="submit" className="btn btn-primary" disabled={isSubmitting}>Ingresar</button>
						</div>
						{errors.userNotFoundError && <div className="text-danger pt-2">{errors.userNotFoundError}</div>}
						<div className="py-4">
							¿Olvidaste tu contraseña? <Link to="/auth/recuperar-password">Haz clic aquí</Link>
						</div>
					</form>
					)}
				</Formik>
			</div>
		</div>
    );
}

export default Login;