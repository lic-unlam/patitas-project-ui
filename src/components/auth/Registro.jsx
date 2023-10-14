import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AdoptanteForm } from './formularios/AdoptanteForm';
import { RefugioForm } from './formularios/RefugioForm';
import { VeterinariaForm } from './formularios/VeterinariaForm';

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

const Registro = (props) => {
    const navigate = useNavigate();
    const [rolSeleccionado, setRolSeleccionado] = useState("adoptante");

    const doRegister = (event) => {
		event.preventDefault();

		try {
			const userData = {
				username: 'cosme_fulanito',
				email: 'cosme.fulanito@gmail.com',
				profilePicture: '/img/default_profile_picture.png'
			};

			localStorage.setItem('userData', JSON.stringify(userData));
				
			navigate('/refugios/1', {
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
            case "adoptante":
                return <AdoptanteForm />;
            case "refugio":
                return <RefugioForm barriosData={barriosData} getListaDeHoras={() => getListaDeHoras} />;
            case "veterinaria":
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
                <h4 className="form-legend text-center">Únete a la experiencia</h4>
                <div className="form-group row py-2 role-selector-wrapper justify-content-center">
                    <label className="col-auto">¿Qué tipo de usuario eres?</label>
                    <div className="col-4">
                        <select id="role_selector" onChange={capturarRolSeleccionado} className="form-select form-select-sm" aria-label="Seleccionar tipo de usuario">
                            <option value="adoptante" defaultValue>Adoptante</option>
                            <option value="refugio">Refugio</option>
                            <option value="veterinaria">Veterinaria</option>
                        </select>
                    </div>
                </div>
                {mostrarFormularioPorRol(rolSeleccionado)}
            </div>
        </div>
    );
}

export default Registro;