import React, { useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';

const Animales = (props) => {
    const location = useLocation();
    const { animales } = props;
    console.log(animales);

    useEffect(() => {
        document.title = props.title.concat(' - ', window.$title);
    }, []);

    function thumbnail_loop() {
		let thumbs = [];

		for(let i = 0;i < 12;i++) {
			thumbs.push(
                <div className="col-md-4 col-xl-3" key={i}>
                    <Link to={`${location.pathname}/${i+1}`}><img className="img-fluid animal-thumbnail" src={`/img/shelter/animals/thumbnail_${i+1}.jpg`} alt="post_thumbnail" /></Link>
                </div>
            );
		}

		return thumbs;
	}

    return (
        <>
            <div className="row thumbnails-wrapper">
                {thumbnail_loop()}
            </div>
            {/*<Outlet />*/}
        </>
    );
}

export default Animales;