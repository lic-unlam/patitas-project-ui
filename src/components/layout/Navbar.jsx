import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { UserContext } from './LayoutPublic';
import { AdministradorMenu, AdoptanteMenu, RefugioMenu, VeterinariaMenu } from './paneles_usuario';
import { roles } from 'src/utils/constants/user';

function Navbar(props) {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    let userDataObject;
    let userDataString = localStorage.getItem('userData');
    
    useEffect(() => {
        if(userDataString) {
            userDataObject = JSON.parse(userDataString);
            setUser(userDataObject);
        }
    }, [setUser]);

    const mostrarAccesos = (rol) => {
        switch(rol) {
            case roles.administrador:
                return <AdministradorMenu />
            case roles.adoptante:
                return <AdoptanteMenu />
            case roles.refugio:
                return <RefugioMenu />
            case roles.veterinaria:
                return <VeterinariaMenu />
            default:
                break;
        }
    }

    const logout = (event) => {
        event.preventDefault();
        setUser(null, localStorage.removeItem('userData'));
        
        navigate('/', {
            replace: true
        });
    }

    return (
        <nav className="navbar bg-white py-1 fixed-top navbar-expand-md">
            <div className="container">
                <Link className="navbar-brand" to="/"><img className='img-fluid patitas-logo' src='/img/patitas_logo.png' alt="patitas_logo"/>
                    <span> Patitas</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <ul className="navbar-nav auth-wrapper">
                            <li>
                                <Link id="signin" to="/auth/signin" className="btn btn-primary">Acceder</Link>
                            </li>
                        </ul>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <button className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Foros
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/forum/missing">Mascotas perdidas</Link></li>
                                    <li><Link className="dropdown-item" to="/foros/animales-callejeros">Animales callejeros</Link></li>
                                    <div className="dropdown-divider"></div>
                                    <li><Link className="dropdown-item" to="/foros/novedades">Noticias</Link></li>
                                    <li><Link className="dropdown-item" to="/foros/promociones">Promociones</Link></li>
                                    <div className="dropdown-divider"></div>
                                    <li><Link className="dropdown-item" to="/foros/soporte">Ayuda y asistencia</Link></li>
                                    <li><Link className="dropdown-item" to="/foros/sugerencias">Sugerencias</Link></li>
                                    <div className="dropdown-divider"></div>
                                    <li><Link className="dropdown-item" to="/forum">Ver todos</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/refugios">Explorar refugios</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/refugios/buscador"><i className="bi bi-search"></i> Buscar refugios</Link>
                            </li>
                        </ul>
                        {!user ?
                            <ul className="navbar-nav auth-wrapper">
                                <li className="nav-item">
                                    <Link id="signin" to="/auth/signin" className="btn btn-primary">Acceder</Link>
                                </li>
                            </ul> :
                            <ul className="navbar-nav user-actions">
                                <li className="nav-item">
                                    <span className="nav-link nav-text-username" title={user.email}>{user.nombreDeUsuario}</span>
                                </li>
                                <li className="nav-item dropdown">
                                    <button className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" title="Panel de usuario">
                                    <img className="img-fluid nav-profile-picture" width={24} src={user.fotoDePerfil || window.$defaultProfilePicture} alt="foto_de_perfil" />
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        {mostrarAccesos(user.rol)}
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link icon" to="/user/logout" onClick={logout} title="Salir"><i className="bi bi-box-arrow-in-right"></i></Link>
                                </li>
                            </ul>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;