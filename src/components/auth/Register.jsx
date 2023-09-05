import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AdoptanteForm } from './register/AdoptanteForm';
import { RefugioForm } from './register/RefugioForm';
import { VeterinariaForm } from './register/VeterinariaForm';

const barriosData = [
    {
        nroOrden: 1,
        nombre: "Recoleta"
    },
    {
        nroOrden: 2,
        nombre: "Congreso"
    },
    {
        nroOrden: 3,
        nombre: "Puerto Madero"
    },
    {
        nroOrden: 4,
        nombre: "Caballito"
    }
]

function Register(props) {
    const navigate = useNavigate();
    const [rolSeleccionado, setRolSeleccionado] = useState('0');

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

    const capturarRolSeleccionado = (e) => {
        setRolSeleccionado(e.target.value);
    }

    const mostrarFormularioPorRol = (rol) => {
        switch(rol) {
            case '0':
                return <AdoptanteForm barriosData={barriosData} />;
            case '1':
                return <RefugioForm barriosData={barriosData} getListaDeHoras={() => getListaDeHoras} />;
            case '2':
                return <VeterinariaForm barriosData={barriosData} getListaDeHoras={() => getListaDeHoras} />;
            default:
                return;
        }
    }

    const getListaDeHoras = () => {
        let horas = [];

        for(let i = 0; i <= 24; i++) {
            let horaConZeroALaIzquierda = String(i).padStart(2, '0');
            horas.push(horaConZeroALaIzquierda);
        }

        return horas;
    }

    return (
        <div id="register_wrapper" className="card">
            <div className="card-body">
                <form id="register_form" onSubmit={doRegister}>
                    <legend>Únete y empieza a compartir</legend>
                    <div className="form-group row py-2 role-selector-wrapper justify-content-center">
                        <label className="col-auto">¿Qué tipo de usuario eres?</label>
                        <div className="col-4">
                            <select id="role_selector" onChange={capturarRolSeleccionado} className="form-select form-select-sm" aria-label="Seleccionar tipo de usuario">
                                <option value="0" defaultValue>Adoptante</option>
                                <option value="1">Refugio</option>
                                <option value="2">Veterinaria</option>
                            </select>
                        </div>
                    </div>
                    {mostrarFormularioPorRol(rolSeleccionado)}
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