export const EliminarPublicacion = () => {
    return (
        <div className="text-start">
            <p>¿Está seguro que desea borrar la publicación Nº 20?</p>
            <span className="fw-bold">Título:</span>
            <p>Se me perdió mi perro ¡por favor ayuda!</p>
            <span className="fw-bold">Autor:</span>
            <p>adoptante.test</p>
            <p>Motivo de la eliminación:</p>
            <textarea id="eliminar_publicacion_textarea" name="eliminarPublicacionTextarea" className="form-control" placeholder="Máximo 200 caracteres..."></textarea>
        </div>
    );
}