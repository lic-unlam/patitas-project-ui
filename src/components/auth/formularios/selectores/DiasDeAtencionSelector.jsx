export const DiasDeAtencionSelector = () => {
    return (
        <div className="form-group py-2">
            <p>Días de atención:</p>
            <div className="pb-2">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="lunes" value="option1"/>
                    <label className="form-check-label" htmlFor="lunes">Lunes</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="martes" value="option2"/>
                    <label className="form-check-label" htmlFor="martes">Martes</label>
                </div>
            </div>
            <div className="pb-2">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="miercoles" value="option1"/>
                    <label className="form-check-label" htmlFor="miercoles">Miércoles</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="jueves" value="option2"/>
                    <label className="form-check-label" htmlFor="jueves">Jueves</label>
                </div>
            </div>
            <div className="pb-2">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="viernes" value="option1"/>
                    <label className="form-check-label" htmlFor="viernes">Viernes</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="sabado" value="option2"/>
                    <label className="form-check-label" htmlFor="sabado">Sábado</label>
                </div>
            </div>
            <div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="domingo" value="option1"/>
                    <label className="form-check-label" htmlFor="domingo">Domingo</label>
                </div>
            </div>
        </div>
    );
}