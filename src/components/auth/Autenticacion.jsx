import Login from "./Login";
import Registro from "./Registro";

const Autenticacion = () => {
    return (
        <div id="authentication_wrapper">
            <div className="row">
                <div className="col-12 col-md-6 order-2 order-md-1 pt-4 pt-md-0">
                    <Registro />
                </div>
                <div className="col-12 col-md-6 order-1 order-md-2">
                    <Login />
                    <img className="img-fluid dog-mobile" width={150} src="/img/perro_escribiendo.png" alt="perro_escribiendo"/>
                    <div className="text-center"><img className="dog-desktop" width={150} src="/img/perro_escribiendo.png" alt="perro_escribiendo"/></div>
                </div>
            </div>
        </div>
    )
}

export default Autenticacion;