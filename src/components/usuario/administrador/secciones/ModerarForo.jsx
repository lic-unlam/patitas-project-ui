import React, { useState, useEffect } from "react";
import { flushSync } from 'react-dom';
import { Link } from "react-router-dom";

import Modal from "../../modal/Modal";
import { EliminarPublicacion } from "./popups/EliminarPublicacion";

export const ModerarForo = (props) => {
    const [modalActivo, setModalActivo] = useState(''); // por defecto el modal no se carga al DOM

    useEffect(() => {
        document.title = window.$title.concat(' - ', props.title);
    }, []);

    const handleModal = (accion) => {
        flushSync(() => {
            setModalActivo(accion); // flushSync me permite actualizar el dom virtual de React antes de seguir con las sentencias
        });
        new bootstrap.Modal(document.querySelector("#modal_popup")).show(); // llamo manualmente al modal
    }

    const iterarPublicaciones = () => {
        const publicaciones = [];

        for(let i = 0; i < 4; i++) {
            publicaciones.push(
                <ul className="list-group list-group-horizontal" key={i}>
                    <li className="list-group-item">19/09/23 11:45</li>
                    <li className="list-group-item"><Link to="/forum/missing/1"><i className="bi bi-link-45deg"></i> Se me perdió mi perro ¡por favor ayuda!</Link></li>
                    <li className="list-group-item">Mascotas perdidas</li>
                    <li className="list-group-item"><Link to="/adoptantes/1">adoptante.test</Link></li>
                    <li className="list-group-item">
                        <button type="button" className="btn btn-sm btn-secondary me-1" title="Editar publicación"><i className="bi bi-pencil"></i></button>
                        <button type="button" className="btn btn-sm btn-danger" title="Borrar publicación" data-bs-target="#modal_popup" onClick={() => handleModal("Borrar publicación")}><i className="bi bi-trash3"></i></button>
                    </li>
                </ul>
            );
        }

        return publicaciones;
    }
    
    return (
        <>
        <div className="row justify-content-center">
            <div className="col-12 col-md-auto">            
                <div id="filtrar_categoria_foros" className="form-group row py-2">
                    <label className="col-auto my-auto">Mostrar:</label>
                    <div className="col pt-2 pt-md-0">
                        <select id="filtrar_categoria_foros_select" className="form-select" aria-label="Filtrar categoría por...">
                            <option value="0" defaultValue>Todos</option>
                            <option value="1">Mascotas perdidas</option>
                            <option value="2">Animales callejeros</option>
                            <option value="3">Noticias</option>
                            <option value="4">Promociones</option>
                            <option value="5">Ayuda y asistencia</option>
                            <option value="6">Sugerencias</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-auto">
                <div id="ordenar_publicaciones_foros" className="form-group row py-2">
                    <label className="col-auto my-auto">Ordenar por:</label>
                    <div className="col pt-2 pt-md-0">
                        <select id="ordenar_publicaciones_select" className="form-select" aria-label="Ordenar por...">
                            <option value="0" defaultValue>Más recientes</option>
                            <option value="1">Más antiguos</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div id="listado_publicaciones_wrapper">
            <div className="card grilla-de-items listado-publicaciones">
                <div className="row">
                    <div className="col">
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item">Fecha</li>
                            <li className="list-group-item">Título</li>
                            <li className="list-group-item">Categoría</li>
                            <li className="list-group-item">Autor</li>
                            <li className="list-group-item">Acciones</li>
                        </ul>
                        {iterarPublicaciones()}
                    </div>
                </div>
            </div>
        </div>

        {
         modalActivo === "Borrar publicación" &&
            <Modal
                title={"Borrar publicación"}
                ocultarModal={setModalActivo}
                element={<EliminarPublicacion />}>
            </Modal>
        }

        <div className="mt-4">Acá aparecería un listado con todas las publicaciones + un combo para filtrar por categoría. El administrador hace clic en el enlace de determinada publicación y la abre (o sea, lo redirecciona a la URL de la publicación). Ahí le aparecería debajo de su título, un botón para editar y otro para eliminar la publicación. Si edita, se le abre el formulario de edición (+ un campo para el motivo de la edición), guarda y le aparece un mensaje "La publicación se ha editado exitosamente" y listo. Si la borra, le aparece un formulario donde tiene que indicar el motivo, le da a "Borrar publicación" y le aparece un mensaje "La publicación se ha eliminado".</div>
        </>
    );
}