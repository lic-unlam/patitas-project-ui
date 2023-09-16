import React, { useEffect } from "react";

import LandingPage from './secciones/LandingPage';
import Caracteristicas from './secciones/Caracteristicas';
import Testimonios from './secciones/Testimonios';
import AppsMoviles from './secciones/AppsMoviles';

const Bienvenida = (props) => {
    useEffect(() => {
        document.title = window.$title;
    }, []);

    return (
        <>
            <section>
                <LandingPage />
            </section>
            <section>
                <Caracteristicas />
            </section>
            <section>
                <Testimonios />
            </section>
            <section>
                <AppsMoviles />
            </section>
        </>
    );
}

export default Bienvenida;