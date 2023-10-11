export const refugioLoader = async ({ params }) => {
    try {
        const response = await fetch(`https://localhost:7277/api/refugios/${params.id}/${params.seccion || "animales"}`, {
            method: "GET"
        });
    
        if(!response.ok)
            throw new Error("Hubo un problema con la solicitud. Código: " + response.status);

        const data = await response.json();
        return data;
    }
    catch(error) {
        console.log(error);
    }
}