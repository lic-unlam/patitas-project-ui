import React, { useEffect } from "react";

export const ModerarForo = (props) => {
    useEffect(() => {
        document.title = window.$title.concat(' - ', props.title);
    }, []);
    
    return (
        <div>Acá aparecería un listado con todas las publicaciones + un combo para filtrar por categoría. El administrador hace clic en el enlace de determinada publicación y la abre (o sea, lo redirecciona a la URL de la publicación). Ahí le aparecería debajo de su título, un botón para editar y otro para eliminar la publicación. Si edita, se le abre el formulario de edición (+ un campo para el motivo de la edición), guarda y le aparece un mensaje "La publicación se ha editado exitosamente" y listo. Si la borra, le aparece un formulario donde tiene que indicar el motivo, le da a "Borrar publicación" y le aparece un mensaje "La publicación se ha eliminado".</div>
    );
}