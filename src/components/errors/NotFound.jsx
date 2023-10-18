function NotFound(props) {
    return (
        <div className="not-found-wrapper">
            <h1 className="display-4">¡Oops! Página no encontrada</h1>
            { props.message && <h3>{props.message}</h3> }
            <img className="img-fluid mt-4" src="/img/gatito.jpg" alt="gatito_error_404"/>
        </div>
    );
}

export default NotFound;