import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../layout/LayoutPublic";

const ExpiredSession = () => {
    let { setUser } = useContext(UserContext);

    useEffect(() => {
        setUser(null, localStorage.removeItem('userData'));
    }, [setUser]);

    return (
        <div className="text-center">
            <h1 className="display-4">Acceso no autorizado</h1>
            <h4>No está logueado o su sesión ha expirado.</h4>
            <Link to="/auth/signin" className="btn btn-primary">Acceder nuevamente</Link>
        </div>
    )
}

export default ExpiredSession;