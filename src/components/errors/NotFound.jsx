import { Link } from "react-router-dom";

function NotFound(props) {
    return (
        <div className="not-found-wrapper">
            <h1 className="display-4">¡Oops! Página no encontrada</h1>
            <h1><Link to="/">Volver a inicio</Link></h1>
            { props.message && <h3>{props.message}</h3> }
            <img className="img-fluid mt-4" src="/img/cat-and-dog-404.jpg" width={900} alt="perro_gato_error_404"/>
        </div>
    );
}

export default NotFound;