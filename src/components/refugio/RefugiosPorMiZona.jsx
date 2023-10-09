import { TarjetasDeRefugio } from "./TarjetasDeRefugio"

export const RefugiosPorMiZona = (props) => {
    const { miBarrio, refugios } = props;
    const refugiosDeMiBarrio = refugios.filter(refugio => refugio.barrio === miBarrio);

    return (
        <div id="refugios_por_mi_zona_wrapper">
            <h2><i className="bi bi-geo-alt-fill"></i> Refugios encontrados en tu zona: <strong>{props.miBarrio}</strong></h2>
            <TarjetasDeRefugio refugios={refugiosDeMiBarrio} />
        </div>
    )
}