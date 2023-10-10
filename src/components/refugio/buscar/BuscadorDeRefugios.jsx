import { useState } from 'react';
import { BarraDeBusqueda } from './BarraDeBusqueda';
import { Resultados } from './Resultados';

const BuscadorDeRefugios = () => {
    const [ resultados, setResultados ] = useState(false); // primero lo seteo a 'false' para que no muestre nada al cargar la página
    
    return (
        <div id="buscador_de_refugios">
            <BarraDeBusqueda setResultados={setResultados} />
            {resultados && <Resultados resultados={resultados} />}
        </div>
    );
}

export default BuscadorDeRefugios;