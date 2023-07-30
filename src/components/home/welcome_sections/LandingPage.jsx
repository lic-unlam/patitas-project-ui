import {Link} from 'react-router-dom';

function scrollToFeatures(event) {
    event.preventDefault();
    
    let element = document.getElementById('features');
    
    element.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function LandingPage() {
    return (
        <div id="landing_page">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="legend-wrapper py-4">
                        <h1>¡Se parte de algo maravilloso!</h1>
                        <p>Adoptar siempre es una acción noble para darle a un animal un hogar y familia que lo haga feliz. Por eso, desde Patitas te facilitamos el proceso para que puedas encontrar ese gran amigo que estás buscando sin moverte de tu casa. ¡Anímate!</p>
                        <Link className="btn btn-lg btn-primary" to={'/shelter'}>Explorar refugios</Link>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="logo-wrapper">
                        <img className="img-fluid py-4" src="/img/patitas.png" alt="patitas_logo"/>
                    </div>
                </div>
                <div id="see_next" onClick={scrollToFeatures}>
                    <a className="text-muted" href="#features" alt="see_features">
                        <p>Descubre todo lo que puedes hacer con Patitas</p>
                        <i className="bi bi-chevron-down"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;