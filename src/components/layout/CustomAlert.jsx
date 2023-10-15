import React, { useEffect, useContext } from "react";

import { CustomAlertContext } from "./LayoutPublic";

const CustomAlert = (props) => {
    const { customAlert, setCustomAlert } = useContext(CustomAlertContext);

    const ocultarAlert = () => {
        setCustomAlert({
            mostrar: false
        });
    }

    useEffect(() => {
        const alertTimeout = setTimeout(() => {
            ocultarAlert();
            clearTimeout(alertTimeout); // para limpiar el timeout establecido si el elemento se elimina antes de que pasen los 5 segundos
        }, 8000);
    }, []);

    return (
        <div className={`alert alert-${customAlert.tipo} alert-sticky alert-dismissible fade show`} role="alert">
            {customAlert.mensaje}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={ocultarAlert}></button>
        </div>
    );
}

export default CustomAlert;