import { Link } from "react-router-dom";

export const LatestPosts = () => {
    return (
        <div id="latest_posts_wrapper" className="card mb-4">
            <div className="card-header">
                <div className="row">
                    <div className="col-8">Últimas publicaciones</div>
                    <div className="col-2 text-center">Creado</div>
                    <div className="col-2 text-center">Respuestas</div>
                </div>
            </div>
            <div className="card-body latest-posts">
                {[...Array(5)].map((element, index) =>
                    <div className="row" key={index}>
                        <div className="col-8">
                            <Link to="/" className="d-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </Link>
                            <Link to="/forum/missing" className="text-muted">Mascotas perdidas</Link>
                        </div>
                        <div className="col-2 text-center">
                            <span><small>30/07/2023 18:40</small></span>
                        </div>
                        <div className="col-2 text-center">10</div>
                    </div>
                )}
            </div>
        </div>
    );
}