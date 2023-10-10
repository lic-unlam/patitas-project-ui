import { TarjetasDeRefugio } from '../TarjetasDeRefugio';

export const Resultados = ({ resultados }) => {
    
    return (
        <div id="resultados_de_refugios_wrapper" className="py-4">
            <h5 className="text-center pb-4">{resultados.length} {resultados.length !== 1 ? "refugios encontrados" : "refugio encontrado"}.</h5>
            <TarjetasDeRefugio refugios={resultados} />
        </div>
    );
}