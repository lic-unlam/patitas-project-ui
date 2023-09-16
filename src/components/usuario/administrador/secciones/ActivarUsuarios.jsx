import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export const ActivarUsuarios = (props) => {
    const [ contenidoAlert, setContenidoAlert ] = useOutletContext();

    useEffect(() => {
        document.title = window.$title.concat(' - ', props.title);
    }, []);

    const realizarActivacion = (tipoDeCuenta) => {
        setContenidoAlert({
            mostrar: true,
            tipo: "success",
            mensaje: tipoDeCuenta === "refugio" ? <span>El refugio <strong>"San Pedro"</strong> con ID <strong>"1"</strong> se ha activado exitosamente.</span> : <span>La veterinaria <strong>"El arca de Noé"</strong> con ID <strong>"4"</strong> se ha activado exitosamente.</span>
        });
    }

    return (
        <div className="row">
            <div className="col-12 col-md-6">
                <h3 className="text-center">Refugios</h3>
                <div className="accordion accordion-flush" id="activar_cuenta_refugio_accordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#datos_refugio_1_collapse" aria-expanded="false" aria-controls="datos_refugio_1_collapse">
                                Id: 1 - Nombre: San Pedro - Email: refugio_sanpedro@gmail.com
                            </button>
                        </h2>
                        <div id="datos_refugio_1_collapse" className="accordion-collapse collapse" data-bs-parent="#activar_cuenta_refugio_accordion">
                            <div className="accordion-body datos-de-usuario">
                                <div className="row">
                                    <div className="col-auto">
                                        <img src="/img/default_profile_picture.png" alt="foto_perfil" />
                                        <p className="text-center fw-bold">Id: 1</p>
                                    </div>
                                    <div className="col-9">
                                        <span>san.pedro</span>
                                        <p>refugio_sanpedro@gmail.com</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <span>Nombre:</span>
                                        <p>San Pedro</p>
                                    </div>
                                    <div className="col-6">
                                        <span>Razón social:</span>
                                        <p>Refugio San Pedro S.A.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <span>Responsable a cargo:</span>
                                        <p>Juan Topo</p>
                                    </div>
                                    <div className="col-6">
                                        <span>Dirección:</span>
                                        <p>Av. del Libertador 4101, Palermo</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <span>Días y horario de atención:</span>
                                        <p>Lunes a viernes de 09 a 12 hs.</p>
                                    </div>
                                    <div className="col-6">
                                        <span>Teléfono:</span>
                                        <p>5555-5555</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-6 order-2 order-md-1">
                                        <button className="btn btn-primary" onClick={() => realizarActivacion("refugio")}>Activar cuenta</button>
                                    </div>
                                    <div className="col-12 col-md-6 order-1 order-md-2">
                                        <span>Fecha de registro:</span>
                                        <p>10/09/2023 20:30</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6">
                <h3 className="text-center">Veterinarias</h3>
                <div className="accordion accordion-flush" id="activar_cuenta_veterinaria_accordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#datos_veterinaria_1_collapse" aria-expanded="false" aria-controls="datos_veterinaria_1_collapse">
                                Id: 4 - Nombre: El arca de Noé - Email: arca_de_noe@outlook.com
                            </button>
                        </h2>
                        <div id="datos_veterinaria_1_collapse" className="accordion-collapse collapse" data-bs-parent="#activar_cuenta_veterinaria_accordion">
                            <div className="accordion-body datos-de-usuario">
                                <div className="row">
                                    <div className="col-auto">
                                        <img src="/img/default_profile_picture.png" alt="foto_perfil" />
                                        <p className="text-center fw-bold">Id: 4</p>
                                    </div>
                                    <div className="col-9">
                                        <span>arca_de_noe</span>
                                        <p>arca_de_noe@outlook.com</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <span>Nombre:</span>
                                        <p>El arca de Noé</p>
                                    </div>
                                    <div className="col-6">
                                        <span>Razón social:</span>
                                        <p>El arca de Noé S.A.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <span>Especialidades:</span>
                                        <p>Vacunación, Cirugía, Ecografía, Peluquería</p>
                                    </div>
                                    <div className="col-6">
                                        <span>Dirección:</span>
                                        <p>Av. del Libertador 4101, Palermo</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <span>Días y horario de atención:</span>
                                        <p>Lunes a viernes de 09 a 12 hs.</p>
                                    </div>
                                    <div className="col-6">
                                        <span>Teléfono:</span>
                                        <p>5555-5555</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <span>Fecha de fundación:</span>
                                        <p>10/09/2023 20:30</p>
                                    </div>
                                    <div className="col-6">
                                        <span>Fecha de registro:</span>
                                        <p>10/09/2023 20:30</p>
                                    </div>
                                </div>
                                <button className="btn btn-primary" onClick={() => realizarActivacion("veterinaria")}>Activar cuenta</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}