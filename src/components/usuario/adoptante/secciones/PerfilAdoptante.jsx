import { useEffect, useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "src/components/layout/LayoutPublic";
import Loading from "src/components/layout/Loading";

export const PerfilAdoptante = (props) => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const [ datosPerfil, setDatosPerfil ] = useState();
    const datoNoEspecificado = "No especificado";

    const loadPerfil = useCallback(async () => {
        try {
            const response = await fetch("https://localhost:7277/api/adoptante/perfil", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${user.accessToken}`
                }
            });

            if(!response.ok) {
                if(response.status === 403)
                    navigate("/error/forbidden");

                if(response.status === 401)
                    navigate("/error/unauthorized");
                
                throw new Error("Hubo un problema con la solicitud. Código de error " + response.status);
            }
            
            const data = await response.json();
            setDatosPerfil(data);
        }
        catch(error) {
            console.log(error.message);
        }
    }, [user]);

    useEffect(() => {
        document.title = props.title.concat(' - ', window.$title);

        if(user)
            loadPerfil();
    }, [loadPerfil]);

    if(!datosPerfil)
        return <Loading />

    return (
        <div id="perfil_wrapper">
            <div className="card">
                <div className="card-header text-center bg-white">
                    <span className="title">Datos personales</span>
                </div>
                <div className="row g-0">
                    <div className="col-6 ps-3 pt-2"><img src="/img/usuarios/hueso.png" width={48} alt="hueso" /></div>
                    <div className="col-6 pe-3 pt-2 text-end"><img src="/img/usuarios/hueso.png" width={48} alt="hueso" /></div>
                </div>
                <div className="card-body datos-de-usuario">
                    <div className="row justify-content-center">
                        <div className="col-auto">
                            <img src={datosPerfil.fotoDePerfil ? datosPerfil.fotoDePerfil : window.$defaultProfilePicture} width={100} alt="foto_perfil" />
                        </div>
                        <div className="col-auto">
                            <span>{datosPerfil.nombreUsuario}</span>
                            <p className="mb-1">{datosPerfil.email}</p>
                            <p className="text-muted fst-italic"><small>Registrado el {datosPerfil.fechaCreacion}</small></p>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <button type="button" className="btn btn-sm btn-outline-dark me-2">Cambiar imágen</button>
                        <button type="button" className="btn btn-sm btn-outline-dark">Cambiar contraseña</button>
                    </div>
                    <div className="row py-4 justify-content-center">
                        <div className="col-12 col-md-6 text-center">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <span>Nombre:</span>
                                    <p>{datosPerfil.nombre}</p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <span>Apellido:</span>
                                    <p>{datosPerfil.apellido}</p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <span>Barrio:</span>
                                    <p>{datosPerfil.nombreBarrio}</p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <span>Dirección:</span>
                                    <p>{datosPerfil.direccion ? datosPerfil.direccion : datoNoEspecificado}</p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <span>Fecha de nacimiento:</span>
                                    <p>{datosPerfil.fechaNacimiento ? datosPerfil.fechaNacimiento : datoNoEspecificado}</p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <span>Documento:</span>
                                    <p>{datosPerfil.dni ? datosPerfil.dni : datoNoEspecificado}</p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <span>Teléfono:</span>
                                    <p>{datosPerfil.telefono ? datosPerfil.telefono : datoNoEspecificado}</p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <span>Adopciones:</span>
                                    <p title={`Exitosas: ${datosPerfil.cantidadAdopcionesExitosas} - Interrumpidas: ${datosPerfil.cantidadAdopcionesFalladas}`}><i className="bi bi-check-circle-fill text-success"></i> {datosPerfil.cantidadAdopcionesExitosas} <i className="bi bi-x-circle-fill text-danger ps-2"></i> {datosPerfil.cantidadAdopcionesFalladas}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="button" className="btn btn-primary">Modificar datos de perfil</button>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-6 ps-3 pb-2"><img src="/img/usuarios/hueso.png" width={48} alt="hueso" /></div>
                    <div className="col-6 pe-3 pb-2 text-end"><img src="/img/usuarios/hueso.png" width={48} alt="hueso" /></div>
                </div>
            </div>
        </div>
    );
}