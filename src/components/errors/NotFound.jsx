function NotFound() {
    return (
        <div className="not-found-wrapper">
            <h1 className="display-4">¡Oops! Página no encontrada</h1>
            <img className="img-fluid" width={250} src="/img/gatito.jpg" alt="gatito_error_404"/>
        </div>
    );
}

export default NotFound;