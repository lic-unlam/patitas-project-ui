import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login(props) {
    const navigate = useNavigate();

	const doLogin = (event) => {
		event.preventDefault();

		try {
			const userData = {
				username: 'adoptante.test',
				email: 'adoptante.test@gmail.com',
				profilePicture: '/img/default_profile_picture.png'
			};

			localStorage.setItem('userData', JSON.stringify(userData));
				
			navigate('/refugios', {
				replace: true
			});
		}
		catch(error) {
			return {
				title: "Ocurrió un error inesperado. Inténtelo más tarde.",
				message: error
			}
		}
	}

	return (
		<div id="login_wrapper" className="card">
			<div className="card-body">
				<form id="login_form" name="loginForm" onSubmit={doLogin}>
					<legend>Accede a tu cuenta</legend>
					<div className="form-floating py-2">
						<input type="text" className="form-control" id="login_email" name="loginEmail" placeholder="Correo electrónico"/>
						<label htmlFor="login_email">Correo electrónico</label>
					</div>
					<div className="form-floating pt-2 pb-4">
						<input type="text" className="form-control" id="login_password" name="loginPassword" placeholder="Contraseña"/>
						<label htmlFor="login_password">Contraseña</label>
					</div>
					<div className="form-floating pb-2">
						<button type="submit" className="btn btn-primary">Ingresar</button>
					</div>
					<div className="py-4">
						¿Olvidaste tu contraseña? <Link to="/auth/forgottenpassword">Haz clic aquí</Link>
					</div>
				</form>
			</div>
		</div>
    );
}

export default Login;