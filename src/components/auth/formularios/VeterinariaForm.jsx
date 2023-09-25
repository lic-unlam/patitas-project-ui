import React, { useState, useEffect } from "react";
import { BarrioSelector } from "./selectores/BarrioSelector";
import { DiasDeAtencionSelector } from "./selectores/DiasDeAtencionSelector";
import { HorarioSelector } from "./selectores/HorarioSelector";

export const VeterinariaForm = (props) => {
    const [listaDeHoras, setListaDeHoras] = useState([]);

    useEffect(() => {
        setListaDeHoras(props.getListaDeHoras());
    }, []);

    return (
        <>
            <div className="form-floating py-2">
                <input type="text" id="nombre_usuario" name="nombreUsuario" className="form-control" placeholder="Nombre de usuario"/>
                <label htmlFor="nombre_usuario">Nombre de usuario</label>
            </div>
            <div className="form-floating py-2">
                <input type="text" id="email" name="email" className="form-control" placeholder="Correo electrónico"/>
                <label htmlFor="email">Correo electrónico</label>
            </div>
            <div className="form-floating py-2">
                <input id="password" name="password" type="text" className="form-control" placeholder="Contraseña"/>
                <label htmlFor="password">Contraseña</label>
            </div>
            <div className="form-floating py-2">
                <input id="repetir_password" name="repetirPassword" type="text" className="form-control" placeholder="Repetir contraseña"/>
                <label htmlFor="repetir_password">Repetir contraseña</label>
            </div>
            <div className="form-floating py-2">
                <input type="text" id="nombre_veterinaria" className="form-control" placeholder="Nombre de la veterinaria"/>
                <label htmlFor="nombre_veterinaria">Nombre de la veterinaria</label>
            </div>
            <div className="form-floating py-2">
                <input type="text" id="razon_social" className="form-control" placeholder="Razón social"/>
                <label htmlFor="razon_social">Razón social</label>
            </div>
            <div className="form-floating py-2">
                <input type="text" id="especialidades" className="form-control" placeholder="Especialidades"/>
                <label htmlFor="especialidades">Especialidades</label>
                <span className="text-muted">Escriba los servicios que brinda (separados por coma).</span>
            </div>
            <div className="form-floating py-2">
                <input type="date" id="fecha_fundacion" className="form-control" placeholder="Fecha de fundación"/>
                <label htmlFor="fecha_fundacion">Fecha de fundación</label>
            </div>
            <div className="form-floating py-2">
                <input type="text" id="telefono" className="form-control" placeholder="Teléfono"/>
                <label htmlFor="telefono">Teléfono</label>
            </div>
            <div className="form-floating py-2">
                <input type="text" id="telefono_alternativo" className="form-control" placeholder="Teléfono alternativo (opcional)"/>
                <label htmlFor="telefono_alternativo">Teléfono alternativo (opcional)</label>
            </div>
            <div className="py-2">
                <div className="row">
                    <div className="col-6">
                        <div className="form-floating">
                            <input type="text" id="calle" className="form-control" placeholder="Calle"/>
                            <label htmlFor="calle">Calle</label>
                        </div>
                    </div>
                    <div className="col-4 col-xl-3">
                        <div className="form-floating">
                            <input type="text" id="altura" className="form-control" placeholder="Altura"/>
                            <label htmlFor="altura">Altura</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-2">
                <DiasDeAtencionSelector />
            </div>
            <div className="py-2">
                <div className="form-group row py-2 role-selector-wrapper">
                    <label className="col-auto">Barrio:</label>
                    <div className="col-4">
                        <BarrioSelector barrios={props.barriosData} />
                    </div>
                </div>
            </div>
            <div className="py-2">
                <div className="form-group row py-2">
                    <label className="col-auto">Hora de apertura:</label>
                    <div className="col-12 col-md-6 col-xl-4">
                        <HorarioSelector id="hora_apertura_selector" listaDeHoras={listaDeHoras} />
                    </div>
                </div>
            </div>
            <div className="py-2">
                <div className="form-group row py-2">
                    <label className="col-auto">Hora de cierre:</label>
                    <div className="col-12 col-md-6 col-xl-4">
                        <HorarioSelector id="hora_cierre_selector" listaDeHoras={listaDeHoras} />
                    </div>
                </div>
            </div>
        </>
    );
}