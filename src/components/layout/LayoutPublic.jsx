import React, { useState, useEffect, createContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ScrollToTopButton } from "./ScrollToTopButton";
import CustomAlert from "./CustomAlert";

export const UserContext = createContext();
export const CustomAlertContext = createContext();
//const userDataString = localStorage.getItem('userData');

const LayoutPublic = () => {
    const [ user, setUser ] = useState(null);
    const [ mostrarToTopButton, setMostrarToTopButton ] = useState(false);
    const [ customAlert, setCustomAlert ] = useState({
        mostrar: false,
        tipo: "",
        mensaje: ""
    });

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
        <UserContext.Provider value={{ user, setUser }}>
            <CustomAlertContext.Provider value={{ customAlert, setCustomAlert }}>
                <Navbar />
                    { customAlert.mostrar && <CustomAlert /> }
                    <Outlet />
                <Footer />
                { mostrarToTopButton && <ScrollToTopButton /> }
            </CustomAlertContext.Provider>
        </UserContext.Provider>
    );
}

export default LayoutPublic;