import { Link } from 'react-router-dom';

export const Categories = () => {
    return (
        <div className="categories">
            <div className="row">
                <div className="col-8">
                    <span>Categorías</span>
                </div>
                <div className="col-2 text-center">
                    <span>Fecha</span>
                </div>
                <div className="col-2 text-center">
                    <span>Temas creados</span>
                </div>
            </div>
            <hr/>

            <div className="row">
                <div className="col-8">
                    <Link to="/forum/missing" className="section-title">Mascotas perdidas</Link>
                    <p className="text-muted">Espacio dedicado a casos donde las mascotas se perdieron de sus casas</p>
                </div>
                <div className="col-2 text-center">
                    <span>asdasd</span>
                </div>
                <div className="col-2 text-center">
                    <span>150</span>
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                    <Link to="/forum/abandoned" className="section-title">Animales callejeros</Link>
                    <p className="text-muted">Temas sobre animales que aún no tienen un hogar</p>
                </div>
                <div className="col-2 text-center">
                    <span>asdasd</span>
                </div>
                <div className="col-2 text-center">
                    <span>150</span>
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                    <Link to="/forum/news" className="section-title">Noticias</Link>
                    <p className="text-muted">Publicaciones acerca de novedades sobre refugios, adopciones exitosas, avisos de descuentos en veterinarias y más</p>
                </div>
                <div className="col-2 text-center">
                    <span>asdasd</span>
                </div>
                <div className="col-2 text-center">
                    <span>150</span>
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                    <Link to="/forum/support" className="section-title">Ayuda y asistencia</Link>
                    <p className="text-muted">Espacio para consultas como sobre el uso de la plataforma, procesos de adopciones, reportes de problemas</p>
                </div>
                <div className="col-2 text-center">
                    <span>asdasd</span>
                </div>
                <div className="col-2 text-center">
                    <span>150</span>
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                    <Link to="/forum/suggestions" className="section-title">Sugerencias</Link>
                    <p className="text-muted">Estamos siempre atentos a los aportes de nuestros usuarios para mejorar la plataforma, sientase libre de comunicarnos en que se puede mejorar</p>
                </div>
                <div className="col-2 text-center">
                    <span>asdasd</span>
                </div>
                <div className="col-2 text-center">
                    <span>150</span>
                </div>
            </div>
        </div>
    );
}