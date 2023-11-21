import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";

export const CustomModal = (props) => {
    const navigate = useNavigate();
    const borderClass = props.borderClass || "border-patitas";
    const buttonClass = props.buttonClass || "btn-primary";
    const showConfettis = props.showConfettis;

    const cerrarCustomModal = useCallback(() => {
        props.onCloseCustomModal ? props.onCloseCustomModal() : navigate('..');
    }, [navigate]); // uso 'useCallback' porque voy a utilizar esta función dentro de useEffect

    useEffect(() => {
		const goBack = (event) => {
			if((event.key === 'Escape') && document.getElementById("custom_modal"))
				cerrarCustomModal();
        }
		
		document.addEventListener("keydown", goBack);
        document.body.style.overflow = "hidden";

        if(props.showConfettis)
            desplegarEstrellas();
        else if(props.showSchoolConfettis)
            desplegarSchoolPride();

		return () => {
            document.removeEventListener("keydown", goBack);
            document.body.style.overflow = '';
        };
	}, [navigate, cerrarCustomModal]);

    //// CONFETTI ////

    // Efecto de estrellas cuando se aprueba la solicitud

    var defaults = {
        spread: 360,
        ticks: 50,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
        colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
    };

    function shoot() {
        confetti({
            ...defaults,
            particleCount: 40,
            scalar: 1.2,
            shapes: ['star']
        });

        confetti({
            ...defaults,
            particleCount: 10,
            scalar: 0.75,
            shapes: ['circle']
        });
    }

    function desplegarEstrellas() {
        setTimeout(shoot, 0);
        setTimeout(shoot, 100);
        setTimeout(shoot, 200);
    }

    // Efecto de escuela cuando se finaliza la adopción

    function desplegarSchoolPride() {
        var end = Date.now() + (10 * 1000); // 10 segundos dura el efecto

        // go Buckeyes!
        var colors = ['#bb0000', '#ffffff'];

        (function frame() {
            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: colors
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: colors
            });
        
            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }
    
    //////////////////

    return (
        <>
            <div className="overlay"></div>
            <div id="custom_modal" className={`custom-modal-wrapper ${borderClass} mb-2 text-center`}>
                {props.children}
                { !props.customButtons &&
                    <button className={`btn ${buttonClass} mt-4`} onClick={cerrarCustomModal}>Cerrar</button>
                }
            </div>
        </>
    );
}