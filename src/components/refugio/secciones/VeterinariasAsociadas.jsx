import React, { useEffect } from "react";

const VeterinariasAsociadas = (props) => {
    useEffect(() => {
        document.title = props.title.concat(' - ', window.$title);
    }, []);
    
    function veterinarians_loop() {
        let thumbs = [];

		for(let i = 0;i < 2;i++) {
			thumbs.push(
                <div className="row py-4" key={i}>
                    <div className="col-12 col-md-6">
                        <p className="nombre-veterinaria">Veterinaria "Cuidado Animal"</p>
                        <img className="img-fluid pb-4 pb-md-0" src="/img/shelter/veterinary.jpg" alt="veterinary"/>
                    </div>
                    <div className="col-12 col-md-6">
                        <h5>Razón social:</h5>
                        <p>Cuidado Animal S.A.</p>
                        <h5>Dirección:</h5>
                        <p>Av. Sta. Fe 3253, Palermo</p>
                        <h5>Teléfono:</h5>
                        <p>(011) 5555-5555</p>
                        <h5>Especialidades:</h5>
                        <p>Vacunación, Cirugía, Ecografía, Peluquería</p>
                        <h5>Correo electrónico:</h5>
                        <p>refugio_sanpedro@gmail.com</p>
                        <h5>Horario de atención:</h5>
                        <p>Lunes a viernes 10 a 20 hs.</p>
                        <h5>Sitio web:</h5>
                        <p>https://www.instagram.com/veterinaria</p>
                        <h5>Fecha de fundación:</h5>
                        <p>25/04/1998</p>
                        <h5>Descripción:</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            );
		}

		return thumbs;
    }

    return (
        <div id="veterinarias_asociadas_wrapper">{veterinarians_loop()}</div>
    );
}

export default VeterinariasAsociadas;