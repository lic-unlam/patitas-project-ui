export const BarrioSelector = (props) => {
    return (
        <select id="barrio_selector" className="form-select form-select-sm" aria-label="Seleccionar barrio porteño">
            <option value="0" defaultValue>Elegir barrio...</option>
            { props.barrios.map((barrio, index) => 
                <option value={barrio.nroOrden} key={index}>{barrio.nombre}</option>
            ) }
        </select>
    );
}