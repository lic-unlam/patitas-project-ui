import {Link} from 'react-router-dom';

function Footer() {
    return (
        <footer className="text-center">
            <hr/>
            <Link className="d-block d-md-inline me-0 me-md-4" to="#">Sobre nosotros</Link>
            <Link className="d-block d-md-inline me-0 me-md-4" to="#">Tutorial</Link>
            <Link className="d-block d-md-inline me-md-4" to="#">Como aportar</Link>
            <Link className="d-block d-md-inline me-0 me-md-4" to="#">Términos y condiciones</Link>
            <Link className="d-inline" to="#">Contacto</Link>
            <div className='mt-4'>Siguénos en nuestras redes</div>
            <div className="social-media">
                <Link className="d-block d-md-inline me-0 me-md-4" to="#"><img src='/img/social_media/facebook.png' alt='facebook'/><span> patitas_oficial</span></Link>
                <Link className="d-block d-md-inline me-0 me-md-4" to="#"><img src='/img/social_media/twitter.png' alt='twitter'/><span> @patitasOK</span></Link>
                <Link className="d-block d-md-inline me-0 me-md-4" to="#"><img src='/img/social_media/youtube.png' alt='youtube'/><span> patitas_official</span></Link>
                <Link className="d-block d-md-inline" to="#"><img src='/img/social_media/instagram.png' alt='instagram'/><span> @patitas</span></Link>
            </div>
            <p>© 2022 Patitas</p>
        </footer>
    );
}

export default Footer;