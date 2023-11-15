export const ReprogramarTurno = (props) => {
    const { turno } = props;

    return (
        <div>
            <p>¿Desea pedir una reprogramación del turno reservado para el {turno.fechaTurno} a las {turno.horaTurno} hs.?</p>
            <p>Motivo de la reprogramación:</p>
            <textarea className="form-control" placeholder="Máximo 200 caracteres..."></textarea>
        </div>
    );
}