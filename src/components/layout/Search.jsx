import React from 'react';
import {Link,useNavigate} from 'react-router-dom';

import shelterDb from '../helpers/sheltersDb.json';

export const Search = (props) => {
	const navigate = useNavigate();

	const triggerSuggestions = (event) => {
		if(event.target.value.length >= 3) {
			document.querySelector('.suggestions-wrapper').style.removeProperty('display');
		}
		else
			document.querySelector('.suggestions-wrapper').style = "display: none;";
	}

	const suggestionClick = (event, id) => {
		event.preventDefault();
		navigate(`/refugios/${id}`);
		document.querySelector('.suggestions-wrapper').style = "display: none;";
	}

	return (
		<div className="input-group">
			<input id="shelter_search" onChange={triggerSuggestions} onFocus={triggerSuggestions} type="text" className="form-control" placeholder="Buscar por refugio o barrio porteño" aria-label="Buscar por refugio o barrio porteño"/>
			<button id="shelter_search_button" type="button" className="btn"><i className="bi bi-search"></i></button>
			<div className="list-group suggestions-wrapper" style={{'display': 'none'}}>
				{shelterDb.map((shelter, index) =>
					<Link to={`/shelter/${shelter.id}`} onClick={(event) => suggestionClick(event, shelter.id)} className="list-group-item list-group-item-action" aria-current="true" key={index}>
						<div className="d-flex w-100 justify-content-between">
							<h5 className="mb-1">{shelter.name}</h5>
							<span>{shelter.stars} <i className="bi bi-star-fill"></i></span>
						</div>
						<p className="mb-1">{shelter.address}, {shelter.district}</p>
					</Link>
				)}
				<Link to="/results" onClick={triggerSuggestions} className="list-group-item list-group-item-action text-center">
					<div className="d-flex w-100 justify-content-between text-center">
						<small className="mb-1">Ver todos los resultados</small>
					</div>
				</Link>
			</div>
		</div>
	);
}