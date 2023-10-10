import { TarjetasDeRefugio } from '../TarjetasDeRefugio';

export const Resultados = ({ resultados }) => {
    
    return (
        <div id="resultados_de_refugios_wrapper" className="py-4">
            <h5 className="text-center pb-4">La búsqueda ha arrojado {resultados.length} {resultados.length !== 1 ? "resultados" : "resultado"}.</h5>
            <TarjetasDeRefugio refugios={resultados} />
        </div>
    );
}