import React, { useState, useEffect } from "react";
import { BarrioSelector } from "./BarrioSelector";
import { HorarioSelector } from "./HorarioSelector";

export const VeterinariaForm = (props) => {
    const [listaDeHoras, setListaDeHoras] = useState([]);

    useEffect(() => {
        setListaDeHoras(props.getListaDeHoras());
    }, []);

    return (
        <>
            <div className="py-2">
                <input type="text" id="nombre_usuario" name="nombreUsuario" className="form-control" placeholder="Nombre de usuario"/>
            </div>
            <div className="py-2">
                <input type="text" id="email" name="email" className="form-control" placeholder="Correo electrónico"/>
            </div>
            <div className="py-2">
                <input type="text" className="form-control" placeholder="Nombre de la veterinaria"/>
            </div>
            <div className="py-2">
                <input type="text" className="form-control" placeholder="Razón social"/>
            </div>
            <div className="py-2">
                <input type="text" className="form-control" placeholder="Especialidades"/>
                <span className="text-muted">Escriba los servicios que brinda (separados por coma).</span>
            </div>
            <div className="py-2">
                <input type="text" className="form-control" placeholder="Fecha de fundación"/>
            </div>
            <div className="py-2">
                <input type="text" className="form-control" placeholder="Teléfono"/>
            </div>
            <div className="py-2">
                <input type="text" className="form-control" placeholder="Teléfono alternativo (opcional)"/>
            </div>
            <div className="py-2">
                <div className="row">
                    <div className="col-6">
                        <input type="text" className="form-control" placeholder="Calle"/>
                    </div>
                    <div className="col-2">
                        <input type="text" className="form-control" placeholder="Altura"/>
                    </div>
                </div>
            </div>
            <div className="py-2 ps-1">
                <div className="form-group row py-2 role-selector-wrapper">
                    <label className="col-auto">Barrio:</label>
                    <div className="col-4">
                        <BarrioSelector barrios={props.barriosData} />
                    </div>
                </div>
            </div>
            <div className="py-2 ps-1">
                <div className="form-group row py-2 role-selector-wrapper">
                    <label className="col-auto">Hora de apertura:</label>
                    <div className="col-4">
                        <HorarioSelector id="hora_apertura_selector" listaDeHoras={listaDeHoras} />
                    </div>
                </div>
            </div>
            <div className="py-2 ps-1">
                <div className="form-group row py-2 role-selector-wrapper">
                    <label className="col-auto">Hora de cierre:</label>
                    <div className="col-4">
                        <HorarioSelector id="hora_cierre_selector" listaDeHoras={listaDeHoras} />
                    </div>
                </div>
            </div>
            <div className="py-2">
                <input id="password" name="password" type="text" className="form-control" placeholder="Contraseña"/>
            </div>
            <div className="py-2">
                <input id="repetir_password" name="repetirPassword" type="text" className="form-control" placeholder="Repetir contraseña"/>
            </div>
        </>
    );
}