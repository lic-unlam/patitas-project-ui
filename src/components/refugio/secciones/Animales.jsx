import React, { useEffect } from 'react';
import { Link, useLocation, useParams, Outlet } from 'react-router-dom';

import { secciones } from 'src/utils/constants/refugio';

const Animales = (props) => {
    const location = useLocation();
    const { id, seccion } = useParams();
    const { animales } = props;

    useEffect(() => {
        document.title = props.title.concat(' - ', window.$title);
    }, []);

    /*function thumbnail_loop() {
		let thumbs = [];

		for(let i = 0;i < 12;i++) {
			thumbs.push(
                <div className="col-md-4 col-xl-3" key={i}>
                    <Link to={`${location.pathname}/${i+1}`}><img className="img-fluid animal-thumbnail" src={`/img/shelter/animals/thumbnail_${i+1}.jpg`} alt="post_thumbnail" /></Link>
                </div>
            );
		}

		return thumbs;
	}*/

    const mostrarAnimales = () => {
        let imagenes = [];
        const urlPrefix = `${location.pathname}${!seccion ? '/' + secciones.animales : ''}`;

        if(animales.length > 0) {
            animales.map((animal, index) => {
                imagenes.push(
                    <div className="col-md-4 col-xl-3" key={index} title={animal.nombre}>
                        <Link to={`${urlPrefix}/${animal.id}`} state={animal}><img className="img-fluid animal-thumbnail" src={`https://localhost:7277/api/refugios/${id}/animales/images/animal_${animal.id}.jpg`} alt={`foto_animal_${animal.nombre}`} /></Link>
                    </div>
                );
            });

            return imagenes;
        }

        return <div className="text-center">
            <h4>Este refugio aún no publicó ningún animal.</h4>
        </div>
    }

    return (
        <>
            <div className="row thumbnails-wrapper">
                {/*thumbnail_loop()*/}
                {mostrarAnimales()}
            </div>
            {<Outlet />}
        </>
    );
}

export default Animales;