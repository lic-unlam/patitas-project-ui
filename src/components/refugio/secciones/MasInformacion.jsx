import React, { useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom";

const MasInformacion = (props) => {
    const params = useParams();
    const { refugio } = useOutletContext();
    const shelterInfo = props.shelterDb.find(x => x.id === '3');

    useEffect(() => {
        document.title = props.title.concat(' - ', window.$title);
    }, []);
    
    return (
        <div id="mas_informacion_wrapper" className="row">
            <div className="col-12 col-md-6">
                <img className="img-fluid pb-4 pb-md-0" width={600} src={shelterInfo.map} alt="shelter_map"/>
            </div>
            <div className="col-12 col-md-6">
                <h5>Razón social:</h5>
                <p>{refugio.infoCompleta.razonSocial}</p>
                <h5>Responsable a cargo:</h5>
                <p>{refugio.infoCompleta.nombreResponsable} {refugio.infoCompleta.apellidoResponsable}</p>
                <h5>Dirección:</h5>
                <p>{refugio.infoBasica.direccion}, {refugio.infoBasica.barrio}</p>
                <h5>Teléfono:</h5>
                <p>{refugio.infoCompleta.telefono}</p>
                <h5>Correo electrónico:</h5>
                <p>{refugio.infoCompleta.email}</p>
                <h5>Horario:</h5>
                <p>{refugio.infoCompleta.diasDeAtencion} de {refugio.infoCompleta.horarioApertura} a {refugio.infoCompleta.horarioCierre} hs.</p>
                {refugio.infoCompleta.descripcion && 
                <>
                    <h5>Descripción adicional:</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </>}
            </div>
        </div>
    );
}

export default MasInformacion;