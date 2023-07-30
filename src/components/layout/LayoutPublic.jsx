import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LayoutPublic = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet/>
            <Footer></Footer>
        </>
    );
}

export default LayoutPublic;