export const ConfirmarAsistencia = (props) => {
    const { turno } = props;

    return (
        <h5>¿Desea confirmar asistencia al turno reservado para el {turno.fechaTurno} a las {turno.horaTurno} hs. en el refugio {turno.nombreRefugio}?</h5>
    );
}