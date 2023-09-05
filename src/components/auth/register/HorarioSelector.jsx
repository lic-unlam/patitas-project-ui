export const HorarioSelector = (props) => {
    return (
        <select id={props.id} className="form-select form-select-sm">
            <option value="0" defaultValue>Elegir hora...</option>
            {props.listaDeHoras.map((hora, index) =>
                <option value={index + 1} key={index}>{hora} hs.</option>
            )}
        </select>
    );
}