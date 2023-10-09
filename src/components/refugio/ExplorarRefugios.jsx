import { useState, useCallback, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';

import { UserContext } from "../layout/LayoutPublic";

import { RefugiosPorMiZona } from "./RefugiosPorMiZona";
import { TarjetasDeRefugio } from "./TarjetasDeRefugio";

const ExplorarRefugios = (props) => {
    const [ refugios, setRefugios ] = useState([]);
    const [ barrios, setBarrios ] = useState([]);
    const [ refugiosFiltrados, setRefugiosFiltrados ] = useState([]);
    const { user, setUser } = useContext(UserContext);

    const getRefugios = useCallback(async () => {
        try {
            const response = await fetch("https://localhost:7277/api/refugios", {
                method: "GET"
            });
            
            if(!response.ok)
                throw new Error("Hubo un problema con la solicitud. Código: " + response.status);
            
            const data = await response.json();
            setBarrios(data.barrios);
            setRefugios(data.refugios);
            setRefugiosFiltrados(data.refugios);
        }
        catch(error) {
            console.log(error.message);
        }
    }, []);

    useEffect(() => {
        document.title = window.$title.concat(' - ', props.title);
        getRefugios();
    }, [getRefugios]);

    const filtrarPorBarrio = (event) => {
        const barrioSeleccionado = event.target.value;

        if(barrioSeleccionado !== "Todos") {
            const refugiosFiltrados = refugios.filter(refugio => refugio.barrio === barrioSeleccionado);
            setRefugiosFiltrados(refugiosFiltrados);
        }
        else
            setRefugiosFiltrados(refugios);
    }

    return (
        <div className="shelters-wrapper">
            {user && <RefugiosPorMiZona miBarrio={"Palermo"} refugios={refugios} />}
            <h2>Nuestros refugios asociados</h2>
            <div className="form-group row pb-4">
                <label className="col-auto my-auto">Filtrar por barrio porteño:</label>
                <div className="col-12 col-md-2">
                    <select 
                        id="barrio_selector"
                        className="form-select form-select-sm"
                        aria-label="Seleccionar barrio porteño"
                        onChange={filtrarPorBarrio}>
                        <option value="Todos" defaultValue>Todos</option>
                        {barrios.map((barrio, index) =>
                            <option value={barrio} key={index}>{barrio}</option>
                        )}
                    </select>
                </div>
            </div>
            {refugios && <TarjetasDeRefugio refugios={refugiosFiltrados}/>}
        </div>
    );
}

export default ExplorarRefugios;