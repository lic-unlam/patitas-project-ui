export const HorarioSelector = (props) => {
    let { handleChange, handleBlur } = props;

    return (
        <select
            id={props.id}
            name={props.name}
            className="form-select form-select-sm"
            onChange={handleChange}
            onBlur={handleBlur}
        >
            <option value="">Elegir hora...</option>
            {props.listaDeHoras.map((hora, index) =>
                <option value={hora} key={index}>{hora} hs.</option>
            )}
        </select>
    );
}