import React, { useState, useEffect } from "react";

const PlanDeVacunacion = () => {
    const [ listaCerrada, setListaCerrada ] = useState(true);

    useEffect(() => {
        const collapsePlanDeVacunacion = document.getElementById('collapsePlanDeVacunacion');
        collapsePlanDeVacunacion.addEventListener('show.bs.collapse', event => setListaCerrada(false));
        collapsePlanDeVacunacion.addEventListener('hide.bs.collapse', event => setListaCerrada(true));

        return () => {
            collapsePlanDeVacunacion.removeEventListener('show.bs.collapse', event => setListaCerrada(false));
            collapsePlanDeVacunacion.removeEventListener('hide.bs.collapse', event => setListaCerrada(true));
            //return true;
        }
    }, []);
    
    return (
        <div id="plan_de_vacunacion">
            <button className="btn btn-sm btn-dark w-100 mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePlanDeVacunacion" aria-expanded="false" aria-controls="collapsePlanDeVacunacion">Ver plan de vacunación <span><i className={`bi bi-chevron-${ listaCerrada ? "down" : "up"}`}></i></span></button>
            <div className="collapse" id="collapsePlanDeVacunacion">
                <div className="card grilla-de-items lista-de-vacunas">
                    <div className="row">
                        <div className="col">
                            <ul className="list-group list-group-horizontal">
                                <li className="list-group-item">Vacuna</li>
                                <li className="list-group-item">Aplicada</li>
                            </ul>
                            <ul className="list-group list-group-horizontal">
                                <li className="list-group-item">Parvovirus (1º dosis)</li>
                                <li className="list-group-item"><img className="img-fluid" width={28} src="/img/check.png" alt="check"/></li>
                            </ul>
                            <ul className="list-group list-group-horizontal">
                                <li className="list-group-item">Parvovirus (2º dosis)</li>
                                <li className="list-group-item"><img className="img-fluid grayscale" width={28} src="/img/check.png" alt="check"/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlanDeVacunacion;