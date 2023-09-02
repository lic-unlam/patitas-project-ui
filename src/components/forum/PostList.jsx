import { Link } from "react-router-dom";

const PostList = () => {
    return (
        <div className="post-list-wrapper">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/forum"><i className="bi bi-house-door-fill"></i> Foros</Link></li>
                    <li className="breadcrumb-item"><Link to="/forum/missing">Mascotas perdidas</Link></li>
                </ol>
            </nav>

            <div className="pb-4">
                <h2 className="display-5"><b>Mascotas perdidas</b></h2>
                <h5 className="text-muted">Espacio dedicado a casos donde las mascotas se perdieron de sus casas</h5>
                <p className="align-middle">150 temas creados</p>
                <button className="btn btn-primary">Crear tema</button> 
            </div>

            <div className="row">
                <div className="col-6">
                    <span>Temas</span>
                </div>
                <div className="col-2 text-center">
                    <span>Respuestas</span>
                </div>
                <div className="col-2 text-center">
                    <span>Vistas</span>
                </div>
                <div className="col-2 text-center">
                    <span>Creado</span>
                </div>
            </div>
            <hr className="mt-1"/>

            {[...Array(10)].map((element, index) =>
                <div className="row" key={index}>
                    <div className="col-6">
                        <Link to={`/forum/missing/${index+1}`}>Se me perdió mi perro ¡por favor ayuda!</Link>
                        <p className="text-muted">por Cosme_Fulanito</p>
                    </div>
                    <div className="col-2 text-center">
                        <span>10</span>
                    </div>
                    <div className="col-2 text-center">
                        <span>50</span>
                    </div>
                    <div className="col-2 text-center">
                        <span>31/07/2023 20:36</span>
                    </div>
                </div>
            )}

            <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
                </li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
                </li>
            </ul>
            </nav>
        </div>
    );
}

export default PostList;