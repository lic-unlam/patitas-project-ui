import React, { useEffect } from "react";

const VeterinariasAsociadas = (props) => {
    const { veterinarias } = props;

    useEffect(() => {
        document.title = props.title.concat(' - ', window.$title);
    }, []);

    return (
        <div id="veterinarias_asociadas_wrapper">
            {veterinarias.length > 0 ?
                veterinarias.map((veterinaria, index) =>
                <div className="row py-4" key={index}>
                    <p className="card bg-light nombre-veterinaria">Veterinaria "{veterinaria.nombre}"</p>
                    <div className="col-12 col-md-3">
                        <img className="img-fluid pb-4 pb-md-0" src={veterinaria.fotografia || "/img/shelter/veterinary.jpg"} alt="logo_veterinaria"/>
                    </div>
                    <div className="col-12 col-md-9">
                        <div className="row">
                            <div className="col-4">
                                <h5>Razón social:</h5>
                                <p>{veterinaria.razonSocial}</p>
                            </div>
                            <div className="col-4">
                                <h5>Dirección:</h5>
                                <p>{veterinaria.direccion}, {veterinaria.barrio}</p>
                            </div>
                            <div className="col-4">
                                <h5>Teléfono:</h5>
                                <p>{veterinaria.telefono}</p>
                                {veterinaria.telefonoAlternativo && <p>{veterinaria.telefonoAlternativo}</p>}
                            </div>
                            <div className="col-4">
                                <h5>Especialidades:</h5>
                                <p>{veterinaria.especialidades}</p>
                            </div>
                            <div className="col-4">
                                <h5>Correo electrónico:</h5>
                                <p>{veterinaria.email}</p>
                            </div>
                            <div className="col-4">
                                <h5>Horario de atención:</h5>
                                <p>{veterinaria.diasDeAtencion} de {veterinaria.horarioApertura} a {veterinaria.horarioCierre} hs.</p>
                            </div>
                            {veterinaria.sitioWeb &&
                                <div className="col-4">
                                    <h5>Sitio web:</h5>
                                    <p>{veterinaria.sitioWeb}</p>
                                </div>
                            }
                            <div className="col-4">
                                <h5>Fecha de fundación:</h5>
                                <p>{new Date(veterinaria.fechaFundacion).toLocaleDateString('es-ES')}</p>
                            </div>
                            {veterinaria.descripcion &&
                                <div className="col-4">
                                    <h5>Descripción:</h5>
                                    <p>{veterinaria.descripcion}</p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                )
                : <div className="text-center">
                    <h4>Este refugio aún no tiene veterinarias asociadas.</h4>
                </div>}
        </div>
    );
}

export default VeterinariasAsociadas;