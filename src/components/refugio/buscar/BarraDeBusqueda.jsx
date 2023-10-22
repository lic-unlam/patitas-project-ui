import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export const BarraDeBusqueda = (props) => {
    const [ barrios, setBarrios ] = useState([]);
    const setResultados = props.setResultados;
    const [ searchParams, setSearchParams ] = useSearchParams();
    
    const cargarBarrios = useCallback(async () => {
        const response = await fetch("https://localhost:7277/api/barrios", {
            method: "GET"
        });

        if(!response.ok) {
            throw new Error("Hubo un problema con la solicitud. Código: " + response.status);
        }

        const data = await response.json();
        setBarrios(data);
    }, []);

    useEffect(() => {
        cargarBarrios();
    }, [cargarBarrios]);

    const buscarRefugios = async (event) => {
        event.preventDefault();
        let nombre = event.target.nombre.value;
        let barrio = event.target.barrio.value;
        //console.log(event.target.barrio[event.target.barrio.value].text);

        //setSearchParams({ nombre: nombre, barrio: barrio });

        try {
            /*let queryString = '';
            
            if(nombre)
                queryString += `nombre=${nombre}`;

            if(barrio)
                queryString += queryString ? `&barrio=${barrio}` : `barrio=${barrio}`;*/

            const response = await fetch(`https://localhost:7277/api/refugios/buscar${"?nombre=" + nombre + "&barrio=" + barrio}`, {
                method: "GET"
            });
    
            if(!response.ok)
                throw new Error("Hubo un problema con la solicitud. Código: " + response.status);

            const data = await response.json();
            setResultados(data);
        }
        catch(error) {
            console.log(error.message);
        }
    }

    return (
        <div id="barra_de_busqueda_wrapper">
            <h1>Buscador de refugios</h1>
            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <form id="buscador_form" onSubmit={buscarRefugios}>
                        <div className="input-group">
                            <input id="nombre" name="nombre" type="text" className="form-control" placeholder="Escriba el nombre del refugio..." aria-label="Escriba el nombre del refugio" autoFocus />
                            <button id="shelter_search_button" type="submit" className="btn"><i className="bi bi-search"></i></button>
                        </div>
                        <div className="form-group row justify-content-center py-2">
                            <label className="col-12 col-md-auto my-auto">Filtrar por barrio porteño:</label>
                            <div className="col-7 col-md-4">
                                <select id="barrio" name="barrio" className="form-select" aria-label="Seleccionar barrio porteño">
                                    <option value="Todos" defaultValue>Todos</option>
                                    { barrios.map((barrio, index) =>
                                        <option value={barrio.nombre} key={index}>{barrio.nombre}</option>
                                    )}
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}