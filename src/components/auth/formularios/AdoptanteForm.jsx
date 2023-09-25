import { BarrioSelector } from "./selectores/BarrioSelector";

export const AdoptanteForm = (props) => {
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
                <input type="text" id="password" name="password" className="form-control" placeholder="Contraseña"/>
                <label htmlFor="password">Contraseña</label>
            </div>
            <div className="form-floating py-2">
                <input type="text" id="repetir_password" name="repetirPassword" className="form-control" placeholder="Repetir contraseña"/>
                <label htmlFor="repetir_password">Repetir contraseña</label>
            </div>
            <div className="py-2 ps-1">
                <div className="form-group row py-2">
                    <label className="col-auto">Barrio:</label>
                    <div className="col-12 col-md-6 col-xl-4">
                        <BarrioSelector barrios={props.barriosData} />
                    </div>
                </div>
            </div>
        </>
    );
}