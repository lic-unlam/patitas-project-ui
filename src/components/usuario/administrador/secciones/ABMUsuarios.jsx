import React, { useEffect } from "react";

export const ABMUsuarios = (props) => {
    useEffect(() => {
        document.title = window.$title.concat(' - ', props.title);
    }, []);

    return (
        <div>Alta, baja y modificación de usuarios.</div>
    );
}