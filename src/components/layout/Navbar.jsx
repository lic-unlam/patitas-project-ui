import React from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {Search} from './Search';

function Navbar(props) {
    const navigate = useNavigate();
    
    let userDataObject;
    let userDataString = localStorage.getItem('userData');
    
    if(userDataString) {
        userDataObject = JSON.parse(userDataString);
    }

    const logout = (event) => {
        event.preventDefault();
        localStorage.removeItem('userData');
        
        navigate('/', {
            replace: true
        });
    }

    return (
        <nav className="navbar bg-white fixed-top navbar-expand-md">
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
                                <Link className="nav-link" to="/shelter">Explorar refugios</Link>
                            </li>
                        </ul>
                        {/*<form id="search_wrapper" className="d-flex ms-auto">
                            <Search/>
                        </form>*/}
                        <div className="navbar-nav pe-4 ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/refugios/buscador"><i className="bi bi-search"></i> Buscar refugios</Link>
                            </li>
                        </div>
                        {!userDataString ?
                            <div className="nav-item">
                            <ul className="navbar-nav auth-wrapper">
                                <li>
                                    <Link id="signin" to="/auth/signin" className="btn btn-primary">Acceder</Link>
                                </li>
                            </ul>
                            </div> :
                            <ul className="navbar-nav user-actions">
                                <li className="nav-item">
                                    <Link className="nav-link nav-text-username" to="/adoptantes/1/datos-personales" title={userDataObject.email}>{userDataObject.username}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/user/notifications" title="Notificaciones"><i className="bi bi-bell"></i></Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <button className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img className="img-fluid nav-profile-picture" width={24} src={userDataObject.profilePicture} alt="profile_picture"/>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <Link className="dropdown-item" to="/adoptantes/1/datos-personales">Datos personales</Link>
                                        </li>
                                        <div className="dropdown-divider"></div>
                                        <li>
                                            <Link className="dropdown-item" to="/adoptantes/1/formulario-pre-adopcion">Formulario pre-adopción</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/adoptantes/1/mis-adopciones">Mis adopciones</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/adoptantes/1/mis-turnos">Mis turnos</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/adoptantes/1/seguimientos">Seguimientos</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/user/logout" onClick={logout} title="Salir"><i className="bi bi-box-arrow-in-right"></i></Link>
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