import Login from "./Login";
import Register from "./Register";

function AuthenticationForms() {
    return (
        <div id="authentication_wrapper">
            <div className="row">
                <div className="col-12 col-md-6 order-2 order-md-1 pt-4 pt-md-0">
                    <Register></Register>
                </div>
                <div className="col-12 col-md-6 order-1 order-md-2">
                    <Login></Login>
                    <img className="img-fluid dog-mobile" width={150} src="/img/perro_escribiendo.png" alt="perro_escribiendo"/>
                </div>
            </div>
            <img className="img-fluid dog-desktop" width={150} src="/img/perro_escribiendo.png" alt="perro_escribiendo"/>
        </div>
    )
}

export default AuthenticationForms;