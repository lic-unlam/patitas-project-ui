import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ScrollToTopButton } from "./ScrollToTopButton";

const LayoutPublic = () => {
    const [ mostrarToTopButton, setMostrarToTopButton ] = useState(false);

    useEffect(() => {
        document.addEventListener('scrollend', toggleButton);

        return () => document.removeEventListener('scrollend', toggleButton);
    }, []);

    const toggleButton = () => {
        if(document.documentElement.scrollTop > 40 || document.body.scrollTop > 40)
            setMostrarToTopButton(true);
        else
            setMostrarToTopButton(false);
    }

    return (
        <>
            <Navbar></Navbar>
            <Outlet/>
            { mostrarToTopButton && <ScrollToTopButton /> }
            <Footer></Footer>
        </>
    );
}

export default LayoutPublic;