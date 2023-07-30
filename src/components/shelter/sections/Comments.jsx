import {Link} from 'react-router-dom';

function Comments() {
    function comments_loop() {
        let comments = [];
        // valoraciones: excelente, muy recomendable, buen lugar, poco recomendable, un desastre
        const estrellas = [5,4,3,2,1];
        const leyendas = ['Excelente', 'Muy recomendable', 'Buen lugar', 'Poco recomendable', 'Un desastre'];

        for(let i = 0;i < 10;i++) {
            let stars_llenas = [];
            if(i < estrellas.length) {
                for(let j = 0; j < estrellas[i]; j++) {
                    stars_llenas.push(<i className="bi bi-star-fill" key={j}></i>);
                }

                for(let k = estrellas[i]; k < 5; k++) {
                    stars_llenas.push(<i className="bi bi-star" key={k}></i>);
                }
            }
            else {
                for(let j = 0; j < estrellas[1]; j++) {
                    stars_llenas.push(<i className="bi bi-star-fill" key={j}></i>);
                }

                for(let k = estrellas[1]; k < 5; k++) {
                    stars_llenas.push(<i className="bi bi-star" key={k}></i>);
                }
            }

            comments.push(
                <div className="col-12 col-md-6" key={i}>
                    <div className="comment-wrapper">
                        <div className="row">
                            <div className="col-auto">
                                <img className="img-fluid nav-profile-picture" src="/img/default_profile_picture.png" alt="profile_picture"/>
                            </div>
                            <div className="col-auto">
                                <Link to="/user/10"><p className="comment-name">cosme_fulanito</p></Link>
                                <p className="comment-date">27/10/2022 21:47</p>
                            </div>
                            <div>
                                <h4 className="d-inline-block">{stars_llenas}</h4>
                                <span className="ps-2">{(i < leyendas.length) ? leyendas[i] : leyendas[1]}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return comments;
    }

    return (
        <>{comments_loop()}</>
    );
}

export default Comments;