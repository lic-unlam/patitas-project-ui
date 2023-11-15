function Testimonios() {
    return (
        <div id="testimonials">
            <i className="bi bi-megaphone"></i>
            <h1 className="display-5">Opinión de nuestros usuarios</h1>
            <div className="row">
                <div className="col-12 col-md-4">
                    <blockquote className="blockquote">
                        <p className="fs-4">"Hace unos meses estaba buscando adoptar un animal y gracias a Patitas pude conocer a Brisa, mi nueva perrita."</p>
                        <footer className="blockquote-footer fs-4">Por <cite title="Source Title">Paola Fernandez</cite></footer>
                    </blockquote>
                </div>
                <div className="col-12 col-md-4">
                    <blockquote className="blockquote">
                        <p className="fs-4">Siempre quise tener un gatito pero no tenía el tiempo suficiente para movilizarme refugio por refugio, gracias a Patitas pude encontrar a mi nueva mascota rápidamente.</p>
                        <footer className="blockquote-footer fs-4">Por <cite title="Source Title">Julián Alvarez</cite></footer>
                    </blockquote>
                </div>
                <div className="col-12 col-md-4">
                    <blockquote className="blockquote">
                        <p className="fs-4">Los pasos para adoptar fueron muy rápidos y sencillos, pude adoptar a mi mascota con sus vacunas.</p>
                        <footer className="blockquote-footer fs-4">Por <cite title="Source Title">Esteban Ramirez</cite></footer>
                    </blockquote>
                </div>
            </div>
        </div>
    );
}

export default Testimonios;