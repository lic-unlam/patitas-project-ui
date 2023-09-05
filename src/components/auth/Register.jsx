import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register(props) {
    const navigate = useNavigate();

    const doRegister = (event) => {
		event.preventDefault();

		try {
			const userData = {
				username: 'cosme_fulanito',
				email: 'cosme.fulanito@gmail.com',
				profilePicture: '/img/default_profile_picture.png'
			};

			localStorage.setItem('userData', JSON.stringify(userData));
				
			navigate('/shelter/1', {
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
        <div id="register_wrapper" className="card">
            <div className="card-body">
                <form id="register_form" onSubmit={doRegister}>
                    <legend>Únete y empieza a compartir</legend>
                    <div className="form-group row py-2 role-selector-wrapper justify-content-center">
                        <label className="col-auto">¿Qué tipo de usuario eres?</label>
                        <div className="col-4">
                            <select id="role_selector" className="form-select form-select-sm" aria-label="Seleccionar tipo de usuario">
                                <option value="0" defaultValue>Adoptante</option>
                                <option value="1">Refugio</option>
                                <option value="2">Veterinaria</option>
                            </select>
                        </div>
                    </div>
                    <div className="py-2">
                        <input type="text" className="form-control" placeholder="Nombre de usuario"/>
                    </div>
                    <div className="py-2">
                        <input type="text" className="form-control" placeholder="Correo electrónico"/>
                    </div>
                    <div className="py-2">
                        <input type="text" className="form-control" placeholder="Contraseña"/>
                    </div>
                    <div className="py-2">
                        <input type="text" className="form-control" placeholder="Repetir contraseña"/>
                    </div>
                    <div className="pt-2 pb-4 form-check text-start">
                        <input type="checkbox" className="form-check-input" id="terms_and_conditions"/>
                        <label className="form-check-label" htmlFor="terms_and_conditions">Comprendo y acepto los <Link to="/auth/terms">términos y condiciones</Link>.</label>
                    </div>
                    <div className="pb-2">
                        <button type="submit" className="btn btn-primary">Crea tu cuenta</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;