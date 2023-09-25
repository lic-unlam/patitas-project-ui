import Login from "./Login";
import Registro from "./Registro";

const Autenticacion = () => {
    return (
        <div id="authentication_wrapper">
            <div className="row">
                <div className="col-12 col-md-6 order-2 order-md-1 pt-4 pt-md-0">
                    <div className="text-center"><img width={78} src="/img/perro_notebook.png" alt="perro_notebook"/></div>
                    <Registro />
                </div>
                <div className="col-12 col-md-6 order-1 order-md-2">
                    <div className="text-center"><img width={150} src="/img/gato_notebook.png" alt="gato_notebook"/></div>
                    <Login />
                </div>
            </div>
        </div>
    )
}

export default Autenticacion;