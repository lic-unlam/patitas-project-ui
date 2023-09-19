import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

export const CustomModal = (props) => {
    const navigate = useNavigate();

    const cerrarCustomModal = useCallback(() => {
        navigate('..');
    }, [navigate]); // uso 'useCallback' porque voy a utilizar esta función dentro de useEffect

    useEffect(() => {
		const goBack = (event) => {
			if((event.key === 'Escape') && document.getElementById("custom_modal"))
				cerrarCustomModal();
        }
		
		document.addEventListener("keydown", goBack);
        document.body.style.overflow = "hidden";

		return () => {
            document.removeEventListener("keydown", goBack);
            document.body.style.overflow = '';
            return true;
        };
	}, [navigate, cerrarCustomModal]);

    return (
        <>
            <div className="overlay"></div>
            <div id="custom_modal" className="custom-modal-wrapper mb-2 text-center">
                {props.children}
                <button className="btn btn-primary mt-4" onClick={cerrarCustomModal}>Cerrar</button>
            </div>
        </>
    );
}