function Caracteristicas() {
    return (
        <div id="features">
            <img className="img-fluid" width={400} src="/img/features/perro_leyendo.jpg" alt="perro_leyendo" />
            <h1 className="display-5">Echa un vistazo a algunas de las características de la plataforma</h1>
            <div className="row">
                <div className="col-12 col-md-4">
                    <img className="img-fluid" width={150} src="/img/features/galeria.png" alt="galeria_icono"/>
                    <h3>Galería de animales</h3>
                    <p className="text-muted">Podrás ver fotos de todos los animales que se encuentran en los refugios de forma online, sin moverte de tu casa.</p>
                </div>
                <div className="col-12 col-md-4">
                    <img className="img-fluid" width={150} src="/img/features/turnos.png" alt="turnos_icono"/>
                    <h3>Reserva de turnos</h3>
		            <p className="text-muted">Para que el proceso de adopción sea lo más ordenado posible, nuestros refugios y veterinarias asociadas gestionarán turnos para tus visitas y seguir el plan de vacunación.</p>
                </div>
                <div className="col-12 col-md-4">
                    <img className="img-fluid" width={150} src="/img/features/encontrar_animales.png" alt="perro_en_la_calle" />
                    <h3>Dales una oportunidad</h3>
		            <p className="text-muted">Somos amantes de los animales y, como tales, queremos alentar a las personas a que le brinden un hogar a los animales rescatados de la calle.</p>
                </div>
                <div className="col-12 col-md-4">
                    <img className="img-fluid" width={150} src="/img/features/descuentos.png" alt="descuento_icono"/>
                    <h3>Descuentos</h3>
		            <p className="text-muted">Podrás acceder a descuentos exclusivos en artículos, vacunaciones y medicamentos para animales.</p>
                </div>
                <div className="col-12 col-md-4">
                    <img width={150} height={150} src="/img/features/facil_de_usar.jpg" alt="facil_de_usar"/>
                    <h3>Fácil de usar</h3>
                    <p className="text-muted">Nuestra plataforma fue desarrollada para que sea intuitiva y óptima para el uso por parte de cualquier usuario.</p>
                </div>
                <div className="col-12 col-md-4">
                    <img className="img-fluid" width={150} src="/img/features/gratuito.png" alt="perro_libre" />
                    <h3>Gratuito</h3>
		            <p className="text-muted">Queremos que los animales puedan conseguir un hogar, una mejor calidad de vida y concientizar en la adopción responsable, por eso, en Patitas te ayudaremos en el proceso de adopción <u>sin costo alguno.</u></p>
                </div>
            </div>
        </div>
    );
}

export default Caracteristicas;