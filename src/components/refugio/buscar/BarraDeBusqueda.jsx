export const BarraDeBusqueda = () => {
    return (
        <div id="barra_de_busqueda_wrapper">
            <h1 style={{'fontFamily': 'quicksand'}} className="pb-2">Buscador de refugios</h1>
            <div className="row">
                <div className="col-6">
                    <div className="input-group">
                        <input id="shelter_search" type="text" className="form-control" placeholder="Buscar refugio..." aria-label="Buscar refugio"/>
                        <button id="shelter_search_button" type="button" className="btn"><i className="bi bi-search"></i></button>
                    </div>
                    <div className="form-group row py-2 role-selector-wrapper">
                        <label className="col-auto my-auto">Filtrar por barrio porteño:</label>
                        <div className="col-4">
                            <select id="barrio_selector" className="form-select form-select-sm" aria-label="Seleccionar barrio porteño">
                                <option value="0" defaultValue>Todos</option>
                                <option value="1">Recoleta</option>
                                <option value="2">Congreso</option>
                                <option value="3">Puerto Madero</option>
                                <option value="4">Caballito</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}