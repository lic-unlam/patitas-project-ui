import { BarraDeBusqueda } from './BarraDeBusqueda';
import { Resultados } from './Resultados';

const BuscadorDeRefugios = () => {
    return (
        <div id="buscador_de_refugios">
            <BarraDeBusqueda />
            <Resultados />
        </div>
    );
}

export default BuscadorDeRefugios;