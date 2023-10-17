import { useState, useEffect, useCallback } from "react";

export const BarrioSelector = (props) => {
    const [ barrios, setBarrios ] = useState(null);
    let { handleChange, handleBlur } = props;

    const getBarrios = useCallback(async () => {
        const response = await fetch("https://localhost:7277/api/barrios", { method: "GET" });

        if(!response.ok)
            throw new Error("Hubo un problema con la solicitud. Código: " + response.status);

        const data = await response.json();
        setBarrios(data);
    }, [setBarrios]);

    useEffect(() => {
        getBarrios();
    }, [getBarrios]);

    return (
        <select
            id="barrio_selector"
            name="id_Barrio"
            className="form-select form-select-sm"
            aria-label="Seleccionar barrio porteño"
            onChange={handleChange}
            onBlur={handleBlur}
        >
            <option value="0">Elegir barrio...</option>
            {barrios && barrios.map((barrio, index) => 
                <option value={barrio.id} key={index}>{barrio.nombre}</option>
            ) }
        </select>
    );
}