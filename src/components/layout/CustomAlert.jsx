import React, { useEffect } from "react";

const CustomAlert = (props) => {
    useEffect(() => {
        const alertTimeout = setTimeout(() => {
            props.ocultarAlert();
            clearTimeout(alertTimeout); // para limpiar el timeout establecido si el elemento se elimina antes de que pasen los 5 segundos
        }, 5000);
    }, []);

    return (
        <div className={`alert alert-${props.tipo} alert-sticky alert-dismissible fade show`} role="alert">
            {props.children}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={props.ocultarAlert}></button>
        </div>
    );
}

export default CustomAlert;