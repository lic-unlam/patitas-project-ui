import React, { useEffect } from "react";

export const PerfilAdministrador = (props) => {
    useEffect(() => {
        document.title = window.$title.concat(' - ', props.title);
    }, []);

    return (
        <div>Datos personales del administrador.</div>
    );
}