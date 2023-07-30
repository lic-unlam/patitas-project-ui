import {Link} from 'react-router-dom';

function Gallery(props) {
    let {pathname} = props;

    function thumbnail_loop() {
		let thumbs = [];

		for(let i = 0;i < 12;i++) {
			thumbs.push(
                <div className='col-md-4 col-xl-3' key={i}>
                    <Link to={`${pathname}/publication/${i+1}`}><img className='img-fluid' src={`/img/shelter/animals/thumbnail_${i+1}.jpg`} alt='post_thumbnail'/></Link>
                </div>
            );
		}

		return thumbs;
	}

    return (
        <>{thumbnail_loop()}</>
    );
}

export default Gallery;