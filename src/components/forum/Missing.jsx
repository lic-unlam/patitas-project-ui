import {Link} from 'react-router-dom';

function Missing() {
    return (
        <div className="missing-wrapper">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/forum"><i className="bi bi-house-door-fill"></i> Foros</Link></li>
                    <li className="breadcrumb-item"><Link to="/forum/missing">Mascotas extraviadas</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Se me perdió mi perro ¡por favor ayuda!</li>
                </ol>
            </nav>
            <div className="card forum-message-wrapper">
                <div className="row g-0">
                    <div className="col-md-3 user-panel">
                        <div className="card-body">
                            <img className="img-fluid" width={80} src="/img/default_profile_picture.png" alt="profile_picture"/>
                            <h5 className="card-title">cosme_fulanito</h5>
                            <small className="text-muted"><i className="bi bi-geo-alt-fill"></i> Palermo</small>
                            <div className="forum-user-contact">
                                <p><i className="bi bi-envelope-fill"></i> cosme.fulanito@gmail.com</p>
                                <p><i className="bi bi-telephone-fill"></i> (011) 5555-5555</p>
                            </div>
                            <p className="card-text pt-2">Mensajes: <Link to="/forum/search?userid=18&topic=all">2302</Link></p>
                            <span className="d-block"><small>Usuario desde</small></span>
                            <span className="d-block"><small>20/10/2022</small></span>
                        </div>
                    </div>
                    <div className="col-md-9 message-wrapper">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-6 forum-date"><p>Publicado el 2/11/2022 12:20 hs.</p></div>
                                <div className="col-6 forum-comment-number"><p className="text-end">#1</p></div>
                            </div>
                            <h4 className="card-title">Se me perdió mi perro ¡por favor ayuda!</h4>
                            <p className="card-text forum-comment">Hola gente, vivo en el barrio de Palermo y hoy a la mañana estaba lavando el auto y no me di cuenta cuando mi perro "Fatiga" se alejó de la casa. Estuve buscándolo y no lo puedo encontrar ¡estoy desesperado!<br/><br/>Fatiga es un perro muy curioso asi que puede estar en cualquier parte. Les paso una foto de mi perro, tiene un collar gris con su nombre. Si alguno lo ve por favor me avisa por acá o por teléfono. ¡Gracias!</p>
                            <img className="img-fluid forum-comment-image" src="/img/forum/fatiga_1.jpg" alt="comment_image"/>
                            <div className="row">
                                <div className="col-6">
                                    <p className="forum-date mt-3 mb-0">Editado por última vez: 2/11/2022 12:21 hs.</p>
                                </div>
                                <div className="col-6 text-end">
                                    <button type="button" className="btn btn-primary me-2"><i className="bi bi-quote"></i> Citar</button>
                                    <button type="button" className="btn btn-primary">Responder</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="card forum-message-wrapper">
                <div className="row g-0">
                    <div className="col-md-3 user-panel">
                        <div className="card-body">
                            <img className="img-fluid" width={80} src="/img/default_profile_picture.png" alt="profile_picture"/>
                            <h5 className="card-title">bob_patiño</h5>
                            <small className="text-muted"><i className="bi bi-geo-alt-fill"></i> Palermo</small>
                            <div className="forum-user-contact">
                                <p><i className="bi bi-envelope-fill"></i> bob.patiño@gmail.com</p>
                                <p><i className="bi bi-telephone-fill"></i> (011) 5555-5555</p>
                            </div>
                            <p className="card-text pt-2">Mensajes: <Link to="/forum/search?userid=18&topic=all">2302</Link></p>
                            <span className="d-block"><small>Usuario desde</small></span>
                            <span className="d-block"><small>18/10/2022</small></span>
                        </div>
                    </div>
                    <div className="col-md-9 message-wrapper">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-6 forum-date"><p>Publicado el 2/11/2022 12:25 hs.</p></div>
                                <div className="col-6 forum-comment-number"><p className="text-end">#2</p></div>
                            </div>
                            <p className="card-text forum-comment">Hola, encontré este perro cerca de mi casa y me parece que es el tuyo, tiene un collar como el que describiste.</p>
                            <img className="img-fluid forum-comment-image" src="/img/forum/fatiga_2.jpg" alt="comment_image"/>
                            <img className="img-fluid forum-comment-image" src="/img/forum/fatiga_3.jpg" alt="comment_image"/>
                            <div className="row">
                                <div className="col-6">
                                </div>
                                <div className="col-6 text-end">
                                    <button type="button" className="btn btn-primary me-2"><i className="bi bi-quote"></i> Citar</button>
                                    <button type="button" className="btn btn-primary">Responder</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card forum-message-wrapper">
                <div className="row g-0">
                    <div className="col-md-3 user-panel">
                        <div className="card-body">
                            <img className="img-fluid" width={80} src="/img/default_profile_picture.png" alt="profile_picture"/>
                            <h5 className="card-title">cosme_fulanito</h5>
                            <small className="text-muted"><i className="bi bi-geo-alt-fill"></i> Palermo</small>
                            <div className="forum-user-contact">
                                <p><i className="bi bi-envelope-fill"></i> cosme.fulanito@gmail.com</p>
                                <p><i className="bi bi-telephone-fill"></i> (011) 5555-5555</p>
                            </div>
                            <p className="card-text pt-2">Mensajes: <Link to="/forum/search?userid=18&topic=all">2302</Link></p>
                            <span className="d-block"><small>Usuario desde</small></span>
                            <span className="d-block"><small>20/10/2022</small></span>
                        </div>
                    </div>
                    <div className="col-md-9 message-wrapper">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-6 forum-date"><p>Publicado el 2/11/2022 12:28 hs.</p></div>
                                <div className="col-6 forum-comment-number"><p className="text-end">#3</p></div>
                            </div>
                            <p className="card-text forum-comment">Siiii es mi perro!! muchas gracias por encontrarlo! ahora te llamo y coordinamos.</p>
                            <div className="row">
                                <div className="col-6">
                                </div>
                                <div className="col-6 text-end">
                                    <button type="button" className="btn btn-primary me-2"><i className="bi bi-quote"></i> Citar</button>
                                    <button type="button" className="btn btn-primary">Responder</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Missing;