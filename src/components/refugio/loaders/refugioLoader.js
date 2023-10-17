import { secciones } from "src/utils/constants/refugio";

export const refugioLoader = async ({ params }) => {
    try {
        let requestOptions = { method: "GET" };
        let token = localStorage.getItem("userData");

        if(token && params.seccion === secciones.comentarios) {
            token = JSON.parse(token);

            requestOptions = {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token.accessToken}`
                }
            }
        }

        const response = await fetch(`https://localhost:7277/api/refugios/${params.id}/${params.seccion || "animales"}`, requestOptions);
    
        if(!response.ok)
            throw new Error("Hubo un problema con la solicitud. Código: " + response.status);

        const data = await response.json();
        return data;
    }
    catch(error) {
        return {
            error: error.message
        }
    }
}