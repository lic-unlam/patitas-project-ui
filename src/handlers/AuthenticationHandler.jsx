import { useContext } from "react";
import { UserContext } from "src/components/layout/LayoutPublic";
import { CustomAlertContext } from "src/components/layout/LayoutPublic";

export const a = {
    b: () => { console.log("hola"); }
}

export const Register = async (values, formikBag, endpointUrl) => {
    console.log(formikBag);
    let { setUser } = useContext(UserContext);
    let { setCustomAlert } = useContext(CustomAlertContext);

    try {
        throw new Error("blabala");
        const response = await fetch(endpointUrl, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(values)
        });

        if(!response.ok)
            throw new Error("Hubo un problema con la solicitud. Código: " + response.status);

        const data = await response.json();

        setCustomAlert({
            mostrar: true,
            tipo: "success",
            mensaje: <span>{data.resultado} <strong>{data.bienvenida}</strong></span>
        }, navigate("/refugios", {
            replace: true
        }));

        setUser(data.loginResponse, localStorage.setItem('userData', JSON.stringify(data.loginResponse)));
    }
    catch(error) {
        console.log("asdsd");
        setCustomAlert({
            mostrar: true,
            tipo: "danger",
            mensaje: <span>{error.message}</span>
        });
    }
    finally {
        setSubmitting(false);
    }
}

export const AuthenticationHandler = () => {
    Register: Register;
}