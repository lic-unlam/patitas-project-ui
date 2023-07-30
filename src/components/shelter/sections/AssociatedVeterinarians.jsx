function AssociatedVeterinarians() {
    function veterinarians_loop() {
        let thumbs = [];

		for(let i = 0;i < 2;i++) {
			thumbs.push(
                <div className="row" key={i}>
                    <div className="col-auto">
                        <img className="img-fluid" width={400} src="/img/shelter/veterinary.jpg" alt="veterinary"/>
                    </div>
                    <div className="col-6">
                        <h4>Dirección:</h4>
                        <p>Av. Sta. Fe 3253, Palermo</p>
                        <h4>Teléfono:</h4>
                        <p>(011) 5555-5555</p>
                        <h4>Horario:</h4>
                        <p>Lunes a viernes 10 a 20 hs.</p>
                        <h4>Sitio web:</h4>
                        <p>https://www.instagram.com/veterinaria</p>
                        <h4>Descripción:</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            );
		}

		return thumbs;
    }

    return (
        <>{veterinarians_loop()}</>
    );
}

export default AssociatedVeterinarians;