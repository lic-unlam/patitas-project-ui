import { Link } from "react-router-dom";

const Forbidden = () => {
    return (
        <div className="not-found-wrapper">
            <h1><b>No tiene permisos para acceder a esta sección.</b></h1>
            <h3><code>Código de error: 403</code></h3>
            <Link to="/" className="btn btn-dark">Volver a inicio</Link>
            <figure><img className="img-fluid mt-4" src="/img/gatito.jpg" alt="gatito_error_403"/></figure>
        </div>
    );
}

export default Forbidden;