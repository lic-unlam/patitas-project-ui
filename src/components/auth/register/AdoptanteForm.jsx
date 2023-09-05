import { BarrioSelector } from "./BarrioSelector";

export const AdoptanteForm = (props) => {
    return (
        <>
            <div className="py-2">
                <input type="text" id="nombre_usuario" name="nombreUsuario" className="form-control" placeholder="Nombre de usuario"/>
            </div>
            <div className="py-2">
                <input type="text" id="email" name="email" className="form-control" placeholder="Correo electrónico"/>
            </div>
            <div className="py-2">
                <input type="text" id="password" name="password" className="form-control" placeholder="Contraseña"/>
            </div>
            <div className="py-2">
                <input type="text" id="repetir_password" name="repetirPassword" className="form-control" placeholder="Repetir contraseña"/>
            </div>
            <div className="py-2 ps-1">
                <div className="form-group row py-2 role-selector-wrapper">
                    <label className="col-auto">Barrio:</label>
                    <div className="col-4">
                        <BarrioSelector barrios={props.barriosData} />
                    </div>
                </div>
            </div>
        </>
    );
}